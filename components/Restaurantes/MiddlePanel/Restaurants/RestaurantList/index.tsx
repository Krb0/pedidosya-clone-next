import Item from './Item'
import data from './mock.json'
const RestaurantList = () => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  )
}

export default RestaurantList
