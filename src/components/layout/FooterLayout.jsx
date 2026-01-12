import { NavLink } from "react-router-dom";
import { StaticIcon } from "../common/Icon.jsx";

function FooterLayout() {
    const name = import.meta.env.VITE_COMPANY_NAME;
    const mailId = import.meta.env.VITE_COMPANY_MAIL_ID;
    const currentYear = new Date().getFullYear();
    const hoverOnNavText = 'hover:text-primary transition-colors w-fit';
    const iconWrapperDiv = 'w-10 h-10 flex items-center justify-center rounded-control bg-surface-page text-text-muted hover:bg-primary hover:text-white transition-all';

    return (
        <footer className="bg-surface-card text-text-main border-t border-surface-border font-sans">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 lg:py-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 ">

                <section className="flex flex-col col-span-2 gap-3 md:gap-4 lg:col-span-1">
                    <h3 className="text-2xl font-bold text-primary tracking-tight">{name}</h3>
                    <p className="text-text-muted leading-relaxed">
                        Building exceptional digital experiences with modern web technologies and user-centric design.
                    </p>
                    <div className="flex gap-3">
                        <a href="#" className={iconWrapperDiv} aria-label="Facebook">
                            <StaticIcon>
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </StaticIcon>
                        </a>
                        <a href="#" className={iconWrapperDiv} aria-label="Twitter">
                            <StaticIcon>
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </StaticIcon>
                        </a>
                        <a href="#" className={iconWrapperDiv} aria-label="LinkedIn">
                            <StaticIcon>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                            </StaticIcon>
                        </a>
                    </div>
                </section>

                <nav className="flex flex-col  gap-3 md:gap-4">
                    <h4 className="font-semibold text-text-main">Who We Are</h4>
                    <div className="flex flex-col gap-2 text-text-muted text-sm lg:text-base">
                        <NavLink to="/" className={hoverOnNavText}>Home</NavLink>
                        <NavLink to="/about-us" className={hoverOnNavText}>About Us</NavLink>
                        <NavLink to="/services" className={hoverOnNavText}>Services</NavLink>
                        <NavLink to="/contact" className={hoverOnNavText}>Contact</NavLink>
                    </div>
                </nav>

                <nav className="flex flex-col gap-3 md:gap-4">
                    <h4 className="font-semibold text-text-main">What We Do</h4>
                    <div className="flex flex-col gap-2 text-text-muted text-sm lg:text-base">
                        <a href="#" className={hoverOnNavText}>Web Development</a>
                        <a href="#" className={hoverOnNavText}>UI/UX Design</a>
                        <a href="#" className={hoverOnNavText}>Mobile Apps</a>
                        <a href="#" className={hoverOnNavText}>Consulting</a>
                    </div>
                </nav>

                <address className="flex flex-col col-span-2 gap-3 md:gap-4 lg:col-span-1 not-italic text-text-muted text-sm lg:text-base">
                    <h4 className="font-semibold text-text-main">Get In Touch</h4>

                    <a href="mailto:info@yourbrand.com" className={`flex items-center gap-3 ${hoverOnNavText}`}>
                        <StaticIcon className="shrink-0">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </StaticIcon>
                        {mailId}
                    </a>

                    <div className="flex items-center gap-3">
                        <StaticIcon className="shrink-0">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </StaticIcon>
                        +91 xxxxxxx954
                    </div>

                    <div className="flex items-start gap-3">
                        <StaticIcon className="shrink-0 mt-1">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </StaticIcon>
                        <span>
                            123 Buliding, road 01, area<br />
                            City, State xxxxxx
                        </span>
                    </div>
                </address>
            </div>

            <div className="border-t border-surface-border bg-surface-page py-6">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-text-muted">
                    <p>© {currentYear} {name} . All rights reserved.</p>
                    <div className="flex gap-4 md:gap-6">
                        <a href="#" className={hoverOnNavText}>Privacy Policy</a>
                        <a href="#" className={hoverOnNavText}>Terms of Service</a>
                        <a href="#" className={hoverOnNavText}>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default FooterLayout;