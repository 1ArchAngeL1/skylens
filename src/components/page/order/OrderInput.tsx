import {Input} from "@/components/ui/input";
import React from "react";
import {cn} from "@/lib/utils";

type OrderInputProps = {
    className?: string;
    placeHolder? : string
    type?: "text" | "email" | "password"
    value?: string
    onChange?: (value: string) => void

}

export const OrderInput: React.FC<OrderInputProps> = ({className, placeHolder, type}) => {

    return <Input type={type}
                  placeholder={placeHolder}
                  className={cn("w-full rounded-2xl border dark:border-border-primary-dark" +
                      " dark:bg-input-dark hover:scale-[1.01] focus:border-primary transition-transform duration-300", className)}
    />

}