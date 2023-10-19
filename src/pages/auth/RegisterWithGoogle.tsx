import googleIcon from "../../assets/png/Group 4.svg";
import { signInWithPopup } from 'firebase/auth'
import { auth , googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import ButtonLayout from '../../layouts/ButtonLayout'
import { login } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

const RegisterWithGoogle = () => {
    const history = useNavigate()
    const dispatch = useAppDispatch()
    
  const signUpWithGoogle =async () => {
    try {
      const {user} = await signInWithPopup(auth, googleProvider)
      history("/home")
      
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
      console.log(error)
    }
  }
  return (
    <ButtonLayout signUser={signUpWithGoogle}>
    Sign up with Google
  </ButtonLayout>
  )
}

export default RegisterWithGoogle