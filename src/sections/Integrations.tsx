"use client";

import Tag from "@/components/Tag";
import IntegrationColumn from "@/components/IntegrationsColumns";

// 👉 ahora solo datos (sin componentes dentro)
const integrations = [
    {
        name: "Figma",
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="dark:text-dark text-light font-bold text-4xl md:text-6xl lg:text-6xl xl:text-7xl mt-6">
                            Plays well with{" "}
                            <span className="text-magenta">Others</span>
                        </h2>
                        <p className="dark:text-darkMuted text-lightMuted mt-4 text-lg">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. A porro ab eius deserunt, autem aspernatur
                            molestias aut ut rem in, adipisci minima odio
                            doloribus est officiis magnam sequi vero dolores.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
