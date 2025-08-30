'use client'

import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

type NavigationButtonProps = {
    title: string;
    navigationPath: string;
    className?: string;
} & React.ComponentProps<"button">

export const NavigationButton: React.FC<NavigationButtonProps> = ({
                                                                      title,
                                                                      navigationPath,
                                                                      className,
                                                                      ...rest
                                                                  }) => {
    const router = useRouter();
    return (
        <Button
            variant={"ghost"}
            className={cn("select-none text-xl font-bold h-10 rounded-full transform transition-all ease-in-out duration-200", className)}
            onClick={() => {
                router.push(navigationPath);
            }}
            {...rest}
        >
            {title}
        </Button>
    )
}