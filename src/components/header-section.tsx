"use client";

import Lottie from "lottie-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ani from "../../public/flow-4.json";

export const HeaderSection = () => {
  return (
    <header className="header_section w-full min-h-screen">
      <div className="flex flex-col items-start justify-start gap-6">
        {/* Top Button */}
        <div className=" lg:w-[50rem] h-12 relative m-auto flex flex-col justify-center items-center  ">
          <div className="line hidden lg:block absolute w-[50rem] h-[0.3px] bg-red-600"></div>
          <Badge
            variant={"outline"}
            className="text-white lg:absolute text-lg p-2 px-8 bg-black border-[0.3px] border-solid border-cornflowerblue-300 shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] hover:bg-darkslategray-300   hover:border-cornflowerblue-600">
            Meet Automated Voice AI
          </Badge>
        </div>

        {/* Hero */}
        <div className="max-w-[50%] my-4 m-auto">
          <h1 className="text-white font-light  md:text-4xl lg:text-5xl text-center">
            Meet Your
            <span className="text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              AI Agents
            </span>
            <span>{` That Listen And Speak Anytime & Anywhere`}</span>
          </h1>
          <p className="text-white tracking-tight text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
            Imagine a team that never clocks out. A customer service agent
            that’s all ears, 24/7. A sales assistant that’s always fine-tuning
            its pitch. That’s VoiceFirst AI—your always-available, voice-driven
            team multiplier.
          </p>
        </div>

        {/* SVG */}
        <div className="m-auto relative h-72 overflow-hidden w-full">
          <Lottie
            animationData={ani}
            className="w-[500px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        {/* CTA */}
        <Button className="rounded-3xl m-auto">Activate your AI</Button>
      </div>
    </header>
  );
};

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
