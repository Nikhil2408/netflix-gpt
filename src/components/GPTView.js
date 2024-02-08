import React from 'react';
import { languageConstants } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTView = () => {

    const selectedLanguage = useSelector(state => state.appReducer.selectedLanguage);
  return (
    <div className='mt-32 py-4 bg-black flex justify-center'>
        <form className='flex flex-row'>
            <input className='w-[400px] h-10 mr-4 px-2 outline-none' type="text" placeholder={languageConstants[selectedLanguage].gptPlaceholderText}/>
            <button className='bg-[rgb(229,9,20)] text-white px-4 py-2 rounded'>{languageConstants[selectedLanguage].searchText}</button>
        </form>
    </div>
  )
}

export default GPTView