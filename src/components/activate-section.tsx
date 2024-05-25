import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { primary_font, secondary_jakarta } from "@/lib/font";
import Link from "next/link";

export const ActivateSection = () => {
    return (
        <section className="z-50 flex  flex-col lg:flex-row  ">
            <div className="z-50 flex flex-col  gap-10 p-4 text-white md:w-[100%] lg:w-[50%] lg:p-20 ">
                <h3
                    className={cn(
                        "text-center text-[20px] font-semibold md:text-[36px] lg:text-left  lg:text-4xl",
                        primary_font.className,
                    )}
                >
                    Ready To have Your VoiceFirst <br /> agents That Help You ?
                </h3>
                <p
                    className={cn(
                        "m-auto w-[90%] text-center text-[16px] opacity-80 md:text-[25px] lg:m-0 lg:text-left   lg:leading-[25.2px] ",
                        secondary_jakarta.className,
                    )}
                >
                    Have questions or need more info? Contact us about our innovative
                    Voice AI solutions.
                </p>
                <Link
                    href="/submit"
                    className={cn(
                        buttonVariants(),
                        " m-auto rounded-full px-12 py-4 text-2xl md:px-16 md:py-8 lg:m-0",
                        " shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                        " whitespace-nowrap border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                        " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                        "w-fit bg-transparent",
                        primary_font.className,
                    )}
                >
                    <span
                        className="
!bg-clip-text text-[20px] font-extrabold text-transparent [-webkit-background-clip:text]
[-webkit-text-fill-color:transparent] [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] 
                      md:text-[24px]
                "
                    >
                        Enable VoiceFirstAI
                    </span>
                </Link>
            </div>
            <div className="md:w-[100%] lg:w-[50%]">
                <Image src="/activate.png" alt="activate" width={1000} height={800} />
            </div>
        </section>
    );
};
