import worstStar from '../../../../../../assets/icons/Restaurants/worstStar.png'
import badStar from '../../../../../../assets/icons/Restaurants/badStar.png'
import goodStar from '../../../../../../assets/icons/Restaurants/goodStar.png'
import bestStar from '../../../../../../assets/icons/Restaurants/bestStar.png'
import Image from 'next/image'

const Item = ({ id, name, image, shipping, rating }: any) => {
  const ratingObj = ratingGetter(rating)
  return (
    <div className="custom-shadow flex rounded-[6px] bg-white p-[12px] ">
      <div className="flex flex-1 ">
        <img
          src={image}
          className="mr-[12px] h-[102px] w-[102px] rounded-[6px] border-[1px] border-[#585065] object-cover object-center "
        />
        <div>
          <span className="text-[16px] font-bold  ">{name}</span>
        </div>
      </div>
      <div>
        <div
          className={`${ratingObj.class} flex items-center py-1 text-center`}
        >
          <div className="relative h-[8px] w-[8px] ">
            <Image src={ratingObj.img} layout="fill" />
          </div>
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
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
