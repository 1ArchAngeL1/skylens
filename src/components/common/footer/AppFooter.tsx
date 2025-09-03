import React from "react";
import {FooterGrid} from "@/components/common/footer/FooterGrid";
import {FooterOfficial} from "@/components/common/footer/FooterOfficial";
import {cn} from "@/lib/utils";

type AppFooterProps = {
    className?: string;
}

export const AppFooter: React.FC<AppFooterProps> = ({className}) => {
    return <div className={cn("w-full flex flex-col justify-center items-center p-4", className)}>
        <FooterGrid/>
        <FooterOfficial/>
    </div>
}