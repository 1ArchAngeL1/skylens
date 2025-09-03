import React from "react";
import {cn} from "@/lib/utils";


type FooterOfficialProps = {
    className?: string;
}

export const FooterOfficial: React.FC<FooterOfficialProps> = ({className}) => {
    return <div
        className={cn("flex justify-center items-center border-t w-full dark:border-border-primary-dark text-center text-text-secondary-light dark:text-primary-dark", className)}>
        <p>© 2025 შპს ცისთვალი. All rights reserved.</p>
    </div>
}