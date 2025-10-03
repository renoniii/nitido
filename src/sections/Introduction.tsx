"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40 xl:py-50 2xl:py-60">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40 lg:w-9/12 xl:w-7/12 2xl:w-7/12 mx-auto">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="dark:text-dark text-light sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 dark:text-white/15 text-gray-800/20",
                                        wordIndex < currentWord &&
                                            "dark:text-white text-light"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-magenta block">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
