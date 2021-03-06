import React from 'react'
import Item from './Item'
import empty from '../../../assets/icons/Restaurant/empty.svg'
import Image from 'next/image'
const RightPanel = ({ cart, dispatch }: any) => {
  return (
    <div className="flex flex-[1] flex-col">
      <div className="custom-shadow ml-[12%] mr-[12%] rounded-[5px]  bg-white p-6 ">
        {cart.items.length > 0 ? (
          <>
            <span className="font-muli font-extrabold">Estás llevando:</span>
            <div className="flex flex-col">
              {cart.items.map((plato: any) => (
                <Item plato={plato} dispatch={dispatch} key={plato._id} />
              ))}
            </div>
            <div className="custom-shadow mt-5 flex flex-col ">
              <div className="font-lato flex w-full justify-between text-[14px] text-[#585065] ">
                <span>Subtotal</span>
                <span>
                  ${cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </span>
              </div>
              <button className="font-muli mt-3 rounded-full bg-[#FA0050] py-[16px] px-[40px] text-[16px] font-bold text-white ">
                Ir a Pagar
              </button>
            </div>
          </>
        ) : (
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative h-[100px] w-[100px] ">
              <Image src={empty} layout="fill" />
            </div>
            <span className="font-muli text-[16px] font-[600] text-[#333]  ">
              Tu pedido está vacío
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default RightPanel
