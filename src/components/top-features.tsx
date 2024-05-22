import { LineSvg } from "@/lib/icons"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { cn } from "@/lib/utils"

import CustomerCallFlow from '../../public/flow-6.json'
import CustomerChatFlow from '../../public/customer-chat-flow.json'

import { LottieAnimation } from "./animation"

export const TopFeaturesSection =  () => {
    return (

        <section data-scroll-container className="top_section w-full p-10 ">
            <div className="relative hidden md:flex items-center justify-center m-auto p-8">
                <Badge
                    variant={"outline"}
                    className={cn("text-white hidden md:block absolute z-20 text-sm md:text-lg p-2 px-8",
                        "bg-black border-[0.3px] font-[700px] ",
                        " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                        "hover:border-cornflowerblue-600", secondary_jakarta.className)}>
                    Out Top 3 Features
                </Badge>
                <div className="hidden lg:block lg:absolute top-0 z-10">
                    <LineSvg className=" " />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-56 justify-evenly items-center lg:p-36 md:p-10 ">
                <div className="flex flex-col items-center z-50 md:items-start gap-5 md:p-10 mb-10">
                    <Badge
                        className={cn("text-white w-fit text-sm text-center md:text-lg p-2 px-8",
                            "bg-black border-[0.3px]",
                            " shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] ",
                            "hover:border-cornflowerblue-600", secondary_jakarta.className)}
                    > Customer Support</Badge>
                    <h3 className={cn("text-white text-xl  md:text-[35.94px] font-[500px] ", secondary_jakarta.className)}>
                        Instant Support, No {" "}
                        <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Wait {" "}</span>
                        Times
                    </h3>
                    <p className={
                        cn("text-white tracking-tight md:text-left text-center md:text-[20px] text-sm leading-[27px] ", secondary_jakarta.className)}>
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
                <div className="flex flex-col items-center md:items-start gap-5 z-50 ">



                    <Badge
                        className={cn("text-white w-fit text-sm md:text-lg p-2 px-8",
                            "bg-black border-[0.3px]",
                            " shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] ",
                            "hover:border-cornflowerblue-600", secondary_jakarta.className)}
                    >
                        Operation Automation
                    </Badge>
                    <h3 className={cn("text-white text-xl  md:text-[35.94px] font-[500px] leading-[52px]", secondary_jakarta.className)}>
                        Accelerate Sales With {" "}
                        <span className="
                        text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]
                        [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Proactive {" "}</span>
                        Outreach
                    </h3>
                    <p className={
                        cn("text-white tracking-tight md:text-left text-center md:text-[20px] text-sm leading-[27px] ", secondary_jakarta.className)}>
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
            </div>
        </section>
    )
}


