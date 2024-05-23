

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { primary_font, secondary_jakarta } from "@/lib/font";

export const Navbar = () => {
    return (
        <nav className={cn(" z-100 top-0 flex h-[10vh] items-center gap-4 px-4 md:px-6 ", secondary_jakarta.className)}>
            <div className="flex  items-center justify-between ">
                <div className="hidden lg:flex  lg:flex-4">
                    <Link href={"/"} className="flex text-xl text-white font-semibold md:text-base items-center  align-middle">
                        <svg width="27.8" height="24.8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.06667 3.40003C5.06667 4.79915 3.93245 5.93337 2.53333 5.93337C1.13421 5.93337 0 4.79915 0 3.40003C0 2.00091 1.13421 0.866699 2.53333 0.866699C3.93245 0.866699 5.06667 2.00091 5.06667 3.40003Z" fill="white" />
                            <path d="M7.60011 12.2667C7.60011 13.6659 6.4659 14.8001 5.06678 14.8001C3.66766 14.8001 2.53345 13.6659 2.53345 12.2667C2.53345 10.8676 3.66766 9.7334 5.06678 9.7334C6.4659 9.7334 7.60011 10.8676 7.60011 12.2667Z" fill="white" />
                            <circle cx="11.4" cy="21.1334" r="2.53333" fill="white" />
                            <circle cx="20.2667" cy="3.40003" r="2.53333" fill="white" />
                            <circle cx="17.7333" cy="12.2667" r="2.53333" fill="white" />
                        </svg>
                        <span className="text-[30.4px] font-[600]">
                            oiceFirst Ai
                        </span>
                    </Link>
                    <div className="w-10 opacity-0 "></div>
                </div>
            </div>
            <div>
                <Link href={"/"} className="flex lg:hidden  text-sm text-white font-semibold md:text-base">
                    <svg width="20" height="18" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.06667 3.40003C5.06667 4.79915 3.93245 5.93337 2.53333 5.93337C1.13421 5.93337 0 4.79915 0 3.40003C0 2.00091 1.13421 0.866699 2.53333 0.866699C3.93245 0.866699 5.06667 2.00091 5.06667 3.40003Z" fill="white" />
                        <path d="M7.60011 12.2667C7.60011 13.6659 6.4659 14.8001 5.06678 14.8001C3.66766 14.8001 2.53345 13.6659 2.53345 12.2667C2.53345 10.8676 3.66766 9.7334 5.06678 9.7334C6.4659 9.7334 7.60011 10.8676 7.60011 12.2667Z" fill="white" />
                        <circle cx="11.4" cy="21.1334" r="2.53333" fill="white" />
                        <circle cx="20.2667" cy="3.40003" r="2.53333" fill="white" />
                        <circle cx="17.7333" cy="12.2667" r="2.53333" fill="white" />
                    </svg>
                    oiceFirst Ai
                </Link>
            </div>
            <div className="flex w-full md:w-auto justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <Button variant={"default"} className=" 
                shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.61)]
                md:px-6 md:py-6
                px-4 py-4
                text-md
                    border-[1px] border-solid border-cornflowerblue-300
                    hover:bg-cornflowerblue-300 hover:box-border hover:border-[1px] hover:border-solid 
                    hover:border-cornflowerblue-600 text-xl
                hover:shadow-[0px_0px_30px_rgba(82,_79,_255,_0.61)]
                    ">
                    Try Demo </Button>


            </div>
        </nav>
    );
    // [border-image:linear-gradient(97.31deg, #94A5FF 3.97%, #7C5ED2 58.6%, #203189 99.91%)]
};

// <div className="hidden lg:flex m-auto text-xl  lg:gap-x-6"> <Link href={``} className="text-white lg:ml-3 transition-colors hover:text-cornflowerblue-400 hover:bg-gradient-to-r hover:from-[#698aff] hover:to-[#3f5399] hover:text-transparent hover:bg-clip-text" > Docs </Link> <Link href={``} className="text-white lg:ml-3 transition-colors hover:text-cornflowerblue-400 hover:bg-gradient-to-r hover:from-[#698aff] hover:to-[#3f5399] hover:text-transparent hover:bg-clip-text" > Integration </Link>
//     <Link
//         href="/"
//         className="text-white lg:ml-3 transition-colors hover:text-cornflowerblue-400 hover:bg-gradient-to-r hover:from-[#698aff] hover:to-[#3f5399] hover:text-transparent hover:bg-clip-text"
//     >
//         Pricing
//     </Link>
//     <Link
//         href="/"
//         className="text-white lg:ml-3 transition-colors hover:text-cornflowerblue-400 hover:bg-gradient-to-r hover:from-[#698aff] hover:to-[#3f5399] hover:text-transparent hover:bg-clip-text"
//     >
//         Case Study
//     </Link>
//     <Link
//         href="/"
//         className="text-white lg:ml-3 transition-colors hover:text-cornflowerblue-400 hover:bg-gradient-to-r hover:from-[#698aff] hover:to-[#3f5399] hover:text-transparent hover:bg-clip-text"
//     >
//         Blog
//     </Link>
// </div>
