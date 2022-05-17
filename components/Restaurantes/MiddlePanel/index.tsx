import Image from 'next/image'
import searchIcon from '../../../assets/icons/shared/search.svg'
const MiddlePanel = () => {
  return (
    <div className="flex flex-[2] flex-col">
      <div className="mx-[14px] flex h-[36px] items-center gap-2 rounded-full bg-[#eae3e3] px-2 ">
        <label className="relative h-[16px] w-[16px]" htmlFor="search">
          <Image src={searchIcon} layout="fill" />
        </label>
        <input
          placeholder="Buscar..."
          name="search"
          id="search"
          className="font-muli h-full w-full rounded-r-full bg-[#eae3e3] text-[14px]  text-[rgba(0,0,0,0.7)] outline-none "
        />
      </div>
    </div>
  )
}

export default MiddlePanel
