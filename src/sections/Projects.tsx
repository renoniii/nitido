"use client";

import darkSaasLandingPage from "@/assets/images2/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images2/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images2/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images2/grain.jpg";
import whitegrainImage from "@/assets/images2/whitegrain.jpg";
import starsBg from "@/assets/images/stars.png";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useScroll,
    useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const portfolioProjects = [
    {
        company: "Acme Corp",
        year: "2022",
        title: "Dark Saas Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/4k7IdSLxh6w",
        image: darkSaasLandingPage,
    },
    {
        company: "Innovative Co",
        year: "2021",
        title: "Light Saas Landing Page",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "https://youtu.be/7hi5zwO75yc",
        image: lightSaasLandingPage,
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/Z7I5uSRHMHg",
        image: aiStartupLandingPage,
    },
];

export const ProjectsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundPositionY = useTransform(
        scrollYProgress,
        [0, 1],
        [-300, 300]
    );

    return (
        <section className="pb-16 lg:py-24" ref={sectionRef}>
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-magenta to-purple-400 text-center text-transparent bg-clip-text xl:text-2xl md:pt-20 lg:pt-5">
                        Real-world Results
                    </p>
                </div>
                <h2 className="font-bold text-3xl md:text-6xl lg:text-6xl xl:text-7xl text-center mt-6 ">
                    Featured Projetcs
                </h2>
                <p className="text-center md:text-lg lg:text-xl xl:text-2xl dark:text-darkMuted text-lightMuted mt-4 max-w-md mx-auto">
                    See how I transformed concepts into engaging digital
                </p>
                <div className="mt-10 md:mt-20 flex flex-col gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <div
                            key={project.title}
                            className="dark:text-dark text-light dark:bg-black bg-white rounded-3xl z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl dark:after:outline-white/20 after:outline-gray-950/10 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 xl:pt-20 xl:px-32 2xl:pt-24 2xl:px-40 after:pointer-events-none sticky"
                            style={{
                                top: `calc(120px + ${projectIndex * 40}px`,
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 -z-10"
                                animate={{
                                    backgroundPositionX: starsBg.width,
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 60,
                                    ease: "linear",
                                }}
                                style={{
                                    backgroundPositionY,
                                    backgroundImage: `url(${starsBg.src})`,
                                }}
                            ></motion.div>
                            <div
                                className="absolute inset-0 -z-20 bg-magenta bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_0px_20%,black,transparent)] group-hover:opacity-0 transition duration-700"
                                style={{}}
                            />

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
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16 xl:pb-20 2xl:pb-32">
                                    <div className="dark:text-dark text-light inline-flex gap-2 font-bold uppercase tracking-widest text-sm xl:text-lg bg-clip-text">
                                        <span>{project.company}</span>
                                        <span>&bull;</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-bold dark:text-dark text-light text-2xl mt-2 md:text-4xl md:mt-5 xl:text-6xl xl:mt-8">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 dark:border-white/20 border-gray-950/20 mt-4 md:mt-5" />
                                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                                        {project.results.map((result) => (
                                            <li className="flex gap-2 text-sm md:dark:text-dark text-light">
                                                <CheckCircleIcon className="dark:text-dark text-light size-5 md:size-6 xl:size-7" />
                                                <span className="dark:text-dark text-light 2xl:text-xl">
                                                    {result.title}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href={project.link}>
                                        <button className="bg-magenta text-white h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                                            <span>Visit Live Site</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
