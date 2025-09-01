import React from "react";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import {TypographyH1} from "@/components/common/text/Typography";
import {NavigationButton} from "@/components/common/navbar/NavigationButton";
import {cn} from "@/lib/utils";


type NotWithUsSectionProps = {
    className?: string;
}

export const NotWithUsSection: React.FC<NotWithUsSectionProps> = ({className}) => {
    return (
        <div className={cn('relative w-full h-auto flex flex-col items-center justify-center gap-4 py-20', className)}>
            <div className={"w-full flex justify-center items-center"}>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <TypographyH1 className={"tracking-wide"}>Not With Us Yet?!</TypographyH1>
                </FadeContent>
            </div>
            <div className={"flex justify-center items-center gap-4"}>
                <NavigationButton
                    className={"w-44 text-2xl py-7 rounded-full dark:bg-white dark:text-black hover:scale-105"}
                    title={"About"}
                    navigationPath={"/about"}>
                </NavigationButton>
                <NavigationButton
                    className={"w-44 text-2xl py-7 rounded-full dark:bg-primary-dark dark:text-black hover:scale-105"}
                    title={"Order Now"}
                    navigationPath={"/order"}>
                </NavigationButton>
            </div>
        </div>
    );
};