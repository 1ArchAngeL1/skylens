import type {Metadata} from "next";
import "./index.scss";

export const metadata: Metadata = {
    title: "skylence",
    description: "skylence",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`dark`}
            style={{colorScheme: "dark"}}
            suppressHydrationWarning={true}
        >
        <body className={"p-0"}>
        {children}
        </body>
        </html>
    );
}
