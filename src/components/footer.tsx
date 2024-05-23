
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { primary_font, secondary_jakarta } from "@/lib/font";
import Link from "next/link";

export const FooterSection = () => {
    return (
        <footer id="footer text-white">
            <section className="container py-20 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-y-8">
                <div className="flex text-xl text-white ">
                    <svg width="27.8" height="24.8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.06667 3.40003C5.06667 4.79915 3.93245 5.93337 2.53333 5.93337C1.13421 5.93337 0 4.79915 0 3.40003C0 2.00091 1.13421 0.866699 2.53333 0.866699C3.93245 0.866699 5.06667 2.00091 5.06667 3.40003Z" fill="white" />
                        <path d="M7.60011 12.2667C7.60011 13.6659 6.4659 14.8001 5.06678 14.8001C3.66766 14.8001 2.53345 13.6659 2.53345 12.2667C2.53345 10.8676 3.66766 9.7334 5.06678 9.7334C6.4659 9.7334 7.60011 10.8676 7.60011 12.2667Z" fill="white" />
                        <circle cx="11.4" cy="21.1334" r="2.53333" fill="white" />
                        <circle cx="20.2667" cy="3.40003" r="2.53333" fill="white" />
                        <circle cx="17.7333" cy="12.2667" r="2.53333" fill="white" />
                    </svg>
                    <span className="md:text-[30.4px] text-[20px] font-[600]">
                        oiceFirst Ai
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Email</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
                        >
                            xyz@voicefirstai.com
                        </a>
                    </div>

                    <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Phone Number</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
                        >
                            +1 123 456 7890
                        </a>
                    </div>
                </div>


                <div className="flex flex-col gap-2 lg:col-start-5 lg:col-span-3 col-span-4">
                    <h3 className={cn("text-3xl text-white mb-8 font-extrabold", primary_font.className)}>Get started with personal AI Manager now </h3>
                    <div className={cn("flex flex-row ", secondary_jakarta.className)}>
                        <Link className={cn(buttonVariants(), "rounded-3xl ")} href={"/submit"}>Try Voicefirst</Link>
                        <Link className={cn(buttonVariants({ variant: "outline" }), "rounded-3xl ml-5")} href="/submit" >Watch Demo</Link>
                    </div>
                </div>
            </section>

        </footer>
    );
};
// <div className="flex flex-col gap-2"> <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Company</h3> <div> <a rel="noreferrer noopener" href="#" className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)} > Blog </a> </div> <div> <a rel="noreferrer noopener" href="#" className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)} > Careers </a>
//     </div>
//
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Pricing
//         </a>
//     </div>
// </div>
//
// <div className="flex flex-col gap-2">
//     <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Resources</h3>
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Documentation
//         </a>
//     </div>
//
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Papers
//         </a>
//     </div>
//
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Presentation
//         </a>
//     </div>
// </div>
