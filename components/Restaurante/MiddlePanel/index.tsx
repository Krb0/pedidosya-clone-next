import Item from './Item'

const MiddlePanel = ({ categorias }: any) => {
  console.log(categorias)
  return (
    <div className=" flex flex-[2] flex-col ">
      <div className="flex flex-col">
        {categorias.map((categoria: any) => (
          <>
            <span className="font-muli font-extrabold">{categoria.nombre}</span>
            <div className="flex w-full flex-wrap">
              {categoria.platos.map((plato: any) => (
                <Item plato={plato} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default MiddlePanel
