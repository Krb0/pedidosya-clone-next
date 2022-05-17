import Options from './Options'
import Services from './Services'

const LeftPanel = () => {
  return (
    <div className="flex flex-[1] flex-col ">
      <div className="-mt-[8px] flex-col pl-[14%] ">
        <Services />
        <Options />
      </div>
    </div>
  )
}

export default LeftPanel
