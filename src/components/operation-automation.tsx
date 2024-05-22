
import { Button } from "./ui/button"
import ani from "../../public/operation-automation-flow.json"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { LottieAnimation } from "./animation"

export const OperationAutomationSection =  () => {
    return (
        <section className=" p-10 flex flex-col items-end justify-start max-w-full text-left  text-white">
            <div className="m-auto z-20">
                <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_106_1302)">
                        <rect x="17" y="19" width="62" height="62" rx="31" fill="black" />
                        <rect x="17.75" y="19.75" width="60.5" height="60.5" rx="30.25" stroke="url(#paint0_linear_106_1302)" stroke-width="1.5" />
                        <path d="M60.375 50C60.375 56.8346 54.8346 62.375 48 62.375C44.8305 62.375 41.9394 61.1834 39.75 59.2239L35.625 55.5M35.625 55.5V62.375M35.625 55.5H42.5M35.625 50C35.625 43.1655 41.1655 37.625 48 37.625C51.1695 37.625 54.0606 38.8165 56.25 40.7761L60.375 44.5M60.375 44.5V37.625M60.375 44.5H53.5" stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_106_1302" x="0.5" y="0.5" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_106_1302" />
                            <feOffset dx="1" dy="-1" />
                            <feGaussianBlur stdDeviation="6.75" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0665343 0 0 0 0 0.0550521 0 0 0 0 0.629167 0 0 0 0.53 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_1302" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_1302" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_106_1302" x1="19.2012" y1="23.5" x2="85.2259" y2="31.9703" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#94A5FF" />
                            <stop offset="0.56944" stop-color="#7C5ED2" />
                            <stop offset="1" stop-color="#203189" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="relative max-w-full mt-10 ">
                <Button className=
                    {cn("  bg-[transparent] absolute top-[-20px] left-[60px] md:top-[-20px] md:left-[544px]",
                        "shadow - [0px_0px_6.9px_rgba(82, _79, _255, _0.15)] rounded - 3xl",
                        "     [background:linear-gradient(97.31deg,_#b68bfc,_#7354ef_47.79%,_#5e25ff)] overflow-hidden",
                        "whitespace-nowrap z-[1] border-[0.3px] border-solid border-black hover:bg-darkslategray-500",
                        "hover:box-border hover:border-[0.3px] hover:border-solid hover:border-darkslategray-300", primary_font.className)}>
                    Operation Automation
                </Button>
                <div className="rounded-xl 
                 w-full  flex lg:flex-row flex-col items-start justify-center
               md:p-10 
               p-6
               mt-6
               md:mt-0
                max-w-full md:border-[0.5px]  border-gray-100 border:none ">
                    <div className="md:w-[575px] flex flex-col items-start justify-start md:pt-[134px] 
                    px-0 pb-0 box-border md:min-w-[575px] max-w-full rounded-xl">
                        <div className="flex flex-col items-start justify-start gap-[43px] max-w-full">
                            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2 max-w-full">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                                    <h3 className={cn(
                                        "md:leading-[52px]",
                                        "capitalize font-medium text-center md:text-left",
                                        "md:text-4xl text-xl", primary_font.className)} >
                                        {`Automate workflows for `}
                                        <span className="text-transparent
                                        !bg-clip-text [background:linear-gradient(91.85deg,_#4e62ca,_#4a60d9)]
                                        [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                            seamless {" "}
                                        </span>
                                        collaboration
                                    </h3>
                                    <p className={cn("md:text-xl text-md md:text-left text-center",
                                        "leading-[27px] font-light whitespace-pre-wrap ", secondary_jakarta.className)}>
                                        Enhance team communication and process flow, as our AI
                                        smoothly integrates with and automates your operational
                                        communications.
                                    </p>
                                </div>
                            </div>
                            <Button className=
                                {cn("bg-black shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                                    "rounded-xl overflow-hidden",
                                    "md:px-10 md:py-7",
                                    "px-6 py-4",
                                    "text-md",
                                    "m-auto",
                                    "md:m-0",
                                    "md:text-xl",
                                    "whitespace-nowrap ",
                                    "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-300",
                                    " hover:border-cornflowerblue-600", primary_font.className)}>
                                Experience the efficiency
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start relative gap-[20px] md:min-w-[408px] min-w-[200px] max-w-full
                   mt-8 md:mt-0">
                        <LottieAnimation ani={ani} />
                    </div>
                </div>
            </div>
        </section >
    )

}


