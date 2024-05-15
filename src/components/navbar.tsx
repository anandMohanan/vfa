import Link from "next/link";
import {
    Cable,
    CableIcon,
    CircleUser,
    Menu,
    Package2,
    Search,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = async () => {
    return (
        <nav className=" z-100 top-0 flex h-16 items-center gap-4 px-4 md:px-6 lg:mt-6 lg:mb-6 ">
            <div className="flex md:w-full items-center justify-between ">
                <div className="hidden lg:flex gap-3 lg:flex-4">
                    <Link href={"/"} className="flex text-lg text-white font-semibold md:text-base">
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.06667 3.40003C5.06667 4.79915 3.93245 5.93337 2.53333 5.93337C1.13421 5.93337 0 4.79915 0 3.40003C0 2.00091 1.13421 0.866699 2.53333 0.866699C3.93245 0.866699 5.06667 2.00091 5.06667 3.40003Z" fill="white" />
                            <path d="M7.60011 12.2667C7.60011 13.6659 6.4659 14.8001 5.06678 14.8001C3.66766 14.8001 2.53345 13.6659 2.53345 12.2667C2.53345 10.8676 3.66766 9.7334 5.06678 9.7334C6.4659 9.7334 7.60011 10.8676 7.60011 12.2667Z" fill="white" />
                            <circle cx="11.4" cy="21.1334" r="2.53333" fill="white" />
                            <circle cx="20.2667" cy="3.40003" r="2.53333" fill="white" />
                            <circle cx="17.7333" cy="12.2667" r="2.53333" fill="white" />
                        </svg>
                        oicefirst ai
                    </Link>
                    <div className="w-10 opacity-0 "></div>
                </div>
                <div className="hidden lg:flex m-auto   lg:gap-x-6">
                    <Link
                        href={``}
                        className="text-white lg:ml-3 transition-colors hover:text-cornflowerblue-400"
                    >
                        Docs
                    </Link>
                    <Link
                        href={``}
                        className="text-white transition-colors hover:text-cornflowerblue-400"
                    >
                        Integration
                    </Link>
                    <Link
                        href="/"
                        className="text-white transition-colors hover:text-cornflowerblue-400"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/"
                        className="text-white transition-colors hover:text-cornflowerblue-400"
                    >
                        Case Study
                    </Link>
                    <Link
                        href="/"
                        className="text-white transition-colors hover:text-cornflowerblue-400"
                    >
                        Blog
                    </Link>
                </div>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className=" shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Cable className="h-6 w-6" />
                            <span className="sr-only">Voicefirst Ai</span>
                        </Link>
                        <Link
                            href={``}
                            className="text-white hover:cornflowerblue-400"
                        >
                            Docs
                        </Link>
                        <Link
                            href={``}
                            className="text-white hover:cornflowerblue-400 "
                        >
                            Integration
                        </Link>
                        <Link
                            href="/"
                            className="text-white hover:cornflowerblue-400 "
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/"
                            className="text-white hover:cornflowerblue-400 "
                        >
                            Case studies
                        </Link>
                        <Link
                            href="/"
                            className="text-white hover:cornflowerblue-400 "
                        >
                            Blog
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full md:w-auto justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <Button className=" 
                shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.61)]
                bg-gray-100
                    border-[1px] border-solid border-cornflowerblue-300 hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid 
                    hover:border-cornflowerblue-600
                    ">
                    Try Demo </Button>


            </div>
        </nav>
    );
    // [border-image:linear-gradient(97.31deg, #94A5FF 3.97%, #7C5ED2 58.6%, #203189 99.91%)]
};

