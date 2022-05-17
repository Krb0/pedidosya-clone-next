import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import google from '../../assets/icons/Login/google.svg'
import facebook from '../../assets/icons/Login/facebook.svg'

const Buttons = () => {
  return (
    <div className="mt-8 flex w-full flex-col gap-4">
      <button
        className="font-muli relative flex cursor-not-allowed items-center rounded-full bg-[#3b5998] p-2 py-3 font-bold"
        disabled
      >
        <div className="absolute left-2 h-8 w-8">
          <Image layout="fill" src={facebook} />
        </div>
        <span className="w-full">Continuar con Facebook</span>
      </button>
      <button
        onClick={() => signIn('google')}
        className="font-muli relative flex items-center rounded-full bg-blue-500 p-2 py-3 font-bold"
      >
        <div className="absolute left-2 h-8 w-8">
          <Image layout="fill" src={google} />
        </div>
        <span className="w-full">Continuar con Google</span>
      </button>
      <button
        className="font-muli relative flex cursor-not-allowed items-center rounded-full border-2 p-2 py-3 font-bold"
        disabled
      >
        <span className="w-full">Continuar de otra forma</span>
      </button>
    </div>
  )
}

export default Buttons
