import Image from "next/image"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"
import Link from "next/link"

export const ActivateSection = () => {
    return (
        <section className="flex z-50  lg:flex-row flex-col  ">
            <div className="flex flex-col gap-10  text-white lg:w-[50%] lg:p-32 md:w-[100%] md:p-10 p-4 z-50">
                <h3 className={cn("lg:text-4xl md:text-[36px] text-[24px] md:text-left text-center  font-semibold", primary_font.className)}>
                    Ready To have Your VoiceFirst <br /> agents That Help You ?
                </h3>
                <p className={cn("md:text-[25px] opacity-80 w-[90%] m-auto md:m-0 lg:leading-[25.2px] md:text-justify text-center   text-[16px] ", secondary_jakarta.className)}>
                    Have questions or need more info? Contact us about our innovative Voice AI solutions.
                </p>
                <Link href="/submit" className={cn(buttonVariants(),
                    " m-auto md:m-0 rounded-full md:px-16 md:py-8 px-12 py-4 text-2xl",
                    " shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                    " whitespace-nowrap border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                    " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                    "bg-transparent w-fit", primary_font.className)}>
                    <span className="
text-transparent !bg-clip-text text-[20px] md:text-[24px] font-extrabold
[background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] [-webkit-background-clip:text] 
                      [-webkit-text-fill-color:transparent]
                ">Enable VoiceFirstAI</span>
                </Link>
            </div>
            <div className="lg:w-[50%] md:w-[100%]">
                <Image src="/activate.png" alt="activate" width={1000} height={800} />
            </div>
        </section>
    )

}
