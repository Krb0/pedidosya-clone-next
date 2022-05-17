import Image from 'next/image'
import LocationSVG from '../../../assets/icons/Home/location.svg'
import MoreInfoSVG from '../../../assets/icons/shared/moreInfo.svg'

const MainHero = () => {
  return (
    <section className="md:bg-food flex h-[85vh] flex-col items-center justify-center gap-10 pb-[60px] text-white ">
      <div className="font-lato text-center">
        <h1 className="text-[2.75rem] font-[700]">¡Pedí lo que quieras!</h1>
        <h2 className="text-[1.1rem]">
          Restaurantes, mercados, farmacias, kioscos y mucho más.
        </h2>
      </div>
      <div className="flex w-[60%] flex-col gap-4">
        <span className="font-muli text-[1.05rem] font-[800]">
          Ingresá tu dirección
        </span>
        <div className="flex h-[64px] w-[100%] ">
          <div className="flex h-full w-[100%] items-center rounded-full bg-white">
            <div className="flex min-w-fit items-center ">
              <div className="relative ml-[16px] mr-[8px] h-[1.1rem] w-[1.1rem]  ">
                <Image src={LocationSVG} layout="fill" />
              </div>
              <span className="mr-1 text-[1.1rem] text-black">Zona Falsa</span>
              <div className="relative mr-2 h-[1.3rem] w-[1.3rem]  ">
                <Image src={MoreInfoSVG} layout="fill" />
              </div>
            </div>
            <input
              className="h-full w-full rounded-full text-gray-500 outline-none"
              placeholder="Calle y número de puerta"
            />
          </div>
          <button className="ml-[20px] h-full w-[160px] rounded-full bg-[#FA0050] text-[1.15rem] font-[700] ">
            Buscar
          </button>
        </div>
      </div>
    </section>
  )
}

export default MainHero
