import Image from "next/image"
import { SubmitFormComponent } from "./submit-form"
import { cn } from "@/lib/utils"
import { primary_font } from "@/lib/font"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "VoiceFirst AI",
    description: "VoiceFirst AI - Schedule a call with VoiceFirst AI",
    twitter: {
        card: "summary_large_image",
    }
};


const SubmitPage = () => {

    return (
        <section className=" flex lg:h-[100vh]  lg:flex-row flex-col  w-full ">

            <div className="flex flex-col grow">
                <div className="flex flex-col text-white grow p-8  ">
                    <h1 className={cn("text-3xl  md:text-5xl text-center font-extrabold",
                        "  text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]"
                        , primary_font.className)}>See and hear the technology first-hand </h1>
                    <Image src="/activate.png" alt="activate" width={400} height={100} className="w-full h-[80%]" priority />
                </div>
                <div className="flex grow lg:h-[50vh]">
                    <ul className={cn("list-disc p-2 ml-6 lg:text-xl text-lg  text-white", primary_font.className)}>
                        <li>Discuss integration, support, and customization</li>
                        <li>Compare VoiceFIrst AI to other voice platforms</li>
                        <li>Discuss pricing and timeline </li>
                    </ul>
                </div>
            </div>
            <div className="flex grow items-center justify-center">
                <SubmitFormComponent />
            </div>
        </section>
    )
}


export default SubmitPage
