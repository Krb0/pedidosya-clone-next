import RestaurantList from './RestaurantList'

const Restaurants = () => {
  return (
    <div className="mt-8 flex flex-col">
      <h3 className="font-muli mb-8 text-[17px] font-[800]">
        558 restaurantes
      </h3>
      <RestaurantList />
    </div>
  )
}

export default Restaurants
