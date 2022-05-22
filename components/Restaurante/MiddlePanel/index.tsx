import Item from './Item'

const MiddlePanel = ({ categorias, dispatch }: any) => {
  return (
    <div className=" flex flex-[2] flex-col ">
      <div className="flex flex-col">
        {categorias.map((categoria: any) => (
          <div key={categoria.nombre}>
            <span className="font-muli font-extrabold">{categoria.nombre}</span>
            <div className="flex w-full flex-wrap">
              {categoria.platos.map((plato: any) => (
                <Item plato={plato} key={plato._id} dispatch={dispatch} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiddlePanel
