import { Badge } from "./ui/badge";
import ani from "../../public/flow-4.json";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { primary_font } from "@/lib/font";
import { LottieAnimation } from "./animation";
import { ActivateAiButton } from "./cta-buttons";

export const HeaderSection = () => {
    return (
        <header className=" header_section mt-5  w-full md:mt-0 ">
            <div className=" bg_grid flex h-[90vh]  flex-col gap-2">
                {/* Top Button */}
                <div className="flex flex-col gap-4">
                    <div className=" relative m-auto flex h-12  flex-col items-center lg:w-[50rem] lgxl:h-12  lgxl:w-[60rem]  ">
                        <div
                            className="line absolute top-[50%] bg-gradient-to-r from-[#000] 
                    via-[#3f5399] to-[#000] md:h-[0.6px] md:w-[30rem] lgxl:h-[0.6px] lgxl:w-[60rem] 
                    lg2xl:h-[0.6px] lg2xl:w-[70rem] lg3xl:h-[0.6px] lg3xl:w-[90rem]
                    "
                        />
                        <Badge
                            variant={"outline"}
                            className={cn(
                                "z-50  p-2 px-8 text-sm text-white md:text-lg lgxl:p-4 lg2xl:p-6 lg3xl:p-8",
                                "border-[0.3px] bg-black font-[700px] lgxl:text-[20px] lg2xl:text-[24px] lg3xl:text-[30px] ",
                                " shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] border-cornflowerblue-300 hover:bg-darkslategray-300 ",
                                "hover:border-cornflowerblue-600",
                                primary_font.className,
                            )}
                        >
                            Discover Voice-First Agents
                        </Badge>
                    </div>
                    <div className="m-auto max-w-[80%] md:max-w-[50%] lgxl:my-2 lg2xl:my-20 lg3xl:my-28">
                        <div className="mb-4">
                            <h1
                                className={cn(
                                    "text-[28px] font-light leading-[35.28px]  text-white md:mb-4  md:text-[48px] lg:text-[48px]",
                                    "text-center lgxl:p-4 lgxl:text-[50px] lg2xl:p-8 lg2xl:text-[80px] lg3xl:text-[120px]",
                                    primary_font.className,
                                )}
                            >
                                Meet Your{" "}
                                <span className="!bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]">
                                    AI Agents
                                </span>
                            </h1>
                            <h1
                                className={cn(
                                    "text-[28px] font-light leading-[35.28px]  text-white md:mb-4  md:text-[48px] lg:text-[48px]",
                                    "text-center lgxl:p-4 lgxl:text-[50px] lg2xl:p-8 lg2xl:text-[80px] lg3xl:text-[120px]",
                                    primary_font.className,
                                )}
                            >
                                {` That Listen And Speak`}
                            </h1>
                        </div>
                        <p
                            className={cn(
                                "w-[100%] leading-10 text-white opacity-80 md:w-[100%] lgxl:p-2",
                                "m-auto text-center text-[16px] font-thin md:text-[20px] lgxl:text-[20px] lg2xl:text-[24px] lg3xl:text-[50px] ",
                                primary_font.className,
                            )}
                        >
                            Imagine a team that never clocks out. A customer service agent
                            that’s all ears, 24/7. A sales assistant that’s always fine-tuning
                            its pitch. That’s VoiceFirst AI—your always-available,
                            voice-driven team multiplier.
                        </p>
                    </div>
                </div>

                {/* Hero */}

                {/* SVG */}
                <div className="mt-14 flex flex-col justify-around gap-12 md:mt-0 md:justify-start">
                    <div
                        className="lgxl:h-70 lg2xl:h-120 lg3xl:h-140  relative  m-auto
                h-40 w-full overflow-hidden md:h-72"
                    >
                        <LottieAnimation
                            ani={ani}
                            className="absolute left-[50%]  top-[50%] w-[400px]
                        translate-x-[-50%] translate-y-[-50%] md:w-[500px] lgxl:w-[600px] lg2xl:w-[900px]"
                            data-scroll
                            data-scroll-speed="0.3"
                        />
                    </div>
                    {/* CTA */}
                    <ActivateAiButton />
                </div>
            </div>
        </header>
    );
};
