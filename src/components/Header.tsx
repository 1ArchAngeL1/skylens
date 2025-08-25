import React from 'react';
import {cn} from "@/lib/utils";

type FooterProps = {
    className?: string;
} & React.HTMLAttributes<HTMLElement>

export const Header: React.FC<FooterProps> = ({className, children}) => {
    return (
        <header className={cn("w-full h-auto min-h-24 bg-transparent", className)}>
            {children}
        </header>
    )
}