'use client'

import React, {useState} from "react";
import GridDistortion from "@/blocks/Backgrounds/GridDistortion/GridDistortion";
import {Input} from "@/components/ui/input";
import 'react-international-phone/style.css';
import {PhoneInput} from "@/components/ui/phone-input";
import {Button} from "@/components/ui/button";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import {TypographyH3} from "@/components/common/text/Typography";
import {addDoc, collection} from "firebase/firestore";
import {db} from "@/firebase";
import {Textarea} from "@/components/ui/textarea";

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


export default function OrderPage() {
    const [phone, setPhone] = useState<string>('');
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
            <div className={"flex flex-col justify-center items-center gap-5 bg-surface-light dark:bg-surface-dark z-[100] rounded-3xl p-8  opacity-95"}>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    <TypographyH3 className={"text-5xl font-mono dark:text-primary-dark"}>
                        Join Our Community!
                    </TypographyH3>
                </FadeContent>
                <div className={"flex justify-center items-center gap-6 w-[468px] px-4"}>
                    <div className={"flex flex-col justify-center items-center gap-3"}>
                        <Input type="email" placeholder="First Name"
                               className={"w-full rounded-xl border dark:border-border-primary-dark dark:bg-input-dark"}/>
                        <Input type="text" placeholder="Last Name"
                               className={"w-full rounded-xl border dark:border-border-primary-dark dark:bg-input-dark"}/>
                        <Input type="text" placeholder="Email"
                               className={"w-full rounded-xl border dark:border-border-primary-dark dark:bg-input-dark"}/>
                        <Input type="text" placeholder="Company Name(optional)"
                               className={"w-full rounded-xl border dark:border-border-primary-dark dark:bg-input-dark"}/>
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
                                    className={"w-28 h-12 text-xl rounded-xl bg-primary-light dark:bg-primary-dark text-black font-bold hover:cursor-pointer hover:scale-105 mr-2 transition-transform duration-300 ease-out"}
                                    onClick={() => {
                                        addContactInformation();
                                    }}>
                                    Confirm
                                </Button>
                            </FadeContent>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
