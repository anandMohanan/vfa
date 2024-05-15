"use client"

import Image from "next/image"
import { Badge } from "./ui/badge"
import Lottie from "lottie-react"
import ani from "../../public/flow-4.json"
import { Button } from "./ui/button"

export const HeaderSection = () => {
    return (
        <header className="flex min-h-screen justify-center items-center header_section w-full m-10 ">
            <div className="w-[1235px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[747px] flex flex-col items-start justify-start gap-[24.5px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                        <div className="flex flex-row items-start justify-start relative max-w-full">
                            <Badge variant={"outline"} className="text-white border-none text-2xl p-2 px-6
shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] box-border 
 border-[0.3px] border-solid border-cornflowerblue-300 hover:bg-darkslategray-300 hover:box-border hover:border-[0.3px] 
                  hover:border-solid hover:border-cornflowerblue-600
                            "> Meet Automated Voice AI </Badge>
                        </div>
                    </div>
                    <h1 className="text-white font-light  md:text-4xl lg:text-5xl text-center">
                        Meet Your
                        <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            AI Agents
                        </span>
                        <span>{` That Listen And Speak Anytime & Anywhere`}</span>
                    </h1>
                    <p className="text-white tracking-tight text-center text-xl leading-7 [&:not(:first-child)]:mt-6">Imagine a team that never clocks out.
                        A customer service agent that’s all ears, 24/7. A sales assistant that’s always fine-tuning its pitch.
                        That’s VoiceFirst AI—your always-available,
                        voice-driven team multiplier.</p>
                    <div className="flex items-center justify-center align-middle">
                        <Lottie animationData={ani} loop={false} className="text-center w-60 flex justify-center items-center align-middle" />
                    </div>
                    <Button className="rounded-3xl ">Activate your AI</Button>
                </div>
            </div>
        </header>
    )
}

// background: linear-gradient(92.46deg, #698AFF 38.02%, #3F5399 76.42%);

// <svg width="584" height="2" viewBox="0 0 584 2" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0 1H584" stroke="url(#paint0_radial_29_639)" />
// <defs>
// <radialGradient id="paint0_radial_29_639" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(292 1.5) scale(422 0.722603)">
// <stop stop-color="#454CF3" />
// <stop offset="1" stop-color="#7286FF" stop-opacity="0" />
// </radialGradient>
// </defs>
// </svg>
//
