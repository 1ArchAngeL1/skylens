import Image from "next/image";
import React from "react";


type LogoImageProps = {
    className?: string;
}

export const LogoImage : React.FC<LogoImageProps> = props => {

    return (
        <Image
            src="/logo.png"
            alt="logo"
            height="60"
            width="60"
            className="inline object-cover p-0 m-0"
        />
    )
}