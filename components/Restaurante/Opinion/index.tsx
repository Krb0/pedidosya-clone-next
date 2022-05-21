import worstStar from '../../../assets/icons/Restaurants/worstStar.png'
import badStar from '../../../assets/icons/Restaurants/badStar.png'
import goodStar from '../../../assets/icons/Restaurants/goodStar.png'
import bestStar from '../../../assets/icons/Restaurants/bestStar.png'
import Image from 'next/image'
import rightArrow from '../../../assets/icons/Restaurant/rightArrow.svg'
import Link from 'next/link'
const Opinion = ({ rating, id }: { rating: number; id: string }) => {
  const ratingObj = ratingGetter(rating)
  return (
    <div className="custom-shadow flex h-[68px] w-full items-center gap-6 bg-white pl-[4%]">
      <div className={`${ratingObj.class} flex items-center py-1 text-center`}>
        <div className="relative h-[8px] w-[8px] ">
          <Image src={ratingObj.img} layout="fill" />
        </div>
        <span className="font-muli text-[0.95rem] font-extrabold ">
          {rating.toFixed(1)}
        </span>
      </div>
      <Link href={`/restaurantes/${id}/opiniones`}>
        <button className="font-muli rounded-full bg-[#eae3e3] px-[16px] py-[6px] text-[13px] font-extrabold">
          <div className="flex items-center">
            <span>147 opiniones</span>
            <div className="relative flex h-[12px] w-[12px] items-center ">
              <Image src={rightArrow} />
            </div>
          </div>
        </button>
      </Link>
    </div>
  )
}

export default Opinion

const ratingGetter = (rating: number) => {
  if (rating <= 2.5) {
    return { class: 'worst-star-single', img: worstStar }
  } else if (rating <= 3.5) {
    return { class: 'bad-star-single', img: badStar }
  } else if (rating <= 4.2) {
    return { class: 'good-star-single', img: goodStar }
  } else {
    return { class: 'best-star-single', img: bestStar }
  }
}
