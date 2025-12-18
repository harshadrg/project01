import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";

function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `text-md font-medium transition-all w-full text-left px-6 py-3 rounded-control
        md:w-auto md:p-1
        ${isActive ? 'text-primary bg-primary/5 md:bg-transparent' : 'text-text-main hover:text-primary-hover'}`
    return (
        <>
            <nav className="relative flex items-center justify-between ">
                <button
                    className="md:hidden p-4 rounded-control hover:bg-surface-border transition-colors focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    <Icon>
                        {open ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </Icon>
                </button>
                <div
                    className={`
                    absolute right-0 top-14 z-50 flex flex-col bg-surface-card/95 p-2
                    shadow-sm border border-surface-border w-screen h-screen 
                    md:w-auto md:h-auto md:static md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0 
                    md:shadow-none md:border-0
                    lg:w-auto
                    ${open ? "flex" : "hidden"} md:flex
                `}
                >

                    <NavLink to='/' className={navLinkClass} onClick={() => setOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to='about-us' className={navLinkClass} onClick={() => setOpen(false)}>
                        About us
                    </NavLink>
                    <NavLink to='services' className={navLinkClass} onClick={() => setOpen(false)}>
                        Service
                    </NavLink>
                    <NavLink to='contact' className={navLinkClass} onClick={() => setOpen(false)}>
                        Contact
                    </NavLink>
                </div>
            </nav>

        </>
    )
}
export default Navbar;