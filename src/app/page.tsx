'use client'

import {BackgroundRippleEffect} from "@/components/ui/background-ripple-effect";
import React from "react";
import {LandingHero} from "@/components/page/landing/LandingHero";
import {LandingImageGallery} from "@/components/page/landing/LandingImageGallery";
import {ClientInfiniteScroll} from "@/components/page/landing/ClientsInfiniteScroll";
import {NotWithUsSection} from "@/components/page/landing/NotWithUs";

export default function LandingPage() {
    return (
        <>
            <div className={"relative w-full h-[800px] overflow-hidden"}>
                <BackgroundRippleEffect rows={20} cellSize={100} className={"opacity-15 shadow-2xl"}/>
                <LandingHero/>
            </div>

            <div className={"relative w-full h-[600px] px-44"}>
                <LandingImageGallery/>
            </div>
            <ClientInfiniteScroll/>
            <NotWithUsSection/>
        </>
    );
}
