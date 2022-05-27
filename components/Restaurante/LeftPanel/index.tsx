import Image from 'next/image'
import React, { useState } from 'react'
import moreVertIcon from '../../../assets/icons/shared/moreInfo.svg'
import lessVertIcon from '../../../assets/icons/shared/lessVertIcon.svg'

const LeftPanel = ({ categorias, activeCategory,setActiveCategory }: any) => {
  const items = [
    {
      title: 'Categorías',
      options: categorias
        ? categorias.map((categoria: any) => categoria.nombre)
        : [],
    },
  ]
  return (
    <div className="flex flex-[1] flex-col">
      <div className="custom-shadow ml-[12%] mr-[12%] rounded-[5px]  bg-white p-6 ">
        <List
          items={items}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  )
}

export default LeftPanel

const List = ({
  items,
  activeCategory,
  setActiveCategory,
}: {
  items: { title: string; options: string[] }[]
  activeCategory?: string | null
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>
}) => {
  const [active, setActive] = useState([true, true, true])

  return (
    <>
      {items.map(({ title, options }, index) => (
        <div style={{ marginTop: 8, marginBottom: 12 }} key={title}>
          <div
            className="flex cursor-pointer items-center gap-1 "
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
          <ul className="font-lato mt-1 text-[14px] font-[400] text-[#2B1A46]">
            {active[index] &&
              options.map((option) => (
                <li
                  className="my-[0.3rem] cursor-pointer"
                  key={option}
                  onClick={() =>
                    activeCategory === option
                      ? setActiveCategory(null)
                      : setActiveCategory(option)
                  }
                >
                  <span
                    className={`${
                      option === activeCategory ? 'font-bold' : ''
                    }`}
                  >
                    {option}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  )
}
