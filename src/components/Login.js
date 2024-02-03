import React, {useState, useRef} from 'react'
import Header from './Header';
import { validateForm } from '../utils/validateForm';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../redux/userSlice';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const fullName = useRef("");
    const emailAddress = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignIn(){
        setIsSignIn(!isSignIn);
        if(!isSignIn){
            fullName.current.value = "";
        }
        emailAddress.current.value = "";
        password.current.value = "";
        setErrorMessage("");
    }
    
    function handleSubmitClick(eventObj){
        eventObj.preventDefault();
        const formData = {
            email: emailAddress.current.value,
            password: password.current.value,
            fullName: !isSignIn ? fullName.current.value : undefined
        }
        const message = validateForm(formData, isSignIn)
        setErrorMessage(message);
        if(message) return;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, emailAddress.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: fullName.current.value
                })
            })
            .then(() => {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(userActions.setUser({uid, email, displayName}))
                navigate("/browse")
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        } else{
            signInWithEmailAndPassword(auth, emailAddress.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                navigate("/browse")
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        }
    }

  return (
    <div>
        <Header page = "Login" />
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt = "Netflix Logo" />
        </div>
        <div className='absolute top-1/4 bg-black w-full bg-opacity-85 mx-auto border-2'>
            <h3 className='text-white text-2xl pb-4 pt-4 ml-4 font-bold'>{isSignIn ? 'Sign In' : 'Sign Up'}</h3>
            <form className='flex flex-col w-96'>
                {!isSignIn
                && <input className='p-2 m-4 bg-gray-900 text-white' type="text" placeholder='Enter your name' ref={fullName}/>}
                <input className='p-2 m-4 bg-gray-900 text-white' type="text" placeholder='Email or phone number' ref={emailAddress}/>
                <input className='p-2 m-4 mb-6 bg-gray-900 text-white' type="password" placeholder='Password' ref={password}/>
                
                {errorMessage && <p className='text-red-600 font-bold text-lg mx-4 mb-6'>{errorMessage}</p>}

                <button className='bg-[rgb(229,9,20)] mx-4 p-2 text-white font-bold' onClick = {handleSubmitClick}>{isSignIn ? "Sign In" : "Sign up"}</button>
                {
                    isSignIn
                    ?
                    <p className='text-white m-4'>New to Netflix? <a className='font-bold inline hover:underline cursor-pointer' onClick={handleSignIn}>Sign up now</a></p>
                    :
                    <p className='text-white m-4 font-bold hover:underline cursor-pointer inline' onClick={handleSignIn}>Sign in to Netflix</p>
                }
            </form>
        </div>
    </div>
  )
}

export default Login