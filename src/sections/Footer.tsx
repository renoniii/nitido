import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import LogoImage from "@/assets/images/logo2.svg";

const NAV_LINKS = [
    { label: "HOME", href: "/" },
    { label: "NOSOTROS", href: "/nosotros" },
    { label: "PORTAFOLIO", href: "/portafolio" },
    { label: "SERVICIOS", href: "/servicios" },
    { label: "CONTACTO", href: "/contacto" },
];

export default function Footer() {
    return (
        <footer className="bg-transparent dark:text-dark text-light py-16">
            <div className="container mx-auto flex flex-col items-center gap-10 px-4">
                {/* Logo + navegación */}
                <div className="flex flex-col items-center gap-6">
                    <LogoImage
                        className="w-40 h-auto"
                        aria-label="Nitido logo"
                    />
                    <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wide uppercase">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-magenta transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contacto */}
                <div className="text-center text-sm leading-relaxed">
                    <p>contacto@nitidostudio.com</p>
                    <p>+57 311 491 0507</p>
                </div>

                {/* Hashtag + redes */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-xs font-semibold tracking-widest">
                        #NITIDOCREA
                    </p>
                    <div className="flex gap-5 dark:text-dark/80 text-light/80">
                        <a
                            href="mailto:contacto@nitidostudio.com"
                            className="hover:text-magenta transition"
                            aria-label="Correo"
                        >
                            <Mail size={18} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="hover:text-magenta transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="hover:text-magenta transition"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://facebook.com"
                            className="hover:text-magenta transition"
                            aria-label="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
