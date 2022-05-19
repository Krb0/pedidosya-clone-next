import Image from 'next/image'
import moreVertIcon from '../../../../assets/icons/shared/moreInfo.svg'
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
  return (
    <>
      {items.map(({ title, options }) => (
        <>
          <div style={{ marginTop: 4, marginBottom: 12 }}>
            <div className="flex cursor-pointer items-center gap-1">
              <p className="font-muli text-[16px] font-bold ">{title}</p>
              <div className="relative h-4 w-4">
                <Image src={moreVertIcon} layout="fill" />
              </div>
            </div>
            <ul className="list-decoration">
              {options.map((option) => (
                <li className="cursor-pointer">
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </>
  )
}
