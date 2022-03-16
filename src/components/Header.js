import React from 'react'
import memelogo from '../images/TrollFace.png'

const Header = () => {
  return (
    <header className="h-16 flex items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <img className="w-14 ml-6 mr-2" src={memelogo} alt="a meme face" />
        <h1 className="text-white text-3xl font-bold font-karla">Meme Generator</h1>
    </header>
  );
}

export default Header
