import {NavigationButton} from "@/components/common/navbar/NavigationButton";
import React from "react";

import {usePathname} from "next/navigation";

const masterBarRoutes = [
    {
        title: "Home",
        navigationPath: "/"
    },
    {
        title: "About",
        navigationPath: "/about"
    },
    {
        title: "Gallery",
        navigationPath: "/gallery"
    },
    {
        title: "Help",
        navigationPath: "/help"
    }
]

type NavigationPanel = {} & React.HTMLAttributes<HTMLElement>;

export const NavigationPanel: React.FC = () => {
    const pathName = usePathname();

    return (
        <div className={"flex justify-between items-center gap-1"}>
            {
                masterBarRoutes.map((btn, i) => (
                    <NavigationButton title={btn.title}
                                      navigationPath={btn.navigationPath}
                                      key={i}
                                      className={pathName == btn.navigationPath ? "dark:bg-primary-dark text-black" : ""}
                    />
                ))
            }
        </div>
    )

}