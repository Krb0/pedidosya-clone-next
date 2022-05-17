import type { NextPage } from 'next'
import Link from 'next/link'
import Buttons from '../components/Login/Buttons'
import Info from '../components/Login/Info'
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
        <Info />
        <Buttons />
      </div>
    </div>
  )
}

export default Login
