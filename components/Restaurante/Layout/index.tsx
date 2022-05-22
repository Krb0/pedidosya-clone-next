import Image from 'next/image'
import Logo from '../../../assets/icons/Restaurant/logo.svg'
import LeftArrow from '../../../assets/icons/Restaurant/LeftArrow.svg'
import Share from '../../../assets/icons/Restaurant/share.svg'
import Info from '../../../assets/icons/Restaurant/info.svg'
import Link from 'next/link'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <header className="max-w-screen flex h-[53px] items-center justify-between bg-white ">
        <div className="flex items-center">
          <Link href="/restaurantes">
            <div className="relative m-[10px] h-[24px] w-[24px] cursor-pointer ">
              <Image src={LeftArrow} layout="fill" />
            </div>
          </Link>
          <Link href="/">
            <div className="relative h-[20px] w-[87px] cursor-pointer">
              <Image src={Logo} layout="fill" />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative m-[10px] h-[24px] w-[24px] cursor-pointer ">
            <Image src={Share} layout="fill" />
          </div>
          <div className="relative m-[10px] h-[24px] w-[24px] cursor-pointer">
            <Image src={Info} layout="fill" />
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout
