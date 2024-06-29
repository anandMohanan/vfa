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
                    <Image src="/activate.png" alt="activate" width={400} height={80} className="w-full h-[70%]" priority />
                    <div className="text-2xl">
                        Discuss integration, support, and customization &gt;&gt; Compare VoiceFirst AI to other voice platforms &gt;&gt; Discuss pricing and timeline
                    </div>
                </div>
            </div>
            <div className="flex grow items-center justify-center">
                <SubmitFormComponent />
            </div>
        </section>
    )
}


export default SubmitPage
