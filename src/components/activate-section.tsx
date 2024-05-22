import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"

export const ActivateSection = () => {
    return (
        <section className="flex z-50  lg:flex-row flex-col  ">
            <div className="flex flex-col gap-10  text-white md:w-[50%] md:p-32 p-4 z-50">
                <h3 className={cn("lg:text-4xl md:text-[36px] text-[24px] md:text-left text-center  font-semibold", primary_font.className)}>
                    Ready To have Your Automation <br /> Assistant That Help You ?
                </h3>
                <p className={cn("md:text-[25px] md:leading-[25.2px] md:text-justify text-center   text-[16px] ", secondary_jakarta.className)}>
                    If you have any questions or need further information about our
                    innovative voice AI products and features, please don&apos;t hesitate to get in touch with us.
                </p>
                <Button className={cn(" m-auto md:m-0 rounded-full md:px-16 md:py-8 px-12 py-4 text-2xl",
                    " shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                    " whitespace-nowrap border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                    " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                    "bg-transparent w-fit", primary_font.className)}>
                    <span className="
text-transparent !bg-clip-text text-[20px] md:text-[24px] font-extrabold
[background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] [-webkit-background-clip:text] 
                      [-webkit-text-fill-color:transparent]
                ">Activate VoiceFirstAI</span>
                </Button>
            </div>
            <div className="md:w-[50%]">
                <Image src="/activate.png" alt="activate" width={1000} height={800} />
            </div>
        </section>
    )

}
