"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font } from "@/lib/font"
import { usePostHog } from "posthog-js/react"




export const ActivateAiButton = ({ }) => {
    const posthog = usePostHog()
    return (
        <Link
            href="/submit"
            className={cn(
                buttonVariants(),
                "m-auto rounded-full px-12 py-8 text-[18px] md:my-4 md:px-16 md:py-8 lg:mb-8",
                "md:text-[24px] lgxl:my-8 lgxl:p-8 lgxl:px-16 lg2xl:p-16 lg2xl:px-24 ",
                "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                " overflow-hidden whitespace-nowrap",
                "border-[1.5px] border-cornflowerblue-300",
                " hover:border-[1.5px]  hover:border-cornflowerblue-600 hover:bg-cornflowerblue-600",
                "!bg-clip-text text-transparent [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                primary_font.className,
            )}
            onClick={() => posthog?.capture("clicked-activate-ai-button")}
        >
            Activate your Agents
        </Link>
    )
}


export const TryDemoButton = () => {
    const posthog = usePostHog()

    return (
        <Link
            href={"/submit"}
            className={cn(
                buttonVariants(),
                "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.61)]",
                "px-4 py-4 md:px-6 md:py-6",
                "text-md border-[1px] border-solid border-cornflowerblue-300",
                "hover:box-border hover:border-[1px] hover:border-solid hover:bg-cornflowerblue-300",
                " text-xl hover:border-cornflowerblue-600",
                "hover:shadow-[0px_0px_30px_rgba(82,_79,_255,_0.61)]",
            )}
            onClick={() => posthog?.capture("clicked-try-demo-button")}
        >
            Try Demo{" "}
        </Link>
    )
}



export const EnableVoicefirstAiButton = () => {
    const posthog = usePostHog()
    return (
        <Link
            href="/submit"
            className={cn(
                buttonVariants(),
                " m-auto rounded-full px-12 py-4 text-2xl md:px-16 md:py-8 lg:m-0",
                " shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                " whitespace-nowrap border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                "w-fit bg-transparent",
                primary_font.className,
            )}
            onClick={() => posthog?.capture("clicked-enable-voicefirst-ai-button")}
        >
            <span
                className="
!bg-clip-text text-[20px] font-extrabold text-transparent [-webkit-background-clip:text]
[-webkit-text-fill-color:transparent] [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] 
                      md:text-[24px]
                "
            >
                Enable VoiceFirstAI
            </span>
        </Link>
    )
}


export const TalktoUsNowButton = () => {
    const posthog = usePostHog()
    return (
        <Link href={`/submit`} onClick={() => posthog?.capture("clicked-talk-to-us-now-button")}
            className={cn(buttonVariants(), "")}>Talk to us Now </Link>
    )
}



export const ExperienceTheEfficiencyButton = () => {
    const posthog = usePostHog()
    return (
        <Link
            onClick={() => posthog?.capture("clicked-experience-the-efficiency-button")}
            href={`/submit`}
            className={cn(
                buttonVariants(),
                "bg-black shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                "overflow-hidden rounded-xl",
                "md:px-10 md:py-7",
                "px-6 py-4",
                "text-md",
                "m-auto",
                "lg:m-0",
                "md:text-xl",
                "whitespace-nowrap ",
                "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-300",
                " hover:border-cornflowerblue-600",
                primary_font.className,
            )}
        >
            Experience the efficiency
        </Link>
    )
}


export const CustomerFirstButton = () => {
    const posthog = usePostHog()
    return (
        <Link
            href="/submit"
            className={cn(
                buttonVariants(),
                "m-auto w-fit rounded-none font-bold lg:m-0",
                "text-[16px] md:p-6 md:text-[24px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
                "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                "lgxl:p-8 lg2xl:p-10 lg3xl:p-12",
                primary_font.className,
            )}
            onClick={() => posthog?.capture("clicked-customer-first-button")}
        >
            Customer First
        </Link>
    )
}


export const IncreaseYourSalesButton = () => {
    const posthog = usePostHog()
    return (
        <Link
            onClick={() => posthog?.capture("clicked-increase-your-sales-button")}
            href="/submit"
            className={cn(
                buttonVariants(),
                "m-auto w-fit rounded-none font-bold lg:m-0",
                "text-[16px] md:p-6 md:text-[24px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
                "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                "lgxl:p-8 lg2xl:p-10 lg3xl:p-12",
                primary_font.className,
            )}
        >
            Increase your sales
        </Link>
    )
}
