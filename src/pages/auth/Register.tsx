import { useState } from "react";
import faceBookIcon from "../../assets/png/Group 3.svg";
import AuthLayout from "../../layouts/AuthLayout";
import logo from "../../assets/png/Group 2.svg";
import { loginClasses } from "./LoginClasses";
import RegisterWithGoogle from "./RegisterWithGoogle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  AuthForm,
  AuthFormSchema,
} from "../../models/AuthFormSchema/AuthFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";

interface authTypeSign {
  authType: () => void
}
const Signup = ({authType}:authTypeSign) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  
  const dispatch = useAppDispatch();

 

  //login styling tailwindcss
  const { stateStyle, inputStyle, buttonStyle } = loginClasses;
  const [custom, setCustom] = useState(false);
  const toggleCustom = () => {
    setCustom(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(AuthFormSchema),
  });

  const handleFormSubmit = async (data: AuthForm) => {
    const { email, password,fullname } = data;

    try {
      setLoading(true);
      const { user}  = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", user.uid), { email, fullname});
      setLoading(false);

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
      setErrorMessage("Email Address Already Registered")
    }
  };

  return (
    <AuthLayout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt={logo} />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
          {errorMessage && <p className="text-red-500 text-center text-base">{errorMessage}</p>}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
            {!custom ? (
              <>
                <hr className="w-full h-px my-8 bg-text-gray-900 border dark:bg-neutral-400" />

                {/* <button type="button" onClick={toggleCustom}>Login with Email</button> */}
                <button
                className={buttonStyle}
                  name="Sign up with Email"
                  type="button"
                  onClick={toggleCustom}
                >Sign up with Email</button>
              </>
            ) : (
              <>
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
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className={inputStyle}
                      id="email"
                      placeholder="email"
                      type="email"
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
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className={inputStyle}
                      id="password"
                      placeholder="password"
                      type="password"
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
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I agree with the{" "}
                    <span className="text-[#0FA1F4]">Terms of services</span>{" "}
                    and <span className="text-[#0FA1F4]">Privacy Policy</span>
                  </label>
                </div>

                <div>
                  <button
                  className={buttonStyle}
                    name={`${loading ? "...loading" : "Sign up"}`}
                    type="submit"
                    disabled={loading}
                  >{loading ? "...loading" : "Sign up"}</button>
                </div>
              </>
            )}
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
                <RegisterWithGoogle />

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
                    <span className="text-[#1877F2]">Login with Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a Member? <span className={stateStyle} onClick={authType}>Login</span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
