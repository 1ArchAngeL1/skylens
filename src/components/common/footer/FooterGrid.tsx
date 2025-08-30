import {cn} from "@/lib/utils";
import {TextLogo} from "@/components/TextLogo";
import React from "react";
import Link from "next/link";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";

type FooterGridProps = {
    className?: string;
};

export const FooterGrid: React.FC<FooterGridProps> = ({className}) => {
    return (
        <div
            className={cn(
                "w-full p-8 mx-auto grid grid-cols-5 gap-2",
                className
            )}
        >
            <div className={"flex flex-col justify-start items-center w-52 h-52 gap-4"}>
                <TextLogo className={"text-3xl"}/>
                <CircularText
                    text=" ც ი ს თ ვ ა ლ ი * T S I S T V A L I *"
                    onHover="goBonkers"
                    spinDuration={20}
                    className=""
                />
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
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
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
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
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
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
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2">
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
        </div>
    );
};