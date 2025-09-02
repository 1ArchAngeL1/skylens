'use client'

import React from "react";
import GridDistortion from "@/blocks/Backgrounds/GridDistortion/GridDistortion";

export default function OrderPage() {
    return (
        <div className={"relative flex w-full flex-1 flex-col justify-center items-center z-[100]"}>
            <div className={"absolute inset-0"}>
                <GridDistortion
                    imageSrc="/wallpaper/wallpaper.png"
                    grid={20}
                    mouse={0.1}
                    strength={0.15}
                    relaxation={0.9}
                    className="custom-class"
                />
            </div>
            <div className={"w-1/2 h-96 bg-surface-light dark:bg-surface-dark z-[100] rounded-3xl"}></div>
        </div>
    );
}
