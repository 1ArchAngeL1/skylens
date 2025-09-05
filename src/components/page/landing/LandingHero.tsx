import {LandingHeroText} from "@/components/page/landing/LandingHeroText";
import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";
import {NavigationButton} from "@/components/common/navbar/NavigationButton";
import React from "react";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import {AppleCardsCarouselDemo} from "@/components/page/landing/LandingHeroCarousel";
import {cn} from "@/lib/utils";

type LandingHeroProps = {
    className?: string;
}

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The Avata 2 delivers unmatched agility and cinematic shots. It's a game-changer for aerial creativity.",
            name: "DJI Avata 2",
            designation: "Aerial Cinematographer",
            src: "/drones/avata2.jpg",
        },
        {
            quote:
                "The Mavic 3 sets the standard for professional drone operations. Incredible range and precision in every flight.",
            name: "DJI Mavic 3",
            designation: "Survey & Mapping Specialist",
            src: "/drones/mavic3.jpeg",
        },
        {
            quote:
                "Compact, powerful, and reliable. The Mini Pro 4 makes professional-grade footage accessible anywhere.",
            name: "DJI Mini Pro 4",
            designation: "Content Creator",
            src: "/drones/mini_pro4.png",
        },
    ];

    return <AnimatedTestimonials testimonials={testimonials}/>;
}


export const LandingHero: React.FC<LandingHeroProps> = ({className}) => {
    return (
        <div className={cn("w-full h-full flex justify-between items-start p-0", className)}>
            <div className={"w-full flex flex-col items-start gap-8"}>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className={"w-full h-auto flex justify-between items-center mt-12 px-16 py-4"}>
                        <LandingHeroText/>
                    </div>
                </FadeContent>
                <AnimatedContent distance={-500}
                                 direction="horizontal"
                                 reverse={false}
                                 duration={1}
                                 ease="easeInOut"
                                 initialOpacity={0.1}
                                 animateOpacity
                                 scale={1.1}
                                 threshold={0}
                                 delay={0.1}>
                    <div className={"flex justify-center items-center gap-4 pl-16"}>
                        <NavigationButton
                            className={"w-52 text-3xl py-8 rounded-xl dark:bg-white dark:text-black hover:scale-105"}
                            title={"Gallery"}
                            navigationPath={"/about"}>
                        </NavigationButton>
                        <NavigationButton
                            className={"w-52 text-3xl py-8 rounded-xl dark:bg-primary-dark dark:text-black hover:scale-105"}
                            title={"Get Started"}
                            navigationPath={"/order"}>
                        </NavigationButton>
                    </div>
                </AnimatedContent>
            </div>
            <AppleCardsCarouselDemo/>
        </div>)
}