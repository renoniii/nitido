"use client";

import Image from "next/image";
import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Paleta adaptable al modo claro/oscuro
const UI = {
    card: "relative group rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 dark:bg-neutral-900/40",
    overlay:
        "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity",
    title: "text-white text-lg md:text-xl font-semibold drop-shadow [text-wrap:balance]",
    chip: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ring-1 ring-inset bg-white/10 text-white/90 ring-white/20",
};

// 🧩 Datos de ejemplo (cámbialos por los tuyos)
const PROJECTS: Project[] = [
    {
        id: "refisal-expedicion",
        title: "Expedición Refisal",
        client: "Refisal",
        year: 2024,
        categories: ["Branding", "Packaging", "Campaña 360"],
        services: ["Naming", "Sistema gráfico", "KV", "Lanzamiento"],
        cover: "/images2/cover.png",
        summary:
            "Lanzamiento de portafolio con especies: identidad, sistema gráfico y campaña integral.",
        slug: "/work/expedicion-refisal",
    },
    {
        id: "mils-rebrand",
        title: "Identidad para Mils",
        client: "Mils Foods",
        year: 2025,
        categories: ["Branding", "Identidad"],
        services: ["Logo", "Guías de marca", "Tipografía"],
        cover: "/images2/cover.png",
        summary:
            "Sistema de identidad potente, orgánica y profundamente humana para alimentos saludables.",
        slug: "/work/mils",
    },
    {
        id: "refisal-rebrand",
        title: "Rebranding Refisal",
        client: "Refisal",
        year: 2023,
        categories: ["Branding", "Packaging"],
        services: ["Arquitectura de marca", "Empaques", "Retail"],
        cover: "/images2/cover.png",
        summary:
            "Evolución de identidad para diferenciar líneas de producto en la categoría de sales y condimentos.",
        slug: "/work/refisal-rebrand",
    },
    {
        id: "kv-bebida",
        title: "KV Bebida Funcional",
        client: "Kairos Labs",
        year: 2025,
        categories: ["Key Visual", "Social Media"],
        services: ["Dirección de arte", "3D", "Motion"],
        cover: "/images2/cover.png",
        summary: "Key visual y ejecuciones sociales para lanzamiento digital.",
        slug: "/work/kv-bebida",
    },
    {
        id: "ux-app",
        title: "UX/UI App Delivery",
        client: "Nítido",
        year: 2025,
        categories: ["UX/UI", "Producto Digital"],
        services: ["Investigación", "Wireframes", "Design System"],
        cover: "/images2/cover.png",
        summary: "Arquitectura, diseño de flujo y sistema UI escalable.",
        slug: "/work/ux-app",
    },
];

// 🔎 Tipado mínimo
interface Project {
    id: string;
    title: string;
    client?: string;
    year?: number;
    categories: string[];
    services?: string[];
    cover: string; // ruta en /public
    summary?: string;
    slug?: string; // url del case-study
}

export default function Portfolio() {
    const [query, setQuery] = useState("");
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [openId, setOpenId] = useState<string | null>(null); // Modal

    const allTags = useMemo(() => {
        const s = new Set<string>();
        PROJECTS.forEach((p) => p.categories.forEach((c) => s.add(c)));
        return Array.from(s).sort((a, b) => a.localeCompare(b));
    }, []);

    const filtered = useMemo(() => {
        return PROJECTS.filter((p) => {
            const matchesQuery =
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                (p.client?.toLowerCase().includes(query.toLowerCase()) ??
                    false) ||
                (p.summary?.toLowerCase().includes(query.toLowerCase()) ??
                    false);
            const matchesTags =
                activeTags.length === 0 ||
                activeTags.every((t) => p.categories.includes(t));
            return matchesQuery && matchesTags;
        });
    }, [query, activeTags]);

    const toggleTag = useCallback((t: string) => {
        setActiveTags((prev) => (prev.includes(t) ? [] : [t]));
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenId(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div className="py-24">
            <div className="container">
                {/* Encabezado */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 py-10 md:py-14">
                        <div>
                            <div className="w-full text-center flex flex-col items-center">
                                <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
                                    Porta
                                    <span className="text-magenta">folio</span>
                                </h1>
                                <p className="mt-6 text-neutral-600 dark:text-neutral-300 max-w-2xl">
                                    Casos de estudio seleccionados en branding,
                                    packaging, UX/UI y campañas 360.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 items-center justify-center">
                            <button
                                onClick={() => setActiveTags([])}
                                className={
                                    "px-3.5 py-2 rounded-full text-sm border transition " +
                                    (activeTags.length === 0
                                        ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                        : "bg-transparent dark:border-white/20 border-black/20 text-neutral-600 dark:text-neutral-200 hover:border-white/40")
                                }
                            >
                                Todo
                            </button>

                            {allTags.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => toggleTag(t)}
                                    className={
                                        "px-3.5 py-2 rounded-full text-sm border transition " +
                                        (activeTags.includes(t)
                                            ? "bg-magenta text-white border-magenta"
                                            : "bg-transparent dark:border-white/20 border-black/20 text-neutral-600 dark:text-neutral-200 hover:border-white/40")
                                    }
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid de proyectos */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8 pb-20">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {filtered.map((p) => (
                                <motion.article
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    transition={{ duration: 0.2 }}
                                    className={UI.card}
                                >
                                    <button
                                        onClick={() => setOpenId(p.id)}
                                        className="block text-left w-full"
                                        aria-label={`Abrir ${p.title}`}
                                    >
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={p.cover}
                                                alt={p.title}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                className="object-cover"
                                                priority={false}
                                            />

                                            {/* Overlay y texto solo en hover (solo visible desde md) */}
                                            <div className="absolute inset-0 hidden lg:flex flex-col justify-end p-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                                    {p.categories
                                                        .slice(0, 3)
                                                        .map((c) => (
                                                            <span
                                                                key={c}
                                                                className={
                                                                    UI.chip
                                                                }
                                                            >
                                                                {c}
                                                            </span>
                                                        ))}
                                                </div>
                                                <h3 className={UI.title}>
                                                    {p.title}
                                                </h3>
                                                <p className="text-white/80 text-sm">
                                                    {p.client}{" "}
                                                    {p.year
                                                        ? `• ${p.year}`
                                                        : null}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                </motion.article>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    {filtered.length === 0 && (
                        <p className="text-neutral-500">
                            No hay resultados para “{query}”.
                        </p>
                    )}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {openId && (
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[70]"
                            aria-modal
                            role="dialog"
                        >
                            <div
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                onClick={() => setOpenId(null)}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="relative mx-auto mt-[6vh] w-[92vw] max-w-4xl rounded-3xl border border-white/10 bg-neutral-900 text-white shadow-2xl"
                            >
                                {(() => {
                                    const p = PROJECTS.find(
                                        (x) => x.id === openId
                                    )!;
                                    return (
                                        <div>
                                            <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
                                                <Image
                                                    src={p.cover}
                                                    alt={p.title}
                                                    fill
                                                    sizes="100vw"
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="p-6 md:p-8">
                                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-semibold">
                                                            {p.title}
                                                        </h3>
                                                        <p className="text-white/70 mt-1">
                                                            {p.client}{" "}
                                                            {p.year
                                                                ? `• ${p.year}`
                                                                : null}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {p.slug && (
                                                            <a
                                                                href={p.slug}
                                                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                                                            >
                                                                Ver caso
                                                                completo{" "}
                                                                <span
                                                                    aria-hidden
                                                                >
                                                                    ↗
                                                                </span>
                                                            </a>
                                                        )}
                                                        <button
                                                            className="rounded-full border border-white/20 px-3 py-2 text-sm hover:bg-white hover:text-black transition"
                                                            onClick={() =>
                                                                setOpenId(null)
                                                            }
                                                        >
                                                            Cerrar
                                                        </button>
                                                    </div>
                                                </div>

                                                {p.summary && (
                                                    <p className="mt-4 text-white/80 leading-relaxed">
                                                        {p.summary}
                                                    </p>
                                                )}

                                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="text-sm font-medium text-white/60">
                                                            Categorías
                                                        </h4>
                                                        <div className="mt-2 flex flex-wrap gap-2">
                                                            {p.categories.map(
                                                                (c) => (
                                                                    <span
                                                                        key={c}
                                                                        className={
                                                                            UI.chip
                                                                        }
                                                                    >
                                                                        {c}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    {p.services && (
                                                        <div>
                                                            <h4 className="text-sm font-medium text-white/60">
                                                                Servicios
                                                            </h4>
                                                            <div className="mt-2 flex flex-wrap gap-2">
                                                                {p.services.map(
                                                                    (s) => (
                                                                        <span
                                                                            key={
                                                                                s
                                                                            }
                                                                            className={
                                                                                UI.chip
                                                                            }
                                                                        >
                                                                            {s}
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
