'use client'
import {cn} from "@/lib/utils";
import {TextLogo} from "@/components/TextLogo";
import React from "react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import GoogleMap from "@/components/common/footer/GoogleMap";

type FooterGridProps = {
    className?: string;
};

export const FooterGrid: React.FC<FooterGridProps> = ({className}) => {
    return (
        <div
            className={cn(
                "w-full p-8 pb-0 mx-auto grid grid-cols-6 gap-1",
                className
            )}
        >
            <div className="flex flex-col justify-start items-start gap-3">
                <TextLogo className="text-3xl z-10"/>
                <div className={"text text-text-secondary-light dark:text-text-secondary-dark dark:text-gray-300"}>
                    <Separator className={"bg-border-secondary-light dark:bg-border-secondary-dark mb-2"}/>
                    <div className={"text-[16px]"}>
                        <p className="mb-3">
                            32 Petre Kavtaradze Street,<br/>
                            Tbilisi, Georgia
                        </p>
                        <p className="text-sm">Email: contact@urbancare.ge</p>
                        <p className="text-sm">Phone: +995 555 123 456</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 dark:text-primary-dark">Company</h3>
                <ul className="space-y-4">
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Press
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 dark:text-primary-dark">Support</h3>
                <ul className="space-y-4">
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Help Center
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            System Status
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 dark:text-primary-dark">Legal</h3>
                <ul className="space-y-4">
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Cookie Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Security
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 dark:text-primary-dark">Follow Us</h3>
                <ul className="space-y-4">
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Twitter
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white transition">
                            Instagram
                        </Link>
                    </li>
                </ul>
            </div>
            <GoogleMap/>
        </div>
    );
};