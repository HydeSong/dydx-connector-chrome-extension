import Link from "next/link"
import Image from "next/image"
import MyButton from "./MyButton"

const Navbar = ({start}) => {
    return (
        <header className="w-full fixed top-0" style={{backgroundColor: "#1c1c28"}}>
            <nav
                className="max-w-[600px] mx-auto flex justify-between items-center padding-x padding-y">
                <h1 className="text-lg font-extrabold text-white">Dydx connector</h1>
                <MyButton
                    title="Start Grid Trading"
                    btnType="button"
                    containerStyle="bg-primary-blue text-white rounded-full"
                    handleClick={() => start()}/>
            </nav>
        </header>
    )
}

export default Navbar