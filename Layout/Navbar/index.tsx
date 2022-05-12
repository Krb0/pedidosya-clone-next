import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Market from '../../assets/icons/market.svg'
import MoreInfo from '../../assets/icons/moreInfo.svg'
import Link from 'next/link'
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
      <div className="flex w-[25%] items-center gap-2 pl-6 ">
        <div className="relative h-8 w-8 rounded-full">
          <Image
            layout="fill"
            className="rounded-full"
            src="https://play-lh.googleusercontent.com/QTL4zl6hukny5XrTW3PnNf9OH0E5osKG-DfrGEQ1YwRt1FoYdaHynTtlc0MyCq1w2mhq"
          />
        </div>
        <div className="relative h-4 w-4">
          <Image layout="fill" src={MoreInfo} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
