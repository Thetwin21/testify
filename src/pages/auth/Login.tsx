import {  useState } from "react";
//firebase auth

import logo from "../../assets/png/Group 2.svg";
import faceBookIcon from "../../assets/png/Group 3.svg";
import GoogleAuth from "./LoginGoogleAuth";
import { loginClasses } from "./LoginClasses";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { AuthForm, AuthFormSchema } from "../../models/AuthFormSchema/AuthFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";
import ResetPassword from "../../components/general/ResetPassword";


interface loginAthTypes {
  authType: () => void
}

export default function Login({authType}: loginAthTypes) {

  const {formContainer, formHeaderContainer, stateStyle, inputStyle} = loginClasses
  const [ resetPassword, setResetPassword] = useState(false)
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  //reset password by email
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState<string | null>(null)
  const [resetPasswordError, setResetPasswordError] = useState<string | null>(null)

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(AuthFormSchema),
  });

  //reset password
  const handleResetPassword = async () => {
    if(!resetPasswordEmail.length) return;
    try {
      await sendPasswordResetEmail(auth,resetPasswordEmail)
      setResetPasswordSuccess("Password reset email sent. Please check your inbox")
      setResetPasswordError(null)
    } catch (error: any) {
      setResetPasswordError(error.message)
      setResetPasswordSuccess(null)
    }
  }

  const handleFormSubmit = async (data: AuthForm) => {
    const { email, password,fullname } = data;
    console.log(data)

    try {
      setLoading(true);
      const { user}  = await signInWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", user.uid), { email, fullname});
      setLoading(false);
      console.log(user)

      if (user && user.email)
        dispatch(
          login({
            id: user.uid,
            email: user.email,
            fullname: user.displayName,
            photoURL: user.photoURL || null,
          })
        );
    } catch (error) {
      setLoading(false)
      setErrorMessage("Email not registered")
      console.log(error)
    }
  };

  return (
    <>
    <ResetPassword resetPasswordEmail={resetPasswordEmail} resetPasswordSuccess={resetPasswordSuccess} resetPasswordError={resetPasswordError} setResetPasswordEmail={setResetPasswordEmail} isOpen={resetPassword} onClose={()=> setResetPassword(false)} handleResetPassword={handleResetPassword} />
          <div className={formContainer}>
            <div className={formHeaderContainer}>
              <div className=" w-fit mx-auto ">
                <span className="text-white text-2xl">
                  <img className="mx-auto h-10 w-auto" src={logo} alt={logo} />
                </span>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or
                <span className={stateStyle} onClick={authType}> Register</span>
              </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                {errorMessage && <span>{errorMessage}</span>}
                <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className={inputStyle}
                      id="fullname"
                      placeholder="Full Name"
                      type="text"
                      {...register("fullname")}
                    />
                    {errors.fullname ? (
                      <span className="text-red-600 text-sm">
                        {errors.fullname.message}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("email")}
                        />
                        {errors.email ? (
                          <span className="text-red-600 text-sm">
                            {errors.email.message}
                          </span>
                        ) : (
                          <></>
                        )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register("password")}
                        />
                        {errors.password ? (
                          <span className="text-red-600 text-sm">
                            {errors.password.message}
                          </span>
                        ) : (
                          <></>
                        )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <button type="button" onClick={()=> setResetPassword(true)} className={stateStyle}>

                        Forgot your password?
                      
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0FA1F4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {loading ? "...loading" : "Sign in"}
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <GoogleAuth />

                    <div>
                      <a
                        href="#"
                        className="w-full inline-flex justify-center p-2 gap-x-2 border  border-gray-300 rounded-md shadow-sm bg-[#4c8ecc3f] text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <img
                          className="w-5"
                          src={faceBookIcon}
                          alt={faceBookIcon}
                        />
                        <span className="text-[#1877F2]">
                          Login with Facebook
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
