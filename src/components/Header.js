import React from 'react'
import netflixLogo from "../assets/Netflix_Logo.png";
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const navigate = useNavigate();
    const {page} = props;
    const displayName = useSelector(state => state.userReducer.displayName)

    function handleSignOut(){
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black w-screen flex flex-row justify-between items-center">
        <img className='w-40' src={netflixLogo} alt='Netflix Logo'/>
        {
            page === "Browse"
            &&
            <div className='flex flex-row mr-2 items-center'>
                <p className='mr-2 text-lg'>Welcome {displayName}!</p>
                <img className = "w-10 h-10 mr-2" src="https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201" alt="Profile Logo" />
                <button className='text-white font-bold' onClick={handleSignOut}>Sign Out</button>
            </div>
        }
    </div>
  )
}

export default Header