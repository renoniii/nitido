"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", Icon: quantumLogo },
    { name: "Acme Corp", Icon: acmeLogo },
    { name: "Echo Valley", Icon: echoValleyLogo },
    { name: "Pulse", Icon: pulseLogo },
    { name: "Outside", Icon: outsideLogo },
    { name: "Apex", Icon: apexLogo },
    { name: "Celestial", Icon: celestialLogo },
    { name: "Twice", Icon: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 lg:py-32 overflow-x-clip">
            <div className="container">
                <h3 className="text-center dark:text-darkMuted text-lightMuted text-xl">
                    Already chosen by these market leaders
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to{-right,transparent,black_90%,transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map(({ name, Icon }) => (
                                    <Icon
                                        key={name}
                                        className="h-12 w-auto dark:text-dark text-light dark:hover:text-magenta hover:text-magenta transition"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
