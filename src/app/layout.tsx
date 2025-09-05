import type {Metadata} from "next";
import "./global.scss";
import React from "react";
import {Inter} from 'next/font/google';
import MyThemeProvider from "@/components/common/provider/MyThemeProvider";
import {Header} from "@/components/Header";
import {AppHeader} from "@/components/common/header/AppHeader";
import BodyContent from "@/components/BodyContent";
import {Footer} from "@/components/Footer";
import {AppFooter} from "@/components/common/footer/AppFooter";

export const metadata: Metadata = {
    title: "skylens",
    description: "skylens",
};

const inter = Inter({subsets: ['latin']});

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`dark ${inter.className}`}
            style={{colorScheme: "dark"}}
            suppressHydrationWarning={true}
        >
        <body className={'dark min-h-screen flex flex-col overflow-x-hidden'}>
        <MyThemeProvider>
            <Header className={"rounded-b-[16px] shadow-2xl border-b dark:border-border-primary-dark"}>
                <AppHeader/>
            </Header>
            <BodyContent className={"relative flex-1 flex flex-col justify-center items-center z-10"}>
                {children}
            </BodyContent>
            <Footer className={"rounded-t-[16px] shadow-2xl border-t dark:border-border-primary-dark"}>
                <AppFooter/>
            </Footer>
        </MyThemeProvider>
        </body>
        </html>
    );
}
