import React from 'react'
import Logo from '../assets/logo_pectra.svg'
import backgroundImage from "../assets/backgroundPectra.svg";

export const HeaderDates = () => {
  return (
    <header className='flex items-center justify-center overflow-hidden top-0 left-0 w-full bg-center shadow-md' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <a href={"/"} className="flex items-center justify-center">
            <img src={Logo} className='h-28'/>
        </a>
    </header>
  )
}
