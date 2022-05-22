import Item from './Item'
const RestaurantList = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item: any) => (
        <Item {...item} key={item._id} />
      ))}
    </div>
  )
}

export default RestaurantList
