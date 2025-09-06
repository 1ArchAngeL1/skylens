'use client'

import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {PhoneInput} from "@/components/ui/phone-input";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase";
import {TypographyH3} from "@/components/common/text/Typography";
import {OrderInput} from "@/components/page/order/OrderInput";


type contacftInformation = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    phoneNumber: string;
}

async function addContactInformation(info?: contacftInformation) {
    try {
        await addDoc(collection(db, "requests"), {
            firstName: "yleo",
            lastName: "yleo",
            email: "yleo",
            company: "yleo",
            phoneNumber: "yleo",
            createdAt: new Date(),
        });
        console.log("User added!");
    } catch (error) {
        console.error("Error adding user: ", error);
    }
}

type OrderFormProps = {
    className?: string;
}

export const OrderModalForm: React.FC<OrderFormProps> = ({className}) => {
    const [phone, setPhone] = useState<string>('');

    return <div className={"flex flex-col justify-center items-center gap-6 w-auto px-4 opacity-100"}>
        <div className={"flex flex-col justify-center items-center gap-3"}>
            <OrderInput type={"text"} placeHolder="first Name"/>
            <OrderInput type={"text"} placeHolder="Last Name"/>
            <OrderInput type={"email"} placeHolder="Email"/>
            <OrderInput type={"text"} placeHolder="Company name(optional)"/>
            <Textarea
                className={"w-full rounded-2xl border dark:border-border-primary-dark dark:bg-input-dark " +
                    "focus:border-primary transition-transform duration-300"}
                placeholder={"description"}
            />
            <div className={"w-full flex justify-between gap-3 p-0"}>
                <PhoneInput defaultCountry={"GE"}
                            className={"w-full [&_*]:dark:border-border-primary-dark [&_*]:dark:bg-input-dark"}/>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <Button
                        className={"w-28 h-10 text-xl rounded-2xl bg-primary-light dark:bg-primary-dark text-black font-bold hover:cursor-pointer hover:scale-105 mr-2 transition-transform duration-300 ease-out"}
                        onClick={() => {
                            addContactInformation();
                        }}>
                        Confirm
                    </Button>
                </FadeContent>
            </div>
        </div>
    </div>
}