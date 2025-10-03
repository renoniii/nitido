"use client";

import Tag from "@/components/Tag";
import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/Button";
import whitegrainImage from "@/assets/images2/whitegrain.jpg";
import grainImage from "@/assets/images2/grain.jpg";
import starsBg from "@/assets/images/stars.png";

const services = [
    "Diseño Web",
    "Branding",
    "Marketing Digital",
    "UX/UI",
    "Otro",
];

const useRelativeMousePosition = (to: React.RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const updateMousePosition = (event: MouseEvent) => {
        if (!to.current) return;
        const rect = to.current.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () =>
            window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return [mouseX, mouseY] as const;
};

export default function Form() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const [mouseX, mouseY] = useRelativeMousePosition(formRef);
    const maskImage = useMotionTemplate`
        radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)
    `;

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

                    {/* Formulario con fondos animados */}
                    <form
                        ref={formRef}
                        className="group mt-12 max-w-8xl mx-auto dark:bg-black border dark:border-white/20 border-gray-300 rounded-3xl p-8 relative overflow-hidden isolate"
                    >
                        {/* Estrellas */}
                        <motion.div
                            className="absolute inset-0 -z-30 pointer-events-none rounded-3xl"
                            animate={{ backgroundPositionX: starsBg.width }}
                            transition={{
                                repeat: Infinity,
                                duration: 60,
                                ease: "linear",
                            }}
                            style={{
                                backgroundImage: `url(${starsBg.src})`,
                                opacity: 0.35,
                                backgroundRepeat: "repeat",
                                backgroundPosition: "0% 0%",
                            }}
                        />

                        {/* Spotlight fijo al centro */}
                        <div
                            className="absolute inset-0 -z-20 bg-magenta dark:opacity-100 opacity-100 transition duration-700 group-hover:opacity-0 rounded-3xl"
                            style={{
                                WebkitMaskImage:
                                    "radial-gradient(50% 50% at 50% 50%, black, transparent)",
                                maskImage:
                                    "radial-gradient(50% 50% at 50% 50%, black, transparent)",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                            }}
                        />

                        {/* Spotlight dinámico que sigue el mouse */}
                        <motion.div
                            className="absolute inset-0 -z-20 bg-magenta opacity-0 transition duration-700 dark:group-hover:opacity-100 group-hover:opacity-100 rounded-3xl"
                            style={{
                                WebkitMaskImage: maskImage,
                                maskImage,
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                            }}
                        />

                        {/* Grain */}
                        <div
                            className="absolute inset-0 -z-10 opacity-15 hidden dark:block "
                            style={{
                                backgroundImage: `url(${grainImage.src})`,
                                backgroundRepeat: "repeat",
                            }}
                        />
                        <div
                            className="absolute inset-0 -z-10 opacity-10 dark:hidden"
                            style={{
                                backgroundImage: `url(${whitegrainImage.src})`,
                                backgroundRepeat: "repeat",
                            }}
                        />

                        {/* Contenido */}
                        <div className="relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="placeholder:dark:text-dark placeholder:text-light text-light bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magenta dark:text-dark "
                                />
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    className="placeholder:dark:text-dark placeholder:text-light text-light bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magenta dark:text-dark "
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="placeholder:dark:text-dark placeholder:text-light text-light bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magenta dark:text-dark "
                                />
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="placeholder:dark:text-dark placeholder:text-light text-light bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magenta dark:text-dark "
                                />
                            </div>

                            {/* Dropdown personalizado */}
                            <div className="relative mt-6">
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="border-gray-300 dark:text-dark text-light cursor-pointer flex justify-between items-center placeholder:dark:text-dark bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magenta"
                                >
                                    <span className="">
                                        {selected ||
                                            "¿Qué servicio te interesa?"}
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
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeInOut",
                                            }}
                                            className="mt-2 border-gray-300 shadow-lg overflow-hidden placeholder:dark:text-dark text-light bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magent"
                                        >
                                            {services.map((service) => (
                                                <div
                                                    key={service}
                                                    onClick={() =>
                                                        handleSelect(service)
                                                    }
                                                    className="px-4 py-2 dark:text-dark text-light hover:dark:text-dark text-light hover:bg-magenta/20 cursor-pointer"
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
                                className="placeholder:dark:text-dark placeholder:text-light text-light bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-300/30 dark:border-white/20 rounded-xl px-4 py-3 w-full focus:outline-none focus:border-magenta mt-6"
                            ></textarea>

                            <p className="text-xs dark:text-dark text-light text-center mt-4">
                                Al enviar este formulario, acepta que
                                almacenemos sus datos para gestionar su
                                consulta. Consulte nuestra{" "}
                                <a
                                    href="#"
                                    className="underline hover:text-magenta"
                                >
                                    Política de privacidad
                                </a>
                                .
                            </p>

                            <div className="flex justify-center mt-6">
                                <Button variant="primary" className="px-8">
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
