import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../assets/icons/logo.svg'
import google from '../assets/icons/google.svg'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
const Login: NextPage = () => {
  return (
    <div className="absolute flex h-screen w-screen items-center justify-center bg-[#413d4bbf]">
      <div className="flex h-screen w-screen flex-col rounded-[10px] bg-[#fa0050] p-5 pt-4 text-white shadow-2xl lg:h-auto lg:max-w-[40vw] ">
        <header className="mb-12 flex w-full justify-end tracking-tighter">
          <Link href="/">
            <span className="font-muli ml-0 w-max cursor-pointer text-[0.85rem] font-extrabold ">
              Omitir
            </span>
          </Link>
        </header>
        <div className="relative mx-auto mb-12 h-[81px] w-[85px]">
          <Image src={logo} layout="fill" />
        </div>
        <h1 className="font-muli mx-auto text-[24px] font-bold ">
          ¡Te damos la bienvenida!
        </h1>
        <h2 className="font-muli mx-auto mb-3 text-[14px] font-bold">
          ¿Cómo querés continuar?
        </h2>
        <div className="mt-8 flex w-full flex-col gap-4">
          <button className="font-muli relative flex items-center rounded-full bg-[#3b5998] p-2 py-3 font-bold" disabled>
            <div className="absolute left-2 h-8 w-8">
              <Image layout="fill" src={google} />
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
          <button className="font-muli relative flex items-center rounded-full border-2 p-2 py-3 font-bold" disabled>
            <span className="w-full">Continuar de otra forma</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
