const Item = ({ plato, dispatch }: { plato: any; dispatch: any }) => {
  return (
    <div className="min-w-[50%] max-w-[50%] flex-1 ">
      <div
        className="m-[12px 16px] h-full cursor-pointer p-[12px] "
        onClick={() => dispatch({ type: 'ADD', payload: plato })}
      >
        <div className="shadow-custom font-lato flex h-full min-h-[115wpx] justify-between rounded-[6px] bg-white p-3">
          <div className="flex flex-col justify-between">
            <span className="text-[16px] ">{plato.nombre}</span>
            <span className="font-lato mt-1 max-w-full break-words text-[12px] text-[#585065] ">
              {plato.descripcion}
            </span>
            <div className="font-lato mt-[8px] py-2 font-bold">
              ${plato.precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </div>
          </div>
          {plato.foto && (
            <img
              src={plato.foto}
              className="h-[96px] w-[96px] rounded-[6px] object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
