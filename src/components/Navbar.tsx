import Link from "next/link"
import Image from "next/image"
import MyButton from "./MyButton"

const Navbar = () => {
    return (
        <header className="w-full z-10">
            <nav
                className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 padding-x padding-y">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={48}
                        height={48}
                        className="object-contain"/>
                        
                </Link>
                <h1>Dydx connector</h1>
                <MyButton
                    title="Start Grid Trading"
                    btnType="button"
                    containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"/>
            </nav>
        </header>
    )
}

export default Navbar