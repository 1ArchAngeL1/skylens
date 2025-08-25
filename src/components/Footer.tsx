import React from 'react';
import {cn} from "@/lib/utils";

type FooterProps = {
    className?: string;
} & React.HTMLAttributes<HTMLElement>

export const Footer: React.FC<FooterProps> = ({className, children}) => {
    return (
        <footer className={cn("w-full h-auto shadow-2xl bg-yellow-500", className)}>
            {children}
        </footer>
    )
}