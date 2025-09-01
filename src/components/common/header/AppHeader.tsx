import {NavigationButton} from "@/components/common/navbar/NavigationButton";
import React from "react";
import {TextLogo} from "@/components/TextLogo";
import {SocialMediaIsland} from "@/components/common/navbar/SocialMediaIsland";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import {FloatingMasterBar} from "@/components/common/navbar/FloatingMasterBar";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";

type MainHeaderProps = {
    className?: string;
}

export const AppHeader: React.FC<MainHeaderProps> = ({className}) => {
    return <div className={"w-full h-full flex items-center justify-between px-4"}>
        <AnimatedContent
            distance={-200}
            direction="horizontal"
            reverse={false}
            duration={1}
            ease="bounce.out"
            initialOpacity={0.1}
            animateOpacity
            scale={1.1}
            threshold={0}
            delay={0.1}
        >
            <TextLogo className={"tracking-wide"}/>
        </AnimatedContent>
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className={"global-centered"}>
            <FloatingMasterBar/>
        </FadeContent>
        <div className={"flex justify-center items-center gap-6"}>
            <SocialMediaIsland/>
            <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="bounce.out"
                initialOpacity={0.1}
                animateOpacity
                scale={1.1}
                threshold={0}
                delay={0.1}
            >
                <NavigationButton title={"Order Now"}
                                  navigationPath={"/order"}
                                  className={"h-12 font-bold tracking-wide dark:bg-primary-dark dark:text-black hover:dark:bg-white hover:text-black rounded-full duration-200 hover:scale-105"}
                />
            </AnimatedContent>

        </div>
    </div>

}