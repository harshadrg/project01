import Navbar from "./Navbar";
import logo from '/nextIn01.svg'

function HeaderLayout() {
    return (
        <>
            <header className="relative h-16 flex items-center px-11 bg-white/90 backdrop-blur shadow-sm border-b border-gray-200">
                <div className="shrink-0 ">
                    <img
                        src={logo}
                        alt="nextIn Logo"
                        className="h-12 w-12"
                    />
                </div>
                <div className="absolute right-4 
                    md:left-1/2 md:right-auto md:-translate-x-1/2"
                >
                    <Navbar />
                </div>
            </header>
        </>
    )
}
export default HeaderLayout; 
