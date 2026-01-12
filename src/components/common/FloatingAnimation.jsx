import { AnimatedIcon } from "./Icon.jsx";

export function HeroFloatingAnimation() {
  return (
    <>
      <div className="relative animate-float">

        {/* Main Server Block with Inner Glow */}
        <div className="group relative flex h-80 w-64 flex-col overflow-hidden rounded-panel border-2 border-surface-border bg-surface-card p-6 shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all hover:border-primary/50">
          <div className="mb-6 h-2 w-12 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-1.5 w-full animate-pulse rounded bg-surface-border" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
          <div className="mt-auto flex justify-between">
            <div className="h-10 w-10 rounded border border-primary/20 bg-primary/10 shadow-[inner_0_0_10px_rgba(var(--color-primary),0.2)]"></div>
            <div className="h-10 w-10 rounded border border-accent/20 bg-accent/10 shadow-[inner_0_0_10px_rgba(var(--color-accent),0.2)]"></div>
          </div>
        </div>

        {/* Orbiting AnimatedIcon 1 - Primary Glow */}
        <div className="absolute -right-6 -top-6 animate-bounce-slow rounded-panel border border-surface-border bg-surface-card p-4 shadow-[0_0_25px_oklch(60%_0.2_255/30%)]">
          <AnimatedIcon className="w-8 h-8 text-primary">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </AnimatedIcon>
        </div>

        {/* Orbiting AnimatedIcon 2 - Accent Glow */}
        <div className="absolute -left-6 bottom-6 animate-bounce-reverse rounded-panel border border-surface-border bg-surface-card p-4 shadow-[0_0_25px_oklch(65%_0.2_285/30%)]">
          <AnimatedIcon className="w-9 h-9 text-accent">
            <path d="M12 2v8" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="M22 22H2" /><path d="m8 22 4-10 4 10" />
          </AnimatedIcon>
        </div>
      </div>

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(8deg); }
          50% { transform: translateY(-20px) rotateX(12deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}
      </style>
    </>
  );
};