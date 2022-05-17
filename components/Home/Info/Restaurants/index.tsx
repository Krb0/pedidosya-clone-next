import Image from 'next/image'

const Restaurants = () => {
  return (
    <>
      <h4 className="mb-2 w-max pl-6 font-[700]">Los mejores restaurantes</h4>
      <div className="mb-10 flex items-center gap-1">
        {[
          'https://img.pystatic.com/home-chains/ar/burger_king.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/sushi_pop.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/el_club_de_la_milanesa.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/almacen-de-pizzas.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/morita.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/el_noble.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/carrefour.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/fabric.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/subway.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/pain_quotidien.png?quality=70&width=200',
          'https://img.pystatic.com/home-chains/ar/la-farola.png?quality=70&width=200',
        ].map((img) => (
          <Icon img={img} key={img} />
        ))}
      </div>{' '}
    </>
  )
}

export default Restaurants

const Icon = ({ img }: { img: string }) => {
  return (
    <div className="relative h-[80px] w-[80px]">
      <Image src={img} layout="fill" alt="business icon" />
    </div>
  )
}
