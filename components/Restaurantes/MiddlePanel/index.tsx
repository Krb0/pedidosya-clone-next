import Restaurants from './Restaurants'
import Search from './Search'

const MiddlePanel = () => {
  return (
    <div className="mx-[14px] flex flex-[2] flex-col ">
      <Search />
      <Restaurants />
    </div>
  )
}

export default MiddlePanel
