import React from 'react';
import {cn} from "@/lib/utils";

type FooterProps = {
    className?: string;
} & React.HTMLAttributes<HTMLElement>

export const Footer: React.FC<FooterProps> = ({className, children}) => {
    return (
        <footer className={cn("h-auto z-50 px-8 bg-footer-light dark:bg-footer-dark rounded-t-[16px] shadow-2xl border-t dark:border-border-primary-dark", className)}>
            {children}
        </footer>
    )
}