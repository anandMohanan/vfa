import { LineSvg } from "@/lib/icons"
import { Button, buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { cn } from "@/lib/utils"

import CustomerCallFlow from '../../public/flow-6.json'
import CustomerChatFlow from '../../public/customer-chat-flow.json'

import { LottieAnimation } from "./animation"
import Link from "next/link"

export const TopFeaturesSection = () => {
    return (

        <section className="top_section w-full ">
            <div className="relative hidden md:flex items-center justify-center  m-auto p-2">
                <div className="hidden lg:block lg:absolute top-0 z-10">
                    <LineSvg className="" />
                </div>
                <Badge
                    variant={"outline"}
                    className={cn("text-white hidden md:block z-20 text-sm md:text-[20px] p-2 px-8",
                        "bg-black border-[0.3px] font-[700px] ",
                        "lgxl:p-4 lg2xl:p-6 lg3xl:p-8 lgxl:px-16 lg2xl:px-20 lg3xl:px-24",
                        "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
                        " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                        "hover:border-cornflowerblue-600", secondary_jakarta.className)}>
                    Your 24/7  AI Agents
                </Badge>
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center  ">
                <div className="flex flex-col  items-center lg:w-1/2  z-50  lgxl:p-0 md:items-start gap-5 md:p-6 mb-10">
                    <Badge
                        className={cn("text-white w-fit text-[16px] text-center m-auto lg:m-0 lg:text-center md:text-[20px] ",
                            "bg-black border-[0.3px]",
                            "lgxl:p-4 lg2xl:p-6 lg3xl:p-8 lgxl:px-16 lg2xl:px-20 lg3xl:px-24",
                            "text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                            "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
                            "shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)]", secondary_jakarta.className)}
                    > Customer Support</Badge>
                    <h3 className={cn("text-white  text-[24px]  md:text-[35.94px] font-[500px]",
                        "text-center lg:text-left  lgxl:text-[50px] lg2xl:text-[80px] lg3xl:text-[120px]", secondary_jakarta.className)}>
                        Instant Support, No {" "}
                        <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Wait {" "}</span>
                        Times
                    </h3>
                    <p className={
                        cn("text-white lg:w-[32rem] w-[20rem] md:w-[25rem] m-auto lg:m-0 tracking-tight font-thin opacity-90  lg:text-left text-center md:text-[1.25rem]",
                            "text-[1rem] leading-[27px] lgxl:leading-[32px] lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ", secondary_jakarta.className)}>
                        Long wait times? Missed calls? Not on our watch.VoiceFirst Agents ensures every customer
                        feels heard and helped,
                        right when they need it.
                    </p>
                    {
                        // <Button className={cn("rounded-xl w-fit md:px-16 md:py-8 px-8 py-4 md:text-[24px] text-[20px]",
                        //     "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                        //     " overflow-hidden whitespace-nowrap",
                        //     "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                        //     " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                        //     "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                        //     "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                        //     primary_font.className
                        // )}>
                        // Customer First</Button>
                    }
                    <Link href={"/submit"} className={cn(buttonVariants(), "rounded-none font-bold m-auto lg:m-0",
                        "md:p-6 md:text-[24px] text-[16px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
                        "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                        "lgxl:p-8 lg2xl:p-10 lg3xl:p-12", primary_font.className)}>
                        Customer First</Link>
                </div>
                <div className="min-w-[30%]  h-full  p-10 ">
                    <LottieAnimation ani={CustomerCallFlow} />
                </div>
            </div>
            <div className="flex lg:flex-row-reverse flex-col md:gap-34 lg:gap-56 justify-between items-center  md:p-36 mt-5 lg:mt-0 ">
                <div className="flex flex-col  items-center lg:w-1/2  z-50  lgxl:p-0 md:items-start gap-5 md:p-6 mb-10">
                    <Badge
                        className={cn("text-white w-fit text-[16px] text-center m-auto lg:m-0 lg:text-center md:text-[20px]",
                            "bg-black border-[0.3px]",
                            "lgxl:p-4 lg2xl:p-6 lg3xl:p-8 lgxl:px-16 lg2xl:px-20 lg3xl:px-24",
                            "text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                            "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
                            "shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)]", secondary_jakarta.className)}
                    > Agent-driven Outreach</Badge>
                    <h3 className={cn("text-white  text-[24px]  md:text-[35.94px] font-[500px]",
                        "text-center lg:text-left  lgxl:text-[50px] lg2xl:text-[80px] lg3xl:text-[120px]", secondary_jakarta.className)}>
                        Accelerate Sales With {" "}
                        <span className="
                        text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]
                        [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Proactive {" "}</span>
                        Outreach
                    </h3>
                    <p className={
                        cn("text-white lg:w-[32rem] w-[20rem] md:w-[25rem] m-auto lg:m-0 tracking-tight font-thin opacity-90  lg:text-left text-center md:text-[1.25rem]",
                            "text-[1rem] leading-[27px] lgxl:leading-[32px] lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ", secondary_jakarta.className)}>
                        Proactively engage and follow up on leads, driving sales with  timely  and relevant conversations initiated by our AI.
                    </p>
                    {
                        // <Button className={cn("rounded-xl w-fit md:px-16 md:py-8 px-8 py-4 md:text-[24px] text-[20px]",
                        //     "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                        //     " overflow-hidden whitespace-nowrap",
                        //     "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                        //     " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                        //     "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                        //     "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                        //     primary_font.className
                        // )}>
                        //     Increase your sales
                        // </Button>
                    }
                    <Link href="/submit" className={cn(buttonVariants(), "rounded-none font-bold m-auto lg:m-0",
                        "md:p-6 md:text-[24px] text-[16px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
                        "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                        "lgxl:p-8 lg2xl:p-10 lg3xl:p-12", primary_font.className)}>
                        Increase your sales</Link>
                </div>
                <div className="min-w-[30%] h-full p-10">
                    <LottieAnimation ani={CustomerChatFlow} />
                </div>
            </div>
        </section >
    )
}


