"use client"
import { LineSvg } from "@/lib/icons"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { primary_font } from "@/lib/font"
import { cn } from "@/lib/utils"

import CustomerCallFlow from '../../public/customer-call-flow.json'
import CustomerChatFlow from '../../public/customer-chat-flow.json'
import { LottieAnimation } from "./animation"
import { Cursor } from "./ui/cursor"
import { useState } from "react"

export const TopFeaturesSection = () => {
    const [isActive, setIsActive] = useState(false)
    return (

        <section data-scroll-container className="top_section w-full p-10 ">
            <div className="relative hidden md:flex items-center justify-center m-auto p-8">
                <Badge
                    variant={"outline"}
                    className={cn("text-white hidden md:block absolute z-20 text-sm md:text-lg p-2 px-8",
                        "bg-black border-[0.3px] ",
                        " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                        "hover:border-cornflowerblue-600", primary_font.className)}>
                    Out Top 3 Features
                </Badge>
                <div className="hidden lg:block lg:absolute top-0 z-10">
                    <LineSvg className=" " />
                </div>
            </div>
            <div data-scroll-speed className="flex lg:flex-row flex-col lg:gap-56 justify-evenly items-center lg:p-36 md:p-10 ">
                <div data-scroll data-scroll-speed="0.3" onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="flex flex-col items-center z-50 md:items-start gap-5 md:p-10 mb-10">
                    <Badge
                        className={cn("text-white w-fit text-sm text-center md:text-lg p-2 px-8",
                            "bg-black border-[0.3px]",
                            " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                            "hover:border-cornflowerblue-600", primary_font.className)}
                    > Customer Support</Badge>
                    <h3 className={cn("text-white font-light  text-xl  md:text-4xl lg:text-5xl ", primary_font.className)}>
                        Instant Support, No {" "}
                        <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Wait {" "}</span>
                        Times
                    </h3>
                    <p className={
                        cn("text-white tracking-tight md:text-left text-center md:text-xl text-sm leading-7 ", primary_font.className)}>
                        Long wait times? Missed calls? Not on our watch. VoiceFirst AI <br className="hidden lg:block" />  ensures every
                        customer feels heard and helped,  right when <br className="hidden lg:block" />  they need it. </p>
                    <Button className={cn("rounded-xl w-fit md:px-16 md:py-8 px-8 py-4 md:text-2xl text-lg",
                        "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                        " overflow-hidden whitespace-nowrap",
                        "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                        " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                        "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                        "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                        primary_font.className
                    )}>
                        Customer First</Button>
                </div>
                <div>
                    <LottieAnimation ani={CustomerCallFlow} />
                </div>
            </div>
            <div className="flex lg:flex-row-reverse flex-col md:gap-56 gap-14 justify-evenly mt-8 md:mt-0 md:p-10">
                <div onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="flex flex-col items-center md:items-start gap-5 z-50">
                    <Badge
                        className={cn("text-white w-fit text-sm md:text-lg p-2 px-8",
                            "bg-black border-[0.3px]",
                            " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                            "hover:border-cornflowerblue-600", primary_font.className)}
                    >
                        Operation Automation
                    </Badge>
                    <h3 className={cn("text-white font-light  text-xl md:text-left  md:text-4xl lg:text-5xl text-center ", primary_font.className)}>
                        Accelerate Sales With {" "}
                        <span className="
                        text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]
                        [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Proactive {" "}</span>
                        Outreach
                    </h3>
                    <p className={cn("text-white tracking-tight md:text-left text-center md:text-xl text-sm leading-7 [&:not(:first-child)]:mt-6", primary_font.className)}>
                        Proactively engage and follow up on leads, driving sales with <br className="hidden lg:block" /> timely  and relevant conversations initiated by our AI.
                    </p>
                    <Button className={cn("rounded-xl w-fit md:px-16 md:py-8 px-8 py-4 md:text-2xl text-lg",
                        "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                        " overflow-hidden whitespace-nowrap",
                        "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                        " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                        "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                        "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                        primary_font.className
                    )}>
                        Increase your sales
                    </Button>
                </div>
                <div>
                    <LottieAnimation ani={CustomerChatFlow} />
                </div>
                <Cursor isActive={isActive} />
            </div>
        </section>
    )
}

