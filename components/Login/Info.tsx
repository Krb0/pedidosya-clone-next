import Image from 'next/image'
import React from 'react'
import logo from '../../assets/icons/shared/logo.svg'
const Info = () => {
  return (
    <>
      <div className="relative mx-auto mb-12 h-[81px] w-[85px]">
        <Image src={logo} layout="fill" />
      </div>
      <h1 className="font-muli mx-auto text-[24px] font-bold ">
        ¡Te damos la bienvenida!
      </h1>
      <h2 className="font-muli mx-auto mb-3 text-[14px] font-bold">
        ¿Cómo querés continuar?
      </h2>
    </>
  )
}

export default Info
