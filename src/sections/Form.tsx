"use client";

import Tag from "@/components/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/Button";

const services = [
    "Diseño Web",
    "Branding",
    "Marketing Digital",
    "UX/UI",
    "Otro",
];

export default function Form() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleSelect = (service: string) => {
        setSelected(service);
        setIsOpen(false);
    };
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Contáctanos</Tag>
                    </div>
                    <form className="mt-12 max-w-8xl mx-auto bg-neutral-900/40 border border-white/15 rounded-3xl p-8 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="bg-transparent border border-white/15 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-purple-400"
                            />
                            <input
                                type="text"
                                placeholder="Apellido"
                                className="bg-transparent border border-white/15 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-purple-400"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border border-white/15 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-purple-400"
                            />
                            <input
                                type="tel"
                                placeholder="Teléfono"
                                className="bg-transparent border border-white/15 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-purple-400"
                            />
                        </div>
                        {/* Dropdown personalizado */}
                        <div className="relative">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-neutral-900 border border-white/15 rounded-xl px-4 py-3 text-base cursor-pointer flex justify-between items-center"
                            >
                                <span>
                                    {selected || "¿Qué servicio te interesa?"}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={`transition-transform ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut",
                                        }}
                                        className="mt-2 w-full bg-neutral-900 border border-white/15 rounded-xl shadow-lg overflow-hidden"
                                    >
                                        {services.map((service) => (
                                            <div
                                                key={service}
                                                onClick={() =>
                                                    handleSelect(service)
                                                }
                                                className="px-4 py-2 text-white/80 hover:text-base hover:bg-purple-400/20 cursor-pointer"
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <textarea
                            placeholder="Cuéntanos sobre tu proyecto y marca..."
                            rows={5}
                            className="bg-transparent border border-white/15 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-purple-400"
                        ></textarea>
                        <p className="text-xs text-white/40 text-center">
                            Al enviar este formulario, acepta que almacenemos
                            sus datos para gestionar su consulta. Consulte
                            nuestra{" "}
                            <a
                                href="#"
                                className="underline hover:text-purple-400"
                            >
                                Política de privacidad
                            </a>
                            .
                        </p>
                        <div className="flex justify-center">
                            <Button variant="primary" className="px-8">
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
