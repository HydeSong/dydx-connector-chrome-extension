import Navbar from "./Navbar"

const Main = ({ name = "Extension" }) => {
  return (
    <div style={{width: '375px', height: '600px', backgroundColor: "#1c1c28"}}>
      <Navbar />
      <div className=" text-white padding-x padding-y flex flex-col">
        <span className="text-sm">资产组合价值</span>
        <h1 className="text-lg font-extrabold" >$46,352.59</h1>
      </div>
    </div>
  )
}

export default Main