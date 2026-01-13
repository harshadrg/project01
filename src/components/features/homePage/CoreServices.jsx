import { NavLink } from "react-router-dom";
import { StaticIcon } from "../../common/Icon";

export default function CoreServices() {
  const viewSpecsBtnBtn = (
    <div className="flex items-center justify-between group">
      <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted group-hover:text-primary group-hover:scale-110 origin-left transition-all duration-300">
        View Specifications
      </span>
      <StaticIcon className="w-3 h-3 text-text-muted group-hover:text-primary transition-transform group-hover:translate-x-1">
        <polyline points="9 18 15 12 9 6" />
      </StaticIcon>
    </div>
  )
  const exploreAllServicesBtn = (
    <button className="group mt-3 flex items-center gap-3 px-6 py-3 rounded-full border border-surface-border bg-surface-card hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300 shadow-sm active:scale-95">
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-text-main group-hover:text-white transition-colors">
        Explore All Services
      </span>

      <div className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
        <StaticIcon className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </StaticIcon>
      </div>
    </button>
  )

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* --- Header Section (Flipped for Z-Pattern) --- */}
        <div className="flex flex-col md:flex-row-reverse md:items-end justify-between mb-7 gap-8">
          <div className="max-w-2xl relative text-center mx-auto">
            {/* Decorative line - moved to Right side for this section */}
            {/* <div className="absolute -right-6 top-2 bottom-2 w-1 bg-linear-to-b from-indigo-500 to-transparent opacity-50 hidden md:block rounded-full" /> */}

            <h3 className="text-xs font-black tracking-[0.3em] uppercase bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap mb-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-indigo-500/50 hidden md:block"></span>
              <span className="w-8 h-px bg-indigo-500/50 md:hidden"></span>
              Core Capabilities
              <span className="w-8 h-px bg-indigo-500/50 hidden md:block"></span>
              <span className="w-8 h-px bg-indigo-500/50 md:hidden"></span>
            </h3>

            <h2 className="text-4xl font-bold text-text-main tracking-tight leading-tight text-center">
              Enterprise power,{' '}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Startup agility.
              </span>
            </h2>
          </div>
        </div>

        {/* --- Service Grid (Manual Cards) --- */}
        <div className="grid items-center md:grid-cols-3 gap-6">

          {/* Card 1: Development */}
          <div className="bg-surface-card border border-surface-border rounded-(--radius-panel) p-8 hover:border-primary/40 transition-colors flex flex-col h-full">
            {/* Header Section: Icon + Title beside each other */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-page border border-surface-border flex items-center justify-center text-primary shadow-sm">
                <StaticIcon className="w-5 h-5">
                  <path d="M16 18l6-6-6-6" />
                  <path d="M8 6l-6 6 6 6" />
                </StaticIcon>
              </div>
              <h4 className="text-lg font-bold text-text-main leading-tight">Hardened Development</h4>
            </div>

            {/* Badge & Description */}
            <div className="mb-8 grow">
              <div className="mb-4">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-success px-2 py-1 rounded bg-success/10 border border-success/20">
                  Dev_Ops
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                High-performance Next.js stacks integrated with DNS-level security protocols.
              </p>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-surface-border">
              <NavLink to='services'>
                {viewSpecsBtnBtn}
              </NavLink>
            </div>
          </div>

          {/* Card 2: Security */}
          <div className="bg-surface-card border border-surface-border rounded-(--radius-panel) p-8 hover:border-primary/40 transition-colors flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-page border border-surface-border flex items-center justify-center text-primary shadow-sm">
                <StaticIcon className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </StaticIcon>
              </div>
              <h4 className="text-lg font-bold text-text-main leading-tight">Cyber Security Audits</h4>
            </div>

            <div className="mb-8 grow">
              <div className="mb-4">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-success px-2 py-1 rounded bg-success/10 border border-success/20">
                  Sec_Ops
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Comprehensive penetration testing and vulnerability mapping for modern applications.
              </p>
            </div>

            <div className="pt-6 border-t border-surface-border">
              <NavLink to='services'>
                {viewSpecsBtnBtn}
              </NavLink>
            </div>
          </div>

          {/* Card 3: Compliance */}
          <div className="bg-surface-card border border-surface-border rounded-(--radius-panel) p-8 hover:border-primary/40 transition-colors flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-page border border-surface-border flex items-center justify-center text-primary shadow-sm">
                <StaticIcon className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </StaticIcon>
              </div>
              <h4 className="text-lg font-bold text-text-main leading-tight">Compliance Strategy</h4>
            </div>

            <div className="mb-8 grow">
              <div className="mb-4">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-success px-2 py-1 rounded bg-success/10 border border-success/20">
                  Gov_Tech
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Expert guidance for GDPR, SOC2, and ISO standards to prepare for scale.
              </p>
            </div>

            <div className="pt-6 border-t border-surface-border">
              <NavLink to='services'>
                {viewSpecsBtnBtn}
              </NavLink>
            </div>

          </div>
        </div>

        <NavLink to='services'>
          {exploreAllServicesBtn}
        </NavLink> 

      </div>
    </section>
  );  
}