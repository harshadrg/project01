import React from 'react';
import { StaticIcon } from "../../common/Icon";

const TechStack = () => {
  return (
    <section className=" overflow-hidden py-10 ">
    {/* <section className="relative overflow-hidden py-10 bg-surface-page/50 backdrop-blur-md"> */}
      {/* Background Grid - Using Theme Primary Color with low opacity */}
      {/* <div className="absolute inset-0 z-0 opacity-[0.15] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,black_50%,transparent_100%)]"></div> */}
    
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Minimalist Label */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-primary/20"></div>
          <p className="font-mono text-[9px] font-bold tracking-[0.4em] text-text-muted uppercase">
            Integrated_Infrastructure_v4
          </p>
          <div className="h-px w-8 bg-primary/20"></div>
        </div>
    
        {/* Static Icons List */}
        <ul className="grid grid-cols-2 gap-y-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-12">
          
          <TechItem label="AWS">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </TechItem>

          <TechItem label="Cloudflare">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </TechItem>

          <TechItem label="Stripe">
            <path d="M2 5h20v14H2z M2 10h20" />
          </TechItem>

          <TechItem label="Vercel">
            <path d="M12 2L2 19.7h20L12 2z" />
          </TechItem>

          <TechItem label="GitHub">
            <path d="M16 18l6-6-6-6 M8 6l-6 6 6 6" />
          </TechItem>

        </ul>
      </div>
    </section>
  );
};

/* --- Refined Sub-Components using Theme Variables --- */

const TechItem = ({ children, label }) => (
  <li className="group cursor-crosshair">
    <div className="flex items-center gap-3">
      {/* Icon Box: Adapts to surface colors and primary accents */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-surface-border bg-surface-card transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.15)]">
        <StaticIcon className="h-5 w-5 text-text-muted transition-colors duration-300 group-hover:text-primary">
          {children}
        </StaticIcon>
        <Corners />
      </div>
      <Label text={label} />
    </div>
  </li>
);

const Label = ({ text }) => (
  <div className="flex flex-col">
    <span className="font-mono text-[10px] font-bold tracking-wider text-text-muted transition-colors group-hover:text-text-main">
      {text}
    </span>
    {/* Animated Underline using Primary color */}
    <div className="h-px w-0 bg-primary/40 transition-all duration-500 group-hover:w-full" />
  </div>
);

const Corners = () => (
  <>
    <div className="absolute -top-px -left-px h-1.5 w-1.5 border-t border-l border-primary opacity-0 transition-all group-hover:opacity-100" />
    <div className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-primary opacity-0 transition-all group-hover:opacity-100" />
  </>
);

export default TechStack;