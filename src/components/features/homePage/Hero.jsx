import { HeroFloatingAnimation } from "../../common/FloatingAnimation.jsx";
function Hero() {
  return (
    <section className="relative flex py-1 w-full items-center overflow-hidden ">

      {/* Background Grid and Global Glow */}
      {/* <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 z-0 opacity-[0.15] bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,black_50%,transparent_100%)]"></div> */}


        {/* INCREASED INTENSITY BACKGROUND GLOW */}
        {/* <div className="absolute top-5 left-1/7 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-[140px]  "></div>
        <div className="absolute bottom-0 left-1/6 h-150 w-150 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/50 blur-[140px]  "></div>
        <div className="absolute top-0 right-1/9 h-100 w-125 translate-x-1/4 -translate-y-1/2 rounded-full bg-primary/50  blur-[140px] "></div>
      </div> */}

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">

        {/* Text Content */}
        <div className="max-w-2xl z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Enterprise-Grade Solutions
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight lg:text-7xl">
            Future-Proof Your Business with <span className="
            
            bg-linear-to-r from-primary to-accent  bg-clip-text text-transparent">Next-Gen Digital Transformation.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-text-muted backdrop-blur ">
            Specialized cloud architecture, AI integration, and cybersecurity solutions tailored for the modern enterprise. Scale securely with infrastructure built for tomorrow.
          </p>

          <div className="relative mt-10 z-10 flex flex-col gap-4 sm:flex-row whitespace-nowrap">
            <button className="group flex items-center justify-center gap-2 rounded-control bg-primary px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:bg-primary-hover hover:scale-105">
              View Our Case Studies
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <button className="flex items-center justify-center gap-2 rounded-control border border-surface-border bg-secondary px-8 py-4 font-medium text-text-main backdrop-blur-md transition-all hover:bg-secondary-hover">
              <span className="text-primary">▶</span>
              Explore Our Solutions
            </button>
          </div>
        </div>

        {/* 3D Visual Section */}
        <div className=" absolute inset-0 z-0 sm:static sm:z-auto md:relative flex h-125 items-center justify-center ">
          <HeroFloatingAnimation />
        </div>
      </div>



    </section>
  );
};

export default Hero;