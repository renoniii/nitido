"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

// 👉 diccionario de íconos (fuera del array)
import FigmaIcon from "@/assets/images/figma-logo.svg";
import NotionIcon from "@/assets/images/notion-logo.svg";
import SlackIcon from "@/assets/images/slack-logo.svg";
import RelumeIcon from "@/assets/images/relume-logo.svg";
import FramerIcon from "@/assets/images/framer-logo.svg";
import GithubIcon from "@/assets/images/github-logo.svg";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Figma: FigmaIcon,
    Notion: NotionIcon,
    Slack: SlackIcon,
    Relume: RelumeIcon,
    Framer: FramerIcon,
    GitHub: GithubIcon,
};

export default function IntegrationColumn(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;

    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => {
                        const Icon = iconMap[integration.name]; // 🔑 traemos el componente del diccionario
                        return (
                            <div
                                key={integration.name}
                                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                            >
                                <div className="flex justify-center">
                                    {Icon && <Icon className="size-24" />}
                                </div>

                                <h3 className="text-3xl text-center mt-5">
                                    {integration.name}
                                </h3>
                                <p className="text-center text-muted mt-2">
                                    {integration.description}
                                </p>
                            </div>
                        );
                    })}
                </Fragment>
            ))}
        </motion.div>
    );
}
