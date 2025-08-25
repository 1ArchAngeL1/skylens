'use client'

import React from "react";
import {cn} from "@/lib/utils";
import {NavigationButton} from "@/components/common/navbar/NavigationButton";
import {NavigationPanel} from "@/components/common/navbar/NavigationPanel";

interface FloatingMasterBarProps {
    scrolled: boolean;
};


export const FloatingMasterBar: React.FC<FloatingMasterBarProps> = ({scrolled}) => {

    return (
        <nav
            className={cn(`justify-between items-center w-[80%] h-16 top-4 global-centered z-50 px-3 py-2 rounded-full gap-4 border transition-all bg-transparent`, scrolled
                ? 'border-border-accent-light dark:border-border-primary-dark shadow-xl backdrop-blur-xl'
                : 'dark:border-border-primary-dark shadow-none backdrop-blur-0 dark:bg-surface-dark'
            )}
        >
            <NavigationButton title={"Order Now"}
                              navigationPath={"/order"}
                              className={"dark:bg-primary-dark text-black hover:dark:bg-black hover:text-white rounded-full duration-300 hover:scale-105"}
            />
            <NavigationPanel/>

        </nav>
    )
}