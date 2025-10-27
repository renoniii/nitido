import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Portfolio from "@/sections/Portfolio";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Footer from "@/sections/Footer";
import Form from "@/sections/Form";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
    return (
        <>
            <Navbar />

            <section id="hero" className="scroll-mt-28">
                <Hero />
            </section>

            <LogoTicker />
            <ProjectsSection />

            <section id="features" className="scroll-mt-28">
                <Features />
            </section>

            <section id="integrations" className="scroll-mt-28">
                <Integrations />
            </section>

            <section id="portfolio" className="scroll-mt-28">
                <Portfolio />
            </section>

            <Form />
            <Footer />
        </>
    );
}
