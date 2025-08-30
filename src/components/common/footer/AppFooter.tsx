import React from "react";
import {FooterGrid} from "@/components/common/footer/FooterGrid";
import {FooterOfficial} from "@/components/common/footer/FooterOfficial";

type AppFooterProps = {
    className?: string;
}

export const AppFooter: React.FC<AppFooterProps> = ({className}) => {
    return <div className={"w-full flex flex-col"}>
        <FooterGrid/>
        <FooterOfficial/>
    </div>
}