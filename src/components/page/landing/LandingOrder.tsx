import React from "react";
import {BackgroundRippleEffect} from "@/components/ui/background-ripple-effect";
import {LandingOrderForm} from "@/components/page/landing/LandingOrderForm";
import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";

type LandingOrderProps = {
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


export const LandingOrder: React.FC<LandingOrderProps> = props => {
    return (
        <div className={"relative w-full flex justify-between items-center gap-3 z-[100] opacity-95 overflow-hidden px-20"}>
            <BackgroundRippleEffect rows={10} cellSize={100} className={"opacity-15 shadow-2xl"}/>
            <AnimatedTestimonialsDemo/>
            <LandingOrderForm/>
        </div>
    );
}
