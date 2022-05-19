import Image from 'next/image'
import SearchIcon from '../../../assets/icons/shared/search.svg'
const Header = () => {
  return (
    <div className="relative">
      <div className="relative h-[230px] w-screen bg-contain  ">
        <Image
          src={
            'https://images.deliveryhero.io/image/pedidosya/profile-headers/custom-header-inside-veggie-revolution.jpg?quality=70&width=1280&webp=1'
          }
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="bg-gradient-custom absolute bottom-0 z-0 h-[200px] w-full  " />
      <div className="absolute top-0 flex h-full flex-col text-white ">
        <div className="flex-grow" />
        <div className="pl-[16%] ">
          <div className="my-[12px] flex flex-col gap-2">
            <h1 className="font-muli min-w-max text-[24px] font-extrabold ">
              Inside Veggie Revolution Florida
            </h1>
            <div className="font-lato flex gap-2 text-[14px] ">
              <span>15 - 30 min</span>
              <span>$139 envío</span>
              <span>Mínimo $299</span>
            </div>
          </div>
          <div className="mb-6 flex h-[36px] w-[520px] items-center gap-2 rounded-full bg-white pl-4">
            <label className="relative h-[16px] w-[16px]" htmlFor="search">
              <Image src={SearchIcon} layout="fill" />
            </label>
            <input
              placeholder="Buscar productos..."
              name="search"
              id="search"
              className="font-muli h-full w-full rounded-r-full bg-white text-[14px] text-[rgba(0,0,0,0.7)] outline-none "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
