import React, { useEffect } from 'react'
import netflixLogo from "../assets/Netflix_Logo.png";
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/userSlice';
import { AVATAR_IMG } from '../utils/constants';

const Header = (props) => {
    const navigate = useNavigate();
    const {page} = props;
    const displayName = useSelector(state => state?.userReducer?.displayName)
    const dispatch = useDispatch();

    function handleSignOut(){
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/errors");
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(userActions.setUser({uid, email, displayName}))
              navigate("/browse")
            } else {
              dispatch(userActions.removeUser());
              navigate("/")
            }
        });
    }, [])

    let parentCSS;

    if(page === "Browse"){
        parentCSS = "absolute px-8 py-4 w-screen flex flex-row justify-between items-center z-20 bg-gradient-to-b from-black"
    } else{
        parentCSS = "absolute px-8 py-4 bg-gradient-to-b from-black flex flex-row justify-between items-center"
    }

  return (
    <div className={parentCSS}>
        <img className='w-40' src={netflixLogo} alt='Netflix Logo'/>
        {
            page === "Browse"
            &&
            <div className='flex flex-row mr-2 items-center'>
                <p className='mr-2 text-lg'>Welcome {displayName}!</p>
                <img className = "w-10 h-10 mr-2" src={AVATAR_IMG} alt="Profile Logo" />
                <button className='text-white font-bold' onClick={handleSignOut}>Sign Out</button>
            </div>
        }
    </div>
  )
}

export default Header