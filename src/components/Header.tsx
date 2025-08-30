import React from 'react';
import {cn} from "@/lib/utils";

type FooterProps = {
    className?: string;
} & React.HTMLAttributes<HTMLElement>

export const Header: React.FC<FooterProps> = ({className, children}) => {
    return (
        <header className={cn("sticky top-0 w-full h-24 p-4 z-30 bg-header-light dark:bg-header-dark", className)}>
            {children}
        </header>
    )
}