import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="bg-business max-w-screen min-w-screen flex min-h-[93vh] items-center justify-center">
        <div className="font-lato flex min-w-[560px] flex-col gap-4 bg-white p-[40px] ">
          <span className="font-muli mb-2 text-center text-[18px] font-[900] text-[#4a4a4a]">
            Registro de tu local
          </span>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="nombre"
            >
              Nombre del local
            </label>
            <input
              id="nombre"
              type="text"
              placeholder=""
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="tipo"
            >
              Tipo de Negocio
            </label>
            <select
              id="tipo"
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            >
              <option value="Restaurante">Restaurante</option>
              <option value="Cafe">Café</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Mercado">Mercado</option>
              <option value="Kiosko">Kiosco</option>
              <option value="Mascotas">Mascotas</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[14px] font-[400] text-[#9e9e9e] "
              htmlFor="direccion"
            >
              Dirección del local
            </label>
            <input
              id="direccion"
              type="text"
              placeholder=""
              className="border-[1px] border-[#9e9e9e] p-2 outline-none"
            />
          </div>
          <button className="bg-[#F93F57] p-[10px] text-[16px] font-bold text-white ">
            Comenzar
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
