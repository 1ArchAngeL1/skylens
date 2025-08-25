'use client'

import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {FloatingMasterBar} from "@/components/common/navbar/FloatingMasterBar";
import FloatingMasterBarWrapper from "@/components/common/navbar/FloatingMasterBarWrapper";
import BodyContent from "@/components/BodyContent";
import DarkVeil from "@/blocks/Backgrounds/DarkVeil/DarkVeil";
import {SparklesCore} from "@/components/ui/sparkles";

export default function LandingPage() {
    return (
        <div className={"flex flex-col flex-1 w-full dark:bg-dark-grey-gradient"}>
            {/*<div className={"absolute w-full h-full"}>*/}
            {/*    <DarkVeil speed={0.05} hueShift={57} warpAmount={5}/>*/}
            {/*</div>*/}
            <Header>
                <FloatingMasterBarWrapper/>
            </Header>
            {/*<div className={"absolute w-[600px] h-[900px] top-10 right-0 opacity-50 blur-sm"}>*/}
            {/*    <Image*/}
            {/*        src="/landing/mother_geo.jpeg"*/}
            {/*        alt="dw"*/}
            {/*        fill*/}
            {/*        className="object-fill"*/}
            {/*    />*/}
            {/*</div>*/}

            <div className={"absolute w-full h-full top-0 opacity-20 blur-sm"}>
                <DarkVeil hueShift={331} speed={0.1} />
            </div>

            <BodyContent className={"flex flex-col h-[1200px] overflow-hidden items-center"}>
                {/*<div className={"w-full h-auto flex justify-center items-center"}>*/}
                {/*    <Masonry*/}
                {/*        items={items}*/}
                {/*        ease="power3.out"*/}
                {/*        duration={0.6}*/}
                {/*        stagger={0.05}*/}
                {/*        animateFrom="bottom"*/}
                {/*        scaleOnHover={true}*/}
                {/*        hoverScale={0.95}*/}
                {/*        blurToFocus={true}*/}
                {/*        colorShiftOnHover={false}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<MagicBento*/}
                {/*    textAutoHide={true}*/}
                {/*    enableStars={true}*/}
                {/*    enableSpotlight={true}*/}
                {/*    enableBorderGlow={true}*/}
                {/*    enableTilt={true}*/}
                {/*    enableMagnetism={true}*/}
                {/*    clickEffect={true}*/}
                {/*    spotlightRadius={300}*/}
                {/*    particleCount={12}*/}
                {/*    glowColor="132, 0, 255"*/}
                {/*/>*/}

            </BodyContent>
            <Footer>

            </Footer>
        </div>
    );
}
