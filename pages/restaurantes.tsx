import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../Layout'

const Restaurantes: NextPage = () => {
  const services = [
    {
      id: 1,
      name: 'Restaurantes',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/restaurants-icon.png?quality=100&width=100',
    },
    {
      id: 2,
      name: 'Mercados',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/groceries-icon.png?quality=100&width=100',
    },
    {
      id: 3,
      name: 'Bebidas',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/drinks-icon.png?quality=100&width=100',
    },
    {
      id: 4,
      name: 'Kioscos',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/kioscs-icon.png?quality=100&width=100',
    },
    {
      id: 5,
      name: 'Café & Deli',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/coffee-icon.png?quality=100&width=100',
    },
    {
      id: 6,
      name: 'Farmacias',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/pharmacies-icon.png?quality=100&width=100',
    },
    {
      id: 7,
      name: 'Tiendas',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/shops-icon.png?quality=100&width=100',
    },
    {
      id: 8,
      name: 'Mascotas',
      img: 'https://images.deliveryhero.io/image/pedidosya/verticals/pedidosya/pets-icon.png?quality=100&width=100',
    },
  ]
  return (
    <Layout>
      <div className="max-w-screen flex min-h-screen bg-[#F9F6F4] ">
        <div className="flex flex-[1] flex-col ">
          <div className="flex-col pl-[14%] pt-[24px] ">
            <div className="space-between flex flex-wrap">
              {services.map(({ name, img, id }) => (
                <div
                  className="mt-[15px] flex basis-[33%] flex-col items-center "
                  key={id}
                >
                  <img
                    src={img}
                    className={`h-[66px] w-[66px] cursor-pointer rounded-full object-cover object-center ${
                      id === 1 && 'border-[1px] border-black'
                    } `}
                  />
                  <span className="font-muli cursor-pointer text-[13px] font-extrabold ">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <div>sorter</div>
          </div>
        </div>
        <div className="flex flex-[2] flex-col"></div>
        <div className="flex  flex-[1] flex-col"></div>
      </div>
    </Layout>
  )
}

export default Restaurantes
