import {NavigationButton} from "@/components/common/navbar/NavigationButton";
import React, {useState} from "react";

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

type NavigationPanelProps = {} & React.HTMLAttributes<HTMLElement>;

export const NavigationPanel: React.FC<NavigationPanelProps> = () => {
    const pathName = usePathname();
    const [hovered, setHovered] = useState<string | null>(null)

    return (
        <div className={"flex justify-between items-center gap-1"}>
            {
                masterBarRoutes.map((btn, i) => {
                        const highlightActive: boolean = pathName === btn.navigationPath && hovered === null;
                        const highlightHover: boolean = hovered === btn.navigationPath;
                        return <NavigationButton title={btn.title}
                                                 navigationPath={btn.navigationPath}
                                                 key={i}
                                                 onMouseEnter={() => setHovered(btn.navigationPath)}
                                                 onMouseLeave={() => setHovered(null)}
                                                 className={(highlightActive || highlightHover) ? ("dark:bg-primary-dark dark:text-black " + (highlightHover ? " scale-105" : "")) : ""}
                        />
                    }
                )
            }
        </div>
    )

}