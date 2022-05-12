import Image from 'next/image'
import Link from 'next/link'
import LogoImg from '../../../assets/logo.svg'
const Logo = () => {
  return (
    <Link href="/">
      <a className="relative h-[40px] w-[170px] ">
        <Image src={LogoImg} layout="fill" className="absolute" priority />
      </a>
    </Link>
  )
}

export default Logo
