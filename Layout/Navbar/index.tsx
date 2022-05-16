import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Market from '../../assets/icons/market.svg'
import Link from 'next/link'
import Profile from './Profile'
const Navbar = () => {
  return (
    <div className="z-2 relative flex w-full items-center bg-[#F9F6F4] py-4 shadow-lg">
      <div className="flex w-[25%] justify-center">
        <Logo />
      </div>
      <div className="w-[70%]" />
      <Link href="/business">
        <a className="font-muli flex min-w-[200px] items-center justify-center gap-1 rounded-full bg-[#EAE3E3] px-4 py-1 font-[800] ">
          <div className="relative h-4 w-4">
            <Image layout="fill" src={Market} />
          </div>
          <span className="text-[15px] tracking-tight ">
            Registrá tu negocio
          </span>
        </a>
      </Link>
      <div className="w-[25%]">
        <Profile />
      </div>
    </div>
  )
}

export default Navbar
