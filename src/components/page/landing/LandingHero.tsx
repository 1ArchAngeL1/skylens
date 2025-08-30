'use client'

import {LandingHeroText} from "@/components/page/landing/LandingHeroText";
import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

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
        <div className={"w-full flex flex-col gap-8"}>
            <div className={"w-full h-auto flex justify-between items-center mt-12 px-16 py-4"}>
                <LandingHeroText/>
            </div>
            {/*<div className={"flex justify-center items-center"}>*/}
            {/*    <div>*/}
            {/*        <AnimatedTestimonialsDemo/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>)
}