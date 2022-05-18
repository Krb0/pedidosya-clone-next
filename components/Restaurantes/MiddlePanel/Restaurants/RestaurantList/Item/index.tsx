const Item = ({ id, name, image, shipping, rating }: any) => {
  return (
    <div className="custom-shadow flex rounded-[6px] bg-white p-[12px] ">
      <div>
        <img
          src={image}
          className="h-[102px] w-[102px] rounded-[6px] border-[1px] border-[#585065] object-cover object-center  "
        />
        <div></div>
      </div>
    </div>
  )
}

export default Item
