import React from "react";
import GridDistortion from "@/blocks/Backgrounds/GridDistortion/GridDistortion";
import 'react-international-phone/style.css';
import {OrderForm} from "@/components/page/order/OrderForm";

export default function OrderPage() {
    return (
        <>
            <div className={"absolute inset-0"}>
                <GridDistortion
                    imageSrc="/wallpaper/wallpaper.png"
                    grid={24}
                    mouse={0.1}
                    strength={0.10}
                    relaxation={0.9}
                />
            </div>
            <div
                className={"flex flex-col justify-center items-center gap-3 bg-surface-light dark:bg-surface-dark z-[100] rounded-3xl p-8 opacity-95 my-40"}>
                <OrderForm/>
            </div>
        </>
    );
}
