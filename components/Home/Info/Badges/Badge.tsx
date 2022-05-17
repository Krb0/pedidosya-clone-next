import Image from 'next/image'

const Badge = ({
  img,
  title,
  description,
}: {
  img: any
  title: string
  description: string
}) => {
  return (
    <div className="flex gap-6">
      <div className="relative h-[80px] w-[80px]">
        <Image src={img} layout="fill" />
      </div>
      <div className="flex flex-col justify-center gap-3 ">
        <span className="font-muli text-[0.92rem] font-[800] ">{title}</span>
        <p className="font-muli text-[0.83rem] font-[400] ">{description}</p>
      </div>
    </div>
  )
}

export default Badge
