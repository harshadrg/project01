import Navbar from "../features/Navbar";
import logo from '/nextIn01.svg'

function HeaderLayout() {
    return (
        <>
            <header className="sticky top-0 z-50 h-14 flex items-center px-6 md:px-11 bg-surface-card/90 backdrop-blur shadow-sm border-b border-surface-border">
                <div className="shrink-0 ">
                    <img
                        src={logo}
                        alt="nextIn Logo"
                        className="h-11 w-11"
                    />
                </div>
                <div className="absolute right-0 
                    md:right-0 md:left-1/3
                    lg:right-auto lg:left-1/2 lg:-translate-x-1/2"
                >
                    <Navbar />
                </div>
            </header>
        </>
    )
}
export default HeaderLayout; 
