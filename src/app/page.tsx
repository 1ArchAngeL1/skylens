'use client'

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import BodyContent from "@/components/BodyContent";
import {BackgroundRippleEffect} from "@/components/ui/background-ripple-effect";
import React from "react";
import {AppHeader} from "@/components/common/header/AppHeader";
import {LandingHero} from "@/components/page/landing/LandingHero";
import {ClientInfiniteScroll} from "@/components/page/landing/ClientsInfiniteScroll";
import {AppFooter} from "@/components/common/footer/AppFooter";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className={"relative flex w-full h-full flex-col flex-1"}>
            <Image alt={"dwad"} width={600} height={600} src={"/drones/display_drone.png"}
                   className={"absolute top-0 right-10 opacity-50"}/>
            <Header className={"rounded-b-[16px] shadow-2xl border-b dark:border-border-primary-dark"}>
                <AppHeader/>
            </Header>
            <BodyContent className={"relative w-full h-full flex flex-col gap-4 items-center z-10"}>
                <BackgroundRippleEffect rows={5} cellSize={92} className={"opacity-15"}/>
                <LandingHero/>
                <ClientInfiniteScroll/>
            </BodyContent>
            <Footer className={"rounded-t-[16px] shadow-2xl border-t dark:border-border-primary-dark"}>
                <AppFooter/>
            </Footer>
        </div>
    );
}
