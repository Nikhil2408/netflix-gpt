import React, { useEffect } from 'react'
import netflixLogo from "../assets/Netflix_Logo.png";
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/userSlice';
import { AVATAR_IMG, languages } from '../utils/constants';
import { gptActions } from '../redux/gptSlice';
import { appActions } from '../redux/appSlice';

const Header = (props) => {
    const navigate = useNavigate();
    const {page} = props;
    const displayName = useSelector(state => state?.userReducer?.displayName);
    const gptView = useSelector(state => state.gptReducer.gptView);
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

    function handleGPTSearch(){
        dispatch(gptActions.toggleGptSearchView());
    }

    let parentCSS;

    if(page === "Browse"){
        parentCSS = "absolute px-8 py-4 w-screen flex flex-row justify-between items-center z-20 bg-gradient-to-b from-black"
    } else{
        parentCSS = "absolute px-8 py-4 bg-gradient-to-b from-black flex flex-row justify-between items-center"
    }

    function handleLanguageSelection(e){
        dispatch(appActions.setLanguage(e.target.value))
    }

  return (
    <div className={parentCSS}>
        <img className='w-40' src={netflixLogo} alt='Netflix Logo'/>
        {
            page === "Browse"
            &&
            <div className='flex flex-row mr-2 items-center'>
                {
                    gptView
                    &&
                    <select onChange={handleLanguageSelection}>
                        {
                            languages.map(lang => {
                                return <option key={lang.langCode} value={lang.langCode}>{lang.languageName}</option>
                            })
                        }
                    </select>

                }
                <button className='mx-4 px-4 py-2 bg-[rgb(229,9,20)] text-white rounded' onClick={handleGPTSearch}>{gptView ? 'Close GPT Search': 'Open GPT Search'}</button>
                <p className='mr-2 text-lg text-white'>Welcome {displayName}!</p>
                <img className = "w-10 h-10 mr-2" src={AVATAR_IMG} alt="Profile Logo" />
                <button className='text-white font-bold' onClick={handleSignOut}>Sign Out</button>
            </div>
        }
    </div>
  )
}

export default Header