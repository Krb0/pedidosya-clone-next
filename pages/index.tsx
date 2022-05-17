import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Layout'
import LocationSVG from '../assets/icons/location.svg'
import MoreInfoSVG from '../assets/icons/moreInfo.svg'
import locationBadge from '../assets/icons/locationBadge.svg'
import foodBadge from '../assets/icons/foodBadge.svg'
import shieldBadge from '../assets/icons/shieldBadge.svg'
import { useDispatch, useSelector } from 'react-redux'
import { add, clear } from '../store/cart/cart.slice'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

const BadgesData = [
  {
    img: locationBadge,
    title: 'Top Ciudades',
    description:
      'La Plata, Rosario, San Isidro, Córdoba, Buenos Aires, Vicente López',
  },
  {
    img: shieldBadge,
    title: 'Top Barrios',
    description:
      'Palermo, Caballito, Belgrano, Recoleta, Microcentro, Nueva Córodoba',
  },
  {
    img: foodBadge,
    title: 'Top Comidas',
    description: 'Sushi, Picadas, Empanadas, Desayunos, Helados, Pizzas',
  },
]

const Home: NextPage = () => {
  /*   const cart = useSelector((state: any) => state.cart)
  console.log(cart) */
  const dispatch = useDispatch()
  const { data: session } = useSession()
  return (
    <Layout>
      <Head>
        <title>FakeYa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
                  <span className="mr-1 text-[1.1rem] text-black">
                    Zona Falsa
                  </span>
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
        <section className="mt-10 flex w-full flex-col items-center justify-center">
          <div>
            <h4 className="mb-2 w-max pl-6 font-[700]">
              Los mejores restaurantes
            </h4>
            <div className="mb-10 flex items-center gap-1">
              {[
                'https://img.pystatic.com/home-chains/ar/burger_king.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/sushi_pop.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/el_club_de_la_milanesa.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/almacen-de-pizzas.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/morita.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/el_noble.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/carrefour.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/fabric.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/subway.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/pain_quotidien.png?quality=70&width=200',
                'https://img.pystatic.com/home-chains/ar/la-farola.png?quality=70&width=200',
              ].map((img) => (
                <Icon img={img} key={img} />
              ))}
            </div>
            <h5 className="mb-3 w-max pl-6 font-[700]">
              Delivery que satisface los sentidos
            </h5>
            <p className="mb-4 w-max pl-6 text-[0.85rem] font-[400] text-[#100423] ">
              ¿Con Hambre y Nada te Copa? Acá tu Comida Sabrosa, Hoy Puede Tener
              otro Gusto. PedidosYa, Te Llena el Corazón
            </p>

            <div className="mt-10 mb-8 flex flex-col gap-2 pl-6">
              {BadgesData.map((item) => (
                <Badge {...item} key={item.title} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home

const Icon = ({ img }: { img: string }) => {
  return (
    <div className="relative h-[80px] w-[80px]">
      <Image src={img} layout="fill" alt="business icon" />
    </div>
  )
}

const Badge = ({
  img,
  title,
  description,
}: {
  img: any
  title: string
  description: string
}) => {
  return (
    <div className="flex gap-6">
      <div className="relative h-[80px] w-[80px]">
        <Image src={img} layout="fill" />
      </div>
      <div className="flex flex-col justify-center gap-3 ">
        <span className="font-muli text-[0.92rem] font-[800] ">{title}</span>
        <p className="font-muli text-[0.83rem] font-[400] ">{description}</p>
      </div>
    </div>
  )
}
