import Image from 'next/image'
import { useState } from 'react'
import moreVertIcon from '../../../../assets/icons/shared/moreInfo.svg'
import lessVertIcon from '../../../../assets/icons/shared/lessVertIcon.svg'
const Options = () => {
  const items = [
    {
      title: 'Ordenar',
      options: ['Mejor puntuados', 'Más cercanos', 'Menor tiempo de entrega'],
    },
    {
      title: 'Filtros',
      options: ['Delivery por PedidosYa'],
    },
    {
      title: 'Promociones',
      options: ['Cupón', 'Tarjeta', 'Descuentos'],
    },
  ]
  return (
    <div className="custom-shadow mt-8 p-6">
      <List items={items} />
    </div>
  )
}

export default Options

const List = ({ items }: { items: { title: string; options: string[] }[] }) => {
  const [active, setActive] = useState([true, true, true])
  return (
    <>
      {items.map(({ title, options }, index) => (
        <div style={{ marginTop: 4, marginBottom: 12 }} key={title}>
          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() =>
              setActive((state) => {
                const newState = [...state]
                newState[index] = !state[index]
                return newState
              })
            }
          >
            <p className="font-muli text-[16px] font-bold ">{title}</p>
            <div className="relative h-4 w-4">
              <Image
                src={active[index] ? moreVertIcon : lessVertIcon}
                layout="fill"
              />
            </div>
          </div>
          <ul className="list-decoration">
            {active[index] &&
              options.map((option) => (
                <li className="cursor-pointer" key={option}>
                  <span>{option}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  )
}
