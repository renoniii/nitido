"use client";

import LogoImage from "@/assets/images/logo2.svg";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const NAVBAR_OFFSET = 96; // ajusta a la altura real de tu navbar

// ahora usamos id en lugar de href directo
const navLinks = [
    { label: "Inicio", id: "hero" },
    { label: "Servicios", id: "features" },
    { label: "Herramientas", id: "integrations" }, // (antes “Apps”)
    { label: "Portafolio", id: "portfolio" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const isScrollingRef = useRef(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) document.documentElement.classList.remove("dark");
        else document.documentElement.classList.add("dark");
    };

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        if (isScrollingRef.current) return;

        const el = document.getElementById(targetId);
        if (!el) return;

        isScrollingRef.current = true;

        const y =
            el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });

        setIsOpen(false); // cierra menú móvil si estaba abierto
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 600);
    };

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container">
                    <div className="border border-gray-300 dark:border-white/15 rounded-[27px] md:rounded-full bg-[rgb(var(--color-bg))]/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                            {/* Logo */}
                            <div>
                                <LogoImage className="h-9 md:h-auto w-auto" />
                            </div>

                            {/* Links desktop */}
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium dark:text-dark text-light">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.id}
                                            href={`#${link.id}`}
                                            onClick={(e) =>
                                                handleNavClick(e, link.id)
                                            }
                                            className="cursor-pointer"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-4 items-center">
                                {/* Toggle dark */}
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 rounded-full text-gray-400 dark:text-gray-300 hover:bg-gray-100/20 dark:hover:bg-gray-700 hover:text-magenta dark:hover:text-magenta transition duration-300"
                                    aria-label="Toggle theme"
                                >
                                    {darkMode ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="4"
                                            ></circle>
                                            <path d="M12 2v2"></path>
                                            <path d="M12 20v2"></path>
                                            <path d="m4.93 4.93 1.41 1.41"></path>
                                            <path d="m17.66 17.66 1.41 1.41"></path>
                                            <path d="M2 12h2"></path>
                                            <path d="M20 12h2"></path>
                                            <path d="m6.34 17.66-1.41 1.41"></path>
                                            <path d="m19.07 4.93-1.41 1.41"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                        </svg>
                                    )}
                                </button>

                                {/* CTA */}
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Contáctanos
                                </Button>

                                {/* Mobile menu */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Mobile dropdown */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.id}
                                                href={`#${link.id}`}
                                                onClick={(e) =>
                                                    handleNavClick(e, link.id)
                                                }
                                                className="cursor-pointer"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button
                                            variant="primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Contáctanos
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* espacio de compensación del header fijo */}
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
