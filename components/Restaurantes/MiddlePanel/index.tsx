import Restaurants from './Restaurants'
import Search from './Search'

const MiddlePanel = ({ data }: any) => {
  return (
    <div className="mx-[14px] flex flex-[2] flex-col ">
      <Search />
      <Restaurants data={data} />
    </div>
  )
}

export default MiddlePanel
