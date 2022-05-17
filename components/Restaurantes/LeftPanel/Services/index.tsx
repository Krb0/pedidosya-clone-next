import services from './data.json'
const Services = () => {
  return (
    <div className="space-between flex flex-wrap">
      {services.map(({ name, img, id }) => (
        <div
          className="mt-[15px] flex basis-[33%] flex-col items-center "
          key={id}
        >
          <img
            src={img}
            className={`h-[66px] w-[66px] cursor-pointer rounded-full object-cover object-center ${
              id === 1 && 'border-[1px] border-black'
            } `}
          />
          <span className="font-muli cursor-pointer text-[13px] font-extrabold ">
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Services
