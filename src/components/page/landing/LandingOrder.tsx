import React from "react";
import {BackgroundRippleEffect} from "@/components/ui/background-ripple-effect";
import {LandingOrderForm} from "@/components/page/landing/LandingOrderForm";
import {AnimatedTestimonials} from "@/components/ui/animated-testimonials";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import {TypographyH1} from "@/components/common/text/Typography";

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
        <div className={"relative flex flex-col w-full"}>
            <div className={"absolute gradient-light top-0 left-1/2 transform -translate-x-1/2 opacity-40"}/>
            <div className={"w-full flex justify-center items-center"}>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <TypographyH1 className={"tracking-wide"}>Not With Us Yet?!</TypographyH1>
                </FadeContent>
            </div>
            <div
                className={"relative w-full flex justify-between items-start gap-6 z-[100] opacity-95 overflow-hidden px-8 py-4"}>
                <BackgroundRippleEffect rows={5} cellSize={100} className={"opacity-20 shadow-2xl"}/>
                <AnimatedTestimonialsDemo/>
                <LandingOrderForm/>
            </div>
        </div>
    );
}
