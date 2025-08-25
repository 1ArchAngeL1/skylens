'use client';

import {useEffect, useState} from 'react';
import {FloatingMasterBar} from "@/components/common/navbar/FloatingMasterBar";

export default function FloatingMasterBarWrapper() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // trigger after scrolling 10px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <FloatingMasterBar scrolled={scrolled} />;
}
