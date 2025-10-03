"use client";

import Button from "@/components/Button";
import grainImage from "@/assets/images2/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export default function Hero() {
    return (
        <section className="py-5 md:py-24 lg:py-24  relative z-0 overflow-x-clip">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{ backgroundImage: `url(${grainImage.src})` }}
                ></div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>

                <HeroOrbit
                    size={440}
                    rotation={79}
                    shouldOrbit
                    orbitDuration="30s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <StarIcon className="size-5 text-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={470}
                    rotation={-6}
                    shouldOrbit
                    orbitDuration="32s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <StarIcon className="size-8 text-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={520}
                    rotation={-50}
                    shouldOrbit
                    orbitDuration="34s"
                >
                    <div className="size-2 rounded-full bg-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={530}
                    rotation={185}
                    shouldOrbit
                    orbitDuration="36s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <StarIcon className="size-10 text-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={550}
                    rotation={20}
                    shouldOrbit
                    orbitDuration="38s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <StarIcon className="size-12 text-magenta" />
                </HeroOrbit>
                <HeroOrbit
                    size={590}
                    rotation={98}
                    shouldOrbit
                    orbitDuration="40s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <StarIcon className="size-8 text-magenta" />
                </HeroOrbit>
                <HeroOrbit
                    size={650}
                    rotation={-5}
                    shouldOrbit
                    orbitDuration="42s"
                >
                    <div className="size-2 rounded-full bg-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={680}
                    rotation={85}
                    shouldOrbit
                    orbitDuration="44s"
                >
                    <div className="size-3 rounded-full bg-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={710}
                    rotation={144}
                    shouldOrbit
                    orbitDuration="46s"
                >
                    <StarIcon className="size-14 text-magenta/20" />
                </HeroOrbit>
                <HeroOrbit
                    size={800}
                    rotation={-72}
                    shouldOrbit
                    orbitDuration="48s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <StarIcon className="size-28 text-magenta" />
                </HeroOrbit>
            </div>
            <div className="container relative">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-magenta to-purple-400 rounded-full text-white font-semibold">
                        ✨ 7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl dark:text-dark text-light font-medium text-center mt-6">
                    Impactful design, <br />
                    created effortlessly
                </h1>
                <p className="text-center text-xl dark:text-darkMuted text-lightMuted mt-8 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam nobis, explicabo ipsa, cum rem labore sed quis
                    nesciunt voluptatum velit, nam unde? Consequatur facilis
                    voluptate voluptatem reiciendis, inventore ex neque!
                </p>
                <form className="flex border dark:border-white/15 border-gray-300 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
