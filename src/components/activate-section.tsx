import Image from "next/image";
import { cn } from "@/lib/utils";
import { primary_font } from "@/lib/font";
import { EnableVoicefirstAiButton } from "./cta-buttons";

export const ActivateSection = () => {
    return (
        <section className="z-50 flex  flex-col lg:flex-row  ">
            <div className="z-50 flex flex-col  gap-10 p-4 text-white md:w-[100%] lg:w-[50%] lg:p-20 ">
                <h3
                    className={cn(
                        "text-center text-[20px] font-semibold md:text-[36px] lg:text-left  lg:text-4xl",
                        primary_font.className,
                    )}
                >
                    Ready To have Your VoiceFirst <br /> agents That Help You ?
                </h3>
                <p
                    className={cn(
                        "m-auto w-[90%] text-center text-[16px] opacity-80 md:text-[25px] lg:m-0 lg:text-left   lg:leading-[25.2px] ",
                        primary_font.className,
                    )}
                >
                    Have questions or need more info? Contact us about our innovative
                    Voice AI solutions.
                </p>
                <EnableVoicefirstAiButton />
            </div>
            <div className="md:w-[100%] lg:w-[50%]">
                <Image src="/activate.png" alt="activate" width={1000} height={800} />
            </div>
        </section>
    );
};
