import React, {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface BodyContentProps {
    children?: ReactNode;
    className?: string;
}

const BodyContent: React.FC<BodyContentProps> = ({children, className}) => {
    return (
        <main
            className={cn('h-full w-full', className)}>
            {children}
        </main>
    );
};

export default BodyContent;