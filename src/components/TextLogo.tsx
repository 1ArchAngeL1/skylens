'use client'
import * as React from "react";
import {TypographyH2} from "@/components/common/text/Typography";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

type TextLogoProps = {
    className?: string;
} & React.HTMLAttributes<HTMLElement>

export const TextLogo: React.FC<TextLogoProps> = ({className}) => {
    const router = useRouter();
    return (
        <div onClick={() => {
            router.push("/");
        }} className={"cursor-pointer"}>
            <TypographyH2 className={cn("select-none", className)}>
                TSIS<span className={"dark:text-primary-dark"}>TVALI</span>
            </TypographyH2>
        </div>

    );
};