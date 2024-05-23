import { Badge } from "./ui/badge"
import ani from "../../public/flow-4.json"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { LottieAnimation } from "./animation"
import Link from "next/link"

export const HeaderSection = () => {
    return (
        <header className=" header_section w-full  mt-5 md:mt-0 ">
            <div className=" bg_grid flex flex-col  gap-2 h-[90vh]">
                {/* Top Button */}
                <div className="flex flex-col gap-4">
                    <div className=" lg:w-[50rem] lgxl:w-[60rem] lgxl:h-12 h-12  relative m-auto flex flex-col  items-center  ">
                        <div className="line absolute md:w-[50rem] md:h-[0.6px] top-[50%] 
                    lgxl:w-[60rem] lgxl:h-[0.6px] lg2xl:w-[70rem] lg2xl:h-[0.6px] lg3xl:w-[90rem] lg3xl:h-[0.6px] 
                    bg-gradient-to-r from-[#000] via-[#3f5399] to-[#000]
                    "/>
                        <Badge
                            variant={"outline"}
                            className={cn("text-white  text-sm md:text-lg p-2 z-50 px-8 lgxl:p-4 lg2xl:p-6 lg3xl:p-8",
                                "bg-black border-[0.3px] lgxl:text-[20px] lg2xl:text-[24px] lg3xl:text-[30px] font-[700px] ",
                                " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                                "hover:border-cornflowerblue-600", secondary_jakarta.className)}>
                            Discover Voice-First Agents
                        </Badge>
                    </div>
                    <div className="md:max-w-[50%] max-w-[80%] lgxl:my-2 lg2xl:my-20 lg3xl:my-28 m-auto">
                        <div className="mb-4">
                            <h1 className={cn("text-white md:mb-4 font-light  text-[28px] leading-[35.28px]  md:text-[48px] lg:text-[48px]",
                                "lgxl:text-[50px] lg2xl:text-[80px] lg3xl:text-[120px] text-center lgxl:p-4 lg2xl:p-8", secondary_jakarta.className)}>
                                Meet Your{" "}
                                <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    AI Agents
                                </span>

                            </h1>
                            <h1 className={cn("text-white md:mb-4 font-light  text-[28px] leading-[35.28px]  md:text-[48px] lg:text-[48px]",
                                "lgxl:text-[50px] lg2xl:text-[80px] lg3xl:text-[120px] text-center lgxl:p-4 lg2xl:p-8", secondary_jakarta.className)}>
                                {` That Listen And Speak`}
                            </h1>
                        </div>
                        <p className={cn("text-white leading-10 md:w-[80%] opacity-90 w-[100%] lgxl:p-2",
                            "m-auto text-center font-thin md:text-[20px] text-[16px] lgxl:text-[20px] lg2xl:text-[24px] lg3xl:text-[50px] ", secondary_jakarta.className)}>
                            Imagine a team that never clocks out.
                            A customer service agent that’s all ears, 24/7.
                            A sales assistant that’s always fine-tuning its pitch.
                            That’s VoiceFirst AI—your always-available, voice-driven team multiplier.
                        </p>
                    </div>
                </div>

                {/* Hero */}

                {/* SVG */}
                <div data-scroll data-scroll-speed="0.3" className="m-auto relative md:h-72  h-40  lgxl:h-70
                lg2xl:h-120 lg3xl:h-140 overflow-hidden w-full">
                    <LottieAnimation
                        ani={ani}
                        className="md:w-[500px] w-[400px] lgxl:w-[600px] lg2xl:w-[900px]
                        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                        data-scroll data-scroll-speed="0.3"
                    />
                </div>
                {/* CTA */}
                <Link href="/submit" className={cn(buttonVariants(),
                    "rounded-full lg:mb-8 m-auto md:my-4 md:px-16 md:py-8 px-12 py-8 text-[18px]",
                    "md:text-[24px] lgxl:p-8 lgxl:px-16 lg2xl:p-16 lg2xl:px-24 lgxl:my-8 ",
                    "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                    " overflow-hidden whitespace-nowrap",
                    "border-[1.5px] border-cornflowerblue-300",
                    " hover:border-[1.5px]  hover:border-cornflowerblue-600 hover:bg-cornflowerblue-600",
                    "text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                    "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                    primary_font.className
                )}>
                    Activate your Agents
                </Link>
            </div>
        </header >
    );
}

