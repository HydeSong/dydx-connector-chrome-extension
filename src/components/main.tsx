import Gird from "./Gird"
import Navbar from "./Navbar"

const Main = ({ name = "Extension" }) => {
  return (
    <div className="w-full h-full pt-[74px]" style={{width: '375px', height: '600px'}}>
      <Navbar />
      {/* <div className=" text-white padding-x padding-y flex flex-col">
        <span className="text-sm">资产组合价值</span>
        <h1 className="text-lg font-extrabold" >$46,352.59</h1>
      </div> */}
      <Gird />
    </div>
  )
}

export default Main