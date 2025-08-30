'use client'

import React from "react";
import {cn} from "@/lib/utils";
import {NavigationPanel} from "@/components/common/navbar/NavigationPanel";

type FloatingMasterBarProps = {
    className?: string;
}

export const FloatingMasterBar: React.FC<FloatingMasterBarProps> = ({className}) => {

    return (
        <nav
            className={cn(`justify-between items-center z-50 px-3 py-2 
            rounded-full gap-4 border transition-all bg-transparent dark:border-border-accent-dark 
            shadow-none`, className)}

        >
            <NavigationPanel/>
        </nav>
    )
}