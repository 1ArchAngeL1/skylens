'use client'

import {Textarea} from "@/components/ui/textarea";
import {PhoneInput} from "@/components/ui/phone-input";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import {Button} from "@/components/ui/button";
import React from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase";
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


type LandingOrderFormProps = {
    className?: string;
}

export const LandingOrderForm: React.FC<LandingOrderFormProps> = ({className}) => {
    return <div className={"flex flex-col w-full h-full justify-center items-center gap-6 p-2 bg-transparent z-[200]"}>
        <div className={"flex w-full h-full items-center gap-3"}>
            <div className={"flex flex-col w-full h-full justify-center items-center gap-3"}>
                <OrderInput type={"text"} placeHolder="first Name" className={"h-14"}/>
                <OrderInput type={"text"} placeHolder="Last Name" className={"h-14"}/>
                <OrderInput type={"email"} placeHolder="Email" className={"h-14"}/>
                <OrderInput type={"text"} placeHolder="Company name(optional)" className={"h-14"}/>
                <PhoneInput defaultCountry={"GE"}
                            className={"w-full [&_*]:dark:border-border-primary-dark [&_*]:dark:bg-input-dark"}/>
            </div>
            <div className={"flex flex-col w-full h-full justify-center items-center gap-3"}>
                <Textarea
                    className={"w-full h-full rounded-2xl border dark:border-border-primary-dark dark:bg-input-dark " +
                        "focus:border-primary transition-transform duration-300"}
                    placeholder={"description"}
                />
            </div>
        </div>
        <div className={"w-full flex justify-end gap-3 p-0"}>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <Button
                    className={"w-28 h-14 text-xl rounded-2xl bg-primary-light dark:bg-primary-dark text-black font-bold hover:cursor-pointer hover:scale-105 mr-2 transition-transform duration-300 ease-out"}
                    onClick={() => {
                        addContactInformation();
                    }}>
                    Confirm
                </Button>
            </FadeContent>
        </div>
    </div>
}