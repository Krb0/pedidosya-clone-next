import Image from 'next/image'
import addIcon from '../../../../assets/icons/Restaurant/add.svg'
import deleteIcon from '../../../../assets/icons/Restaurant/delete.svg'
import trashIcon from '../../../../assets/icons/Restaurant/trash.svg'

const Item = ({ plato, dispatch }: any) => {
  return (
    <div className="my-4 flex w-full gap-[12px] ">
      <img
        className="h-[56px] w-[56px] rounded-[4px] object-cover "
        src={plato.foto}
      />
      <div className="font-lato flex w-full flex-col">
        <span className="text-[15px]">{plato.nombre}</span>
        <span className="text-[12px] text-[#585065] ">{plato.descripcion}</span>
        <div className="flex justify-between">
          <span className="pt-[12px] text-[16px]  font-bold ">
            $
            {(plato.precio * plato.count)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </span>
          <div className="flex w-[90px] items-center rounded-full bg-[#EAE3E3] ">
            <button
              className="relative h-[12px] flex-1 "
              onClick={() => dispatch({ type: 'REMOVE', payload: plato })}
            >
              <Image src={deleteIcon} className="" layout="fill" />
            </button>
            <span>{plato.count}</span>
            <button
              className="relative h-[12px] flex-1 "
              onClick={() => dispatch({ type: 'ADD', payload: plato })}
            >
              <Image src={addIcon} className="" layout="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
