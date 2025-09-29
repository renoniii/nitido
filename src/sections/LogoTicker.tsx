"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { line } from "framer-motion/client";

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
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-muted text-xl">
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
                                        className="h-12 w-auto text-base dark:hover:text-magenta hover:text-magenta transition"
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
