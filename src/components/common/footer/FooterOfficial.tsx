import React from "react";
import {cn} from "@/lib/utils";


type FooterOfficialProps = {
    className?: string;
}

export const FooterOfficial: React.FC<FooterOfficialProps> = ({className}) => {
    return <div
        className={cn("border-t w-full dark:border-border-primary-dark mt-8 pt-2 text-center text-text-secondary-light dark:text-text-secondary-dark", className)}>
        <p>© 2025 შპს ცისთვალი. All rights reserved.</p>
    </div>
}