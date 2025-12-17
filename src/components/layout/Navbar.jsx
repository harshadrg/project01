import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `text-md font-medium transition-colors hover:text-blue-600 
        ${isActive ? 'text-blue-600' : 'text-gray-700 '}`
    return (
        <>
            <nav className="flex items-center gap-8">
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    <svg
                        className="w-8 h-8 text-gray-700"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {open ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <div
                    className={`
                    absolute right-0 top-16 mt-0 flex flex-col gap-4 bg-white p-4 shadow-lg rounded-sm border border-gray-200 w-40
                    md:static md:mt-0 md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0 md:shadow-none md:border-0 md:w-auto
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