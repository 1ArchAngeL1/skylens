import type {Metadata} from "next";
import "./global.scss";
import React from "react";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
    title: "skylens",
    description: "skylens",
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`dark ${inter.className}`}
            style={{colorScheme: "dark"}}
            suppressHydrationWarning={true}
        >
        <body className={'min-h-screen flex flex-col'}>
        {/*<MyThemeProvider>*/}
        {children}
        {/*</MyThemeProvider>*/}
        </body>
        </html>
    );
}
