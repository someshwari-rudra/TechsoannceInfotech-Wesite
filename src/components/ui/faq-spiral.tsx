"use client"

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FAQWithSpiral() {
    const spiralRef = useRef<HTMLDivElement | null>(null);
    const [panelOpen, setPanelOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Spiral configuration - customized for light theme with brand colors
    const [cfg, setCfg] = useState({
        points: 700,
        dotRadius: 1.8,
        duration: 3.0,
        color: "#00C2FF", // brand-cyan
        gradient: "none" as
            | "none"
            | "rainbow"
            | "sunset"
            | "ocean"
            | "fire"
            | "neon"
            | "pastel"
            | "grayscale",
        pulseEffect: true,
        opacityMin: 0.25,
        opacityMax: 0.9,
        sizeMin: 0.5,
        sizeMax: 1.4,
        background: "#ffffff", // white background for light theme
    });

    // Gradient presets
    const gradients: Record<string, string[]> = useMemo(
        () => ({
            none: [],
            rainbow: ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#0099ff", "#6633ff"],
            sunset: ["#ff0000", "#ff9900", "#ffcc00"],
            ocean: ["#0066ff", "#00ccff", "#00ffcc"],
            fire: ["#ff0000", "#ff6600", "#ffcc00"],
            neon: ["#ff00ff", "#00ffff", "#ffff00"],
            pastel: ["#ffcccc", "#ccffcc", "#ccccff"],
            grayscale: ["#333333", "#666666", "#999999"],
        }),
        []
    );

    // --- Dev "tests" (runtime assertions) ------------------------------------
    useEffect(() => {
        try {
            console.assert(Array.isArray(gradients.none) && gradients.none.length === 0, "Gradient 'none' must be an empty array");
            console.assert(cfg.sizeMin <= cfg.sizeMax, "sizeMin should be <= sizeMax");
            console.assert(cfg.opacityMin <= cfg.opacityMax, "opacityMin should be <= opacityMax");
            const sample = [
                { q: "Alpha", a: "Lorem" },
                { q: "Beta", a: "Ipsum yes" },
            ];
            const filtered = sample.filter(({ q, a }) => (q + a).toLowerCase().includes("yes"));
            console.assert(filtered.length === 1, "Filter should match one item containing 'yes'");
        } catch { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Keyboard shortcuts
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const k = e.key.toLowerCase();
            if (k === "h") setPanelOpen((v) => !v);
            if (k === "r") randomize();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    // Generate spiral SVG and mount
    useEffect(() => {
        if (!spiralRef.current) return;

        const SIZE = 560;
        const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
        const N = cfg.points;
        const DOT = cfg.dotRadius;
        const CENTER = SIZE / 2;
        const PADDING = 4;
        const MAX_R = CENTER - PADDING - DOT;

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", String(SIZE));
        svg.setAttribute("height", String(SIZE));
        svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

        // Gradient
        if (cfg.gradient !== "none") {
            const defs = document.createElementNS(svgNS, "defs");
            const g = document.createElementNS(svgNS, "linearGradient");
            g.setAttribute("id", "spiralGradient");
            g.setAttribute("gradientUnits", "userSpaceOnUse");
            g.setAttribute("x1", "0%");
            g.setAttribute("y1", "0%");
            g.setAttribute("x2", "100%");
            g.setAttribute("y2", "100%");
            gradients[cfg.gradient].forEach((color, idx, arr) => {
                const stop = document.createElementNS(svgNS, "stop");
                stop.setAttribute("offset", `${(idx * 100) / (arr.length - 1)}%`);
                stop.setAttribute("stop-color", color);
                g.appendChild(stop);
            });
            defs.appendChild(g);
            svg.appendChild(defs);
        }

        for (let i = 0; i < N; i++) {
            const idx = i + 0.5;
            const frac = idx / N;
            const r = Math.sqrt(frac) * MAX_R;
            const theta = idx * GOLDEN_ANGLE;
            const x = CENTER + r * Math.cos(theta);
            const y = CENTER + r * Math.sin(theta);

            const c = document.createElementNS(svgNS, "circle");
            c.setAttribute("cx", x.toFixed(3));
            c.setAttribute("cy", y.toFixed(3));
            c.setAttribute("r", String(DOT));
            c.setAttribute("fill", cfg.gradient === "none" ? cfg.color : "url(#spiralGradient)");
            c.setAttribute("opacity", "0.6");

            if (cfg.pulseEffect) {
                const animR = document.createElementNS(svgNS, "animate");
                animR.setAttribute("attributeName", "r");
                animR.setAttribute("values", `${DOT * cfg.sizeMin};${DOT * cfg.sizeMax};${DOT * cfg.sizeMin}`);
                animR.setAttribute("dur", `${cfg.duration}s`);
                animR.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
                animR.setAttribute("repeatCount", "indefinite");
                animR.setAttribute("calcMode", "spline");
                animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
                c.appendChild(animR);

                const animO = document.createElementNS(svgNS, "animate");
                animO.setAttribute("attributeName", "opacity");
                animO.setAttribute("values", `${cfg.opacityMin};${cfg.opacityMax};${cfg.opacityMin}`);
                animO.setAttribute("dur", `${cfg.duration}s`);
                animO.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
                animO.setAttribute("repeatCount", "indefinite");
                animO.setAttribute("calcMode", "spline");
                animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
                c.appendChild(animO);
            }

            svg.appendChild(c);
        }

        spiralRef.current.innerHTML = "";
        spiralRef.current.appendChild(svg);
    }, [cfg, gradients]);

    // Randomizer with contrast awareness
    const randomize = () => {
        const rand = (min: number, max: number) => Math.random() * (max - min) + min;
        const cyanColors = ["#00C2FF", "#06b6d4", "#0ea5e9"];
        const useLightBg = Math.random() > 0.3; // Prefer light backgrounds

        setCfg((c) => ({
            ...c,
            points: Math.floor(rand(300, 1600)),
            dotRadius: rand(0.8, 3.2),
            duration: rand(1.2, 7.5),
            pulseEffect: Math.random() > 0.35,
            opacityMin: rand(0.1, 0.4),
            opacityMax: rand(0.6, 1.0),
            sizeMin: rand(0.4, 0.9),
            sizeMax: rand(1.2, 2.2),
            background: useLightBg ? "#ffffff" : "#f8fafc",
            color: cyanColors[Math.floor(Math.random() * cyanColors.length)],
            gradient:
                Math.random() > 0.6
                    ? (["ocean", "grayscale", "pastel"] as const)[
                    Math.floor(Math.random() * 3)
                    ]
                    : "none",
        }));
    };

    // FAQ content - TechSonance specific
    const faqs = [
        {
            q: "Why Choose Us As Your Software Development Company In India?",
            a: "Tagline Infotech stands out by delivering world-class software solutions with a focus on quality, innovation, and client satisfaction. Our diverse talent pool in India allows us to offer premium development services at competitive rates, ensuring you get the best ROI without compromising on performance or scalability.",
        },
        {
            q: "How Much Does Custom Software Cost?",
            a: "The cost of custom software varies based on factors such as the type of technology used, the skills and experience of the developers, and the unique features required to make your project stand out. Rest assured, our pricing is fair and competitive, while maintaining the high quality of our work. The estimated cost starts at $10 per hour or $1600 per month.",
        },
        {
            q: "What Software Development Method Do You Use?",
            a: "We primarily use the Agile software development methodology. This iterative approach allows for flexibility, faster delivery times, and continuous feedback. We break projects into manageable sprints, ensuring transparency and enabling us to adapt to your evolving business needs efficiently.",
        },
        {
            q: "How Do You Keep My Ideas And Data Safe?",
            a: "Security is our top priority. We sign Non-Disclosure Agreements (NDAs) to legally protect your intellectual property. Our development environment follows strict security protocols, including encrypted data transmission, secure code repositories, and restricted access controls to safeguard your sensitive information.",
        },
        {
            q: "Can You Help With Updates And Maintenance?",
            a: "Absolutely. Software development is a journey, not a destination. We offer comprehensive post-launch support and flexible maintenance packages. Whether it's security patches, feature enhancements, or OS updates, our team ensures your application remains robust, secure, and up-to-date.",
        },
    ];

    const filtered = query
        ? faqs.filter(({ q, a }) => (q + a).toLowerCase().includes(query.toLowerCase()))
        : faqs;

    return (
        <div
            className="relative w-full overflow-hidden py-16"
            style={{ backgroundColor: cfg.background }}
        >
            {/* Background Spiral */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
                style={{ mixBlendMode: "multiply" }}
            >
                <div ref={spiralRef} />
            </div>

            {/* Layout */}
            <div className="relative mx-auto max-w-5xl px-6">
                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-6 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-brand-dark">Frequently Asked Questions</h1>
                        <p className="mt-2 text-sm md:text-base text-slate-600">
                            Everything you need to know about working with Techsonance.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search questions…"
                            className="h-10 w-full md:w-56 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
                        />
                    </div>
                </header>





                {/* Content */}
                <section className="relative">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {filtered.map((item, i) => (
                            <FAQItem
                                key={item.q}
                                q={item.q}
                                a={item.a}
                                index={i + 1}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(prev => prev === i ? null : i)}
                            />
                        ))}
                    </div>
                </section>
            </div>

            {/* Control Panel */}
            {panelOpen && (
                <aside className="fixed right-4 top-4 z-20 w-[320px] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur">
                    <h3 className="mb-3 text-sm font-semibold tracking-wide text-slate-800">Spiral Controls</h3>
                    <div className="space-y-3 text-xs text-slate-700">
                        <Slider label="Points" min={100} max={2000} step={50} value={cfg.points} onChange={(v) => setCfg({ ...cfg, points: v })} />
                        <Slider label="Dot radius" min={0.5} max={5} step={0.1} value={cfg.dotRadius} onChange={(v) => setCfg({ ...cfg, dotRadius: v })} />
                        <Slider label="Duration" min={1} max={10} step={0.1} value={cfg.duration} onChange={(v) => setCfg({ ...cfg, duration: v })} />

                        <Toggle label="Pulse" value={cfg.pulseEffect} onChange={(v) => setCfg({ ...cfg, pulseEffect: v })} />
                        <Slider label="Opacity min" min={0} max={1} step={0.05} value={cfg.opacityMin} onChange={(v) => setCfg({ ...cfg, opacityMin: v })} />
                        <Slider label="Opacity max" min={0} max={1} step={0.05} value={cfg.opacityMax} onChange={(v) => setCfg({ ...cfg, opacityMax: v })} />
                        <Slider label="Size min" min={0.1} max={2} step={0.1} value={cfg.sizeMin} onChange={(v) => setCfg({ ...cfg, sizeMin: v })} />
                        <Slider label="Size max" min={0.1} max={3} step={0.1} value={cfg.sizeMax} onChange={(v) => setCfg({ ...cfg, sizeMax: v })} />

                        <Select
                            label="Gradient"
                            value={cfg.gradient}
                            options={[
                                { label: "None", value: "none" },
                                { label: "Rainbow", value: "rainbow" },
                                { label: "Sunset", value: "sunset" },
                                { label: "Ocean", value: "ocean" },
                                { label: "Fire", value: "fire" },
                                { label: "Neon", value: "neon" },
                                { label: "Pastel", value: "pastel" },
                                { label: "Grayscale", value: "grayscale" },
                            ]}
                            onChange={(v) => setCfg({ ...cfg, gradient: v as any })}
                        />

                        <div className="flex gap-2">
                            <button
                                onClick={randomize}
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 hover:border-brand-cyan hover:bg-brand-cyan/5"
                            >
                                Randomize (R)
                            </button>
                            <button
                                onClick={() => setPanelOpen(false)}
                                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 hover:border-brand-cyan hover:bg-brand-cyan/5"
                            >
                                Close (H)
                            </button>
                        </div>
                    </div>
                </aside>
            )}
        </div>
    );
}


function FAQItem({ q, a, index, isOpen, onToggle }: { q: string; a: string; index: number; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-cyan hover:shadow-lg">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={isOpen}
            >
                <div className="flex items-baseline gap-3">
                    <span className="text-xs text-brand-cyan font-semibold">{String(index).padStart(2, "0")}</span>
                    <h3 className="text-base md:text-lg font-semibold leading-tight text-brand-dark">{q}</h3>
                </div>
                <span className={`ml-4 text-brand-cyan transition duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${isOpen ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="min-h-0 overflow-hidden">
                    <p className="text-sm text-slate-600">{a}</p>
                </div>
            </div>
            {/* Hover halo */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100">
                <div
                    className="absolute -inset-1 rounded-2xl border border-brand-cyan/20"
                    style={{ maskImage: "radial-gradient(180px_180px_at_var(--x,50%)_var(--y,50%),white,transparent)" }}
                />
            </div>
        </div>
    );
}

function Slider({
    label,
    min,
    max,
    step,
    value,
    onChange,
}: {
    label: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (v: number) => void;
}) {
    return (
        <label className="block">
            <div className="mb-1 flex items-center justify-between">
                <span>{label}</span>
                <span className="tabular-nums text-slate-500">{value.toFixed(2)}</span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                className="w-full accent-brand-cyan"
            />
        </label>
    );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
    return (
        <label className="flex items-center justify-between">
            <span>{label}</span>
            <button
                onClick={() => onChange(!value)}
                className={`h-6 w-10 rounded-full border transition ${value ? "bg-brand-cyan border-brand-cyan" : "bg-slate-200 border-slate-300"}`}
                aria-pressed={value}
            >
                <span className={`block h-5 w-5 rounded-full bg-white transition ${value ? "translate-x-4" : "translate-x-0.5"}`} />
            </button>
        </label>
    );
}

function Select({
    label,
    value,
    options,
    onChange,
}: {
    label: string;
    value: string;
    options: { label: string; value: string }[];
    onChange: (v: string) => void;
}) {
    return (
        <label className="block">
            <div className="mb-1">{label}</div>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
                >
                    {options.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">▾</span>
            </div>
        </label>
    );
}
