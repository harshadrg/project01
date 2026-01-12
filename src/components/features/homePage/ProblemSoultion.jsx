import React from 'react';
import { StaticIcon } from "../../common/Icon";

export default function ProblemSolution() {
    return (
        <section className="relative py-10 overflow-hidden">
            {/* Subtle Background Decor */}
            <div className="absolute -top-24 -right-24 w-150 h-150 bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-100 h-100 bg-danger/5 blur-[120px] rounded-full pointer-events-none opacity-30" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* --- Left Side: Content & Risk List --- */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="max-w-2xl relative">
                            <div className="absolute -left-6 top-2 bottom-2 w-1 bg-linear-to-b from-primary to-transparent opacity-50 hidden md:block rounded-full" />

                            <h3 className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary/50"></span>
                                Security-First Architecture
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight leading-[1.1]">
                                Secure tomorrow, <br />
                                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                                    Today.
                                </span>
                            </h2>
                        </div>

                        {/* Risk List - Manual JSX with Hover Effects */}
                        <div className="relative pl-8 border-l border-surface-border space-y-10">
                            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-danger/70 mb-6">
                                Legacy Vulnerabilities
                            </h3>

                            {/* Risk Item 1 */}
                            <div className="flex gap-6 group cursor-default">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-surface-border flex items-center justify-center bg-surface-page group-hover:border-danger/40 transition-colors shadow-sm">
                                    <StaticIcon className="w-4 h-4 text-text-muted group-hover:text-danger transition-colors">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
                                    </StaticIcon>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text-main/80 group-hover:text-text-main transition-colors mb-1">Generic Admin Paths</h4>
                                    <p className="text-[12px] leading-relaxed text-text-muted/80">Standard CMS endpoints exposed to automated brute-force attempts.</p>
                                </div>
                            </div>

                            {/* Risk Item 2 */}
                            <div className="flex gap-6 group cursor-default">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-surface-border flex items-center justify-center bg-surface-page group-hover:border-danger/40 transition-colors shadow-sm">
                                    <StaticIcon className="w-4 h-4 text-text-muted group-hover:text-danger transition-colors">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
                                    </StaticIcon>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text-main/80 group-hover:text-text-main transition-colors mb-1">Unmanaged Dependencies</h4>
                                    <p className="text-[12px] leading-relaxed text-text-muted/80">Deeply nested libraries containing unpatched security flaws.</p>
                                </div>
                            </div>

                            {/* Risk Item 3 */}
                            <div className="flex gap-6 group cursor-default">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-surface-border flex items-center justify-center bg-surface-page group-hover:border-danger/40 transition-colors shadow-sm">
                                    <StaticIcon className="w-4 h-4 text-text-muted group-hover:text-danger transition-colors">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
                                    </StaticIcon>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text-main/80 group-hover:text-text-main transition-colors mb-1">Reactive Monitoring</h4>
                                    <p className="text-[12px] leading-relaxed text-text-muted/80">Logging that only records incidents after the breach occurs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Side: The Secure Card --- */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface-card p-8 md:p-12 rounded-(--radius-panel) border border-primary/20 shadow-sm relative overflow-hidden">
                            <div className="flex items-center justify-between mb-12 relative z-10">
                                {/* Left Side: Icon and Text */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0">
                                        <StaticIcon className="w-5 h-5">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </StaticIcon>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-xs font-black tracking-[0.2em] uppercase text-text-main leading-none mb-1">
                                            Fortified Framework
                                        </h3>
                                        <p className="text-[10px] text-primary font-bold leading-none uppercase">
                                            Active Protection Enabled
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side: The Badge (Fixed Alignment) */}
                                <div className="hidden sm:flex items-center self-center px-2 py-1.5 rounded-md bg-success/10 border border-success/20">
                                    <span className="text-[10px] font-mono text-success font-bold uppercase tracking-widest leading-none">
                                        v4.0 SECURE
                                    </span>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 mb-14 relative z-10">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <StaticIcon className="w-4 h-4 text-primary"><polyline points="20 6 9 17 4 12" /></StaticIcon>
                                        <h4 className="text-[13px] font-bold text-text-main">Edge-Level Defense</h4>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-text-muted pl-7">DDoS and SQLi protection filtered at the global edge layer.</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <StaticIcon className="w-4 h-4 text-primary"><polyline points="20 6 9 17 4 12" /></StaticIcon>
                                        <h4 className="text-[13px] font-bold text-text-main">Zero-Trust Protocols</h4>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-text-muted pl-7">Encrypted data-in-transit with strict machine-level auth.</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <StaticIcon className="w-4 h-4 text-primary"><polyline points="20 6 9 17 4 12" /></StaticIcon>
                                        <h4 className="text-[13px] font-bold text-text-main">Proactive Audits</h4>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-text-muted pl-7">Automated vulnerability scanning baked into your CI/CD.</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <StaticIcon className="w-4 h-4 text-primary"><polyline points="20 6 9 17 4 12" /></StaticIcon>
                                        <h4 className="text-[13px] font-bold text-text-main">Hardened Core</h4>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-text-muted pl-7">Kernel-level security to prevent unauthorized escalation.</p>
                                </div>
                            </div>

                            <button className="w-full py-5 rounded-(--radius-control) bg-primary text-white text-xs font-black uppercase tracking-[0.3em] hover:bg-primary-hover transition-all shadow-md active:scale-[0.99]">
                                Secure Your Infrastructure
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}