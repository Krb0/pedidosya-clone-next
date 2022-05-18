import RestaurantList from './RestaurantList'
import data from './mock.json'
const Restaurants = () => {
  return (
    <div className="mt-8 flex flex-col">
      <h3 className="font-muli mb-8 text-[17px] font-[800]">
        {data.length} restaurantes
      </h3>
      <RestaurantList data={data} />
    </div>
  )
}

export default Restaurants
