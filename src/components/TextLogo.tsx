import * as React from "react";

type TextLogoProps = {
    className?: string;
} & React.HTMLAttributes<HTMLElement>

export const TextLogo: React.FC<TextLogoProps> = ({className, children}) => {
    return (
        <div className={className}>
        </div>
    );
};