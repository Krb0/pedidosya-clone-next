import locationBadge from '../../../../assets/icons/Home/locationBadge.svg'
import foodBadge from '../../../../assets/icons/Home/foodBadge.svg'
import shieldBadge from '../../../../assets/icons/Home/shieldBadge.svg'
import Badge from './Badge'

const Badges = () => {
  const BadgesData = [
    {
      img: locationBadge,
      title: 'Top Ciudades',
      description:
        'La Plata, Rosario, San Isidro, Córdoba, Buenos Aires, Vicente López',
    },
    {
      img: shieldBadge,
      title: 'Top Barrios',
      description:
        'Palermo, Caballito, Belgrano, Recoleta, Microcentro, Nueva Córodoba',
    },
    {
      img: foodBadge,
      title: 'Top Comidas',
      description: 'Sushi, Picadas, Empanadas, Desayunos, Helados, Pizzas',
    },
  ]
  return (
    <>
      <h5 className="mb-3 w-max pl-6 font-[700]">
        Delivery que satisface los sentidos
      </h5>
      <p className="mb-4 w-max pl-6 text-[0.85rem] font-[400] text-[#100423] ">
        ¿Con Hambre y Nada te Copa? Acá tu Comida Sabrosa, Hoy Puede Tener otro
        Gusto. PedidosYa, Te Llena el Corazón
      </p>
      <div className="mt-10 mb-8 flex flex-col gap-2 pl-6">
        {BadgesData.map((item) => (
          <Badge {...item} key={item.title} />
        ))}
      </div>
    </>
  )
}

export default Badges
