import worstStar from '../../../../../../assets/icons/Restaurants/worstStar.png'
import badStar from '../../../../../../assets/icons/Restaurants/badStar.png'
import goodStar from '../../../../../../assets/icons/Restaurants/goodStar.png'
import bestStar from '../../../../../../assets/icons/Restaurants/bestStar.png'
import Image from 'next/image'
import card from '../../../../../../assets/icons/Restaurants/card.svg'
import Link from 'next/link'
const Item = ({ _id: id, nombre, logo, envio, ...rest }: any) => {
  const ratingObj = ratingGetter(rest.simpleOpinion.rating)
  return (
    <Link href={`/restaurantes/${id}`}>
      <div className="custom-shadow flex cursor-pointer rounded-[6px] bg-white p-[12px] ">
        <div className="flex flex-1 ">
          <img
            src={logo}
            className="mr-[12px] h-[102px] w-[102px] rounded-[6px] border-[1px] border-[#424242] object-cover object-center "
          />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold  ">{nombre}</span>
            <div className="flex items-center gap-1">
              <div className="relative mt-[2px] h-[15px] w-[15px] ">
                <Image src={card} layout="fill" />
              </div>
              <span className="font-lato text-[12px] font-[400] text-[#666] ">
                Acepta pago online
              </span>
            </div>
            <div className="font-lato mt-2 flex items-center gap-2 text-[12.2px] text-[#585065] ">
              <span>40 - 60 min</span>
              <span>Envío ${envio} </span>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${ratingObj.class} flex items-center py-1 text-center`}
          >
            <div className="relative h-[8px] w-[8px] ">
              <Image src={ratingObj.img} layout="fill" />
            </div>
            <span>{rest.simpleOpinion.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Item

const ratingGetter = (rating: number) => {
  if (rating <= 2.5) {
    return { class: 'worst-star', img: worstStar }
  } else if (rating <= 3.5) {
    return { class: 'bad-star', img: badStar }
  } else if (rating <= 4.2) {
    return { class: 'good-star', img: goodStar }
  } else {
    return { class: 'best-star', img: bestStar }
  }
}
