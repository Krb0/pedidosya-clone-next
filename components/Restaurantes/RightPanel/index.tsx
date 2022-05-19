import Image from 'next/image'
import moreVertIcon from '../../../assets/icons/shared/moreInfo.svg'

const RightPanel = () => {
  const items = [
    {
      title: 'Medios de pago',
      options: ['Pago online', 'Efectivo'],
    },
    {
      title: 'Categorías',
      options: [
        'Arepas',
        'Bebidas',
        'Cafetería',
        'Lomitos',
        'Comida Árabe',
        'Comida Armenia',
        'Comida China',
        'Comida India',
        'Comida Japonesa',
        'Comida Mexicana',
        'Comida Peruana',
        'Comida Vegetariana',
        'Ver más...',
      ],
    },
  ]
  return (
    <div className=" flex flex-[1] flex-col ">
      <div className="custom-shadow mt-8 p-6">
        <List items={items} />
      </div>
    </div>
  )
}

export default RightPanel

const List = ({ items }: { items: { title: string; options: string[] }[] }) => {
  return (
    <>
      {items.map(({ title, options }) => (
        <>
          <div style={{ marginTop: 8, marginBottom: 12 }}>
            <div className="flex cursor-pointer items-center gap-1 ">
              <p className="font-muli text-[16px] font-bold ">{title}</p>
              <div className="relative h-4 w-4">
                <Image src={moreVertIcon} layout="fill" />
              </div>
            </div>
            <ul className="font-lato mt-1 text-[14px] font-[400] text-[#2B1A46]">
              {options.map((option) => (
                <li className="my-[0.3rem] cursor-pointer">
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
