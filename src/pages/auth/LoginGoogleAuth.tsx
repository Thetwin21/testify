import { useState} from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth , googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import ButtonLayout from '../../layouts/ButtonLayout';
import { login } from '../../features/auth/authSlice';
import { useAppDispatch } from '../../app/hooks';

const GoogleAuth = () => {
  const history = useNavigate()
  const dispatch = useAppDispatch()
const [notRegistered, setNotRegistered] = useState(false)

  const signInWithGoogle =async () => {
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
      setNotRegistered(true)
      console.log(error)
    }
  }
  return (
    <ButtonLayout signUser={signInWithGoogle}>
      Login with Google
    </ButtonLayout>
  )
}

export default GoogleAuth