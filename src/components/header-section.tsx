import { Badge } from "./ui/badge"
import ani from "../../public/flow-4.json"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font } from "@/lib/font"
import { LottieAnimation } from "./animation"

export const HeaderSection = () => {
    return (
        <header className=" header_section w-full min-h-screen mt-5 md:mt-0 ">
            <div className=" bg_grid flex flex-col  items-start justify-start gap-6">
                {/* Top Button */}
                <div className=" lg:w-[50rem] h-12 relative m-auto flex flex-col justify-center items-center  ">
                    <div className="line hidden  md:block absolute md:w-[50rem] md:h-[0.6px] 
                    bg-gradient-to-r from-[#000] via-[#3f5399] to-[#000]
                    "/>
                    <Badge
                        variant={"outline"}
                        className={cn("text-white lg:absolute text-sm md:text-lg p-2 px-8",
                            "bg-black border-[0.3px]",
                            " border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] hover:bg-darkslategray-300 ",
                            "hover:border-cornflowerblue-600", primary_font.className)}>
                        Meet Automated Voice AI
                    </Badge>
                </div>

                {/* Hero */}
                <div className="md:max-w-[50%] max-w-[80%] my-4 m-auto">
                    <h1 className={cn("text-white font-light  text-xl  md:text-4xl lg:text-5xl text-center", primary_font.className)}>
                        Meet Your{" "}
                        <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            AI Agents
                        </span>
                        <span>{` That Listen And Speak Anytime & Anywhere`}</span>
                    </h1>
                    <p className={cn("text-white tracking-tight text-center md:text-xl text-sm leading-7 [&:not(:first-child)]:mt-6", primary_font.className)}>
                        Imagine a team that never clocks out. A customer service agent
                        that’s all ears, 24/7. A sales assistant that’s always fine-tuning
                        its pitch. That’s VoiceFirst AI—your always-available, voice-driven
                        team multiplier.
                    </p>
                </div>

                {/* SVG */}
                <div className="m-auto relative md:h-72 h-40 overflow-hidden w-full">
                    <LottieAnimation
                        ani={ani}
                        className="md:w-[500px] w-[250px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                </div>
                {/* CTA */}
                <Button className={cn("rounded-full m-auto md:px-16 md:py-8 px-8 py-4 text-lg md:text-2xl",
                    "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                    " overflow-hidden whitespace-nowrap",
                    "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                    " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                    "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                    "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                    primary_font.className
                )}>
                    Activate your AI
                </Button>
            </div>
        </header >
    );
}

