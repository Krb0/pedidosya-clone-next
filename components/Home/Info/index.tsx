import Badges from './Badges'
import Restaurants from './Restaurants'

const Info = () => {
  return (
    <section className="mt-10 flex w-full flex-col items-center justify-center">
      <div>
        <Restaurants />
        <Badges />
      </div>
    </section>
  )
}

export default Info
