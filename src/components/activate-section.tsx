"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { useState } from "react"
import { Cursor } from "./ui/cursor"

export const ActivateSection = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <section  className="flex z-50  lg:flex-row flex-col  ">
            <div onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="flex flex-col gap-10  text-white md:w-[50%] md:p-32 p-4 z-50">
                <h3 className={cn("lg:text-4xl md:text-4xl text-2xl font-semibold", primary_font.className)}>
                    Ready To have Your Automation <br /> Assistant That Help You ?
                </h3>
                <p className={cn("tracking-tight md:text-2xl text-lg font-light", secondary_jakarta.className)}>
                    If you have any questions or need further information about our
                    innovative voice AI products and features, please don&apos;t hesitate to get in touch with us.
                </p>
                <Button className={cn("rounded-full md:px-16 md:py-8 px-12 py-4 text-2xl",
                    " shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                    " whitespace-nowrap border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                    " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                    "bg-transparent w-fit", primary_font.className)}>
                    <span className="
text-transparent !bg-clip-text 
[background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] [-webkit-background-clip:text] 
                      [-webkit-text-fill-color:transparent]
                ">Activate VoiceFirstAI</span>
                </Button>
            </div>
            <Cursor isActive={isActive} />
            <div className="md:w-[50%]">
                <Image src="/activate.png" alt="activate" width={1000} height={800} />
            </div>
        </section>
    )

}
