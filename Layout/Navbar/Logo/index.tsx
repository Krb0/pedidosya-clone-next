import Image from 'next/image'
import LogoImg from '../../../assets/logo.svg'
const Logo = () => {
  return (
    <div className="relative h-[40px] w-[170px] ">
      <Image src={LogoImg} layout="fill" className="absolute" />
    </div>
  )
}

export default Logo
