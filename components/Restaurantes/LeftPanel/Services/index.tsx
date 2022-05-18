import { useState } from 'react'
import services from './data.json'
const Services = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="space-between flex flex-wrap ">
      {services.map(({ name, img, id }) => (
        <div
          className="max-width-[34%] mt-[15px] flex basis-[33%] flex-col items-center "
          key={id}
        >
          <img
            src={img}
            className={`h-[66px] w-[66px] cursor-pointer rounded-full object-cover object-center ${
              id === active && 'border-[1px] border-black'
            } box-border`}
            onClick={() => setActive(id)}
          />
          <span
            className="font-muli max-width-[34%] cursor-pointer text-[13px] font-extrabold "
            onClick={() => setActive(id)}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Services
