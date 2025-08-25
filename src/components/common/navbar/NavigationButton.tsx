'use client'
import {Button} from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import {cn} from "@/lib/utils";

type NavigationButtonProps = {
    title: string;
    navigationPath: string;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const NavigationButton: React.FC<NavigationButtonProps> = ({title, navigationPath, className}) => {
    const router = useRouter();
    return (
        <Button variant={"ghost"}
                className={cn("text-xl h-full rounded-xl hover:bg-primary-dark hover:text-black transform transition-all duration-300", className)}
                onClick={() => {
                    router.push(navigationPath);
                }}
        >
            {title}
        </Button>
    )
}