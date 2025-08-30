import type {Metadata} from "next";
import "./global.scss";
import React from "react";
import {Inter} from 'next/font/google';
import MyThemeProvider from "@/components/common/provider/MyThemeProvider";

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
            {children}
        </MyThemeProvider>
        </body>
        </html>
    );
}
