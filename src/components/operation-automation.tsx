
import { Button, buttonVariants } from "./ui/button"
import ani from "../../public/operation-automation-flow.json"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { LottieAnimation } from "./animation"
import Link from "next/link"

export const OperationAutomationSection = () => {
    return (
        <section className="relative flex flex-col items-end justify-start max-w-full text-left md:mb-10 mt-40  text-white">
            <div className="flex flex-col max-w-full mt-10 ">
                <Button className=
                    {cn(" cursor-normal absolute top-[2%] lg:left-[42%] md:left-[38%]  bg-[transparent] m-auto",
                        "lg2xl:p-4 lg3xl:p-6 lgxl:p-8 lg2xl:px-16 lg3xl:px-20 lgxl:px-24",
                        "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
                        "shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] rounded-lg",
                        "     [background:linear-gradient(97.31deg,_#b68bfc,_#7354ef_47.79%,_#5e25ff)] overflow-hidden",
                        "whitespace-nowrap z-[1] border-[0.3px] border-solid border-black hover:bg-darkslategray-500",
                        "hover:box-border  hover:border-darkslategray-300", primary_font.className)}>
                    Operation Automation
                </Button>
                <div className="rounded-xl 
                 min-w-full  flex lg:flex-row flex-col items-start justify-center
               md:p-10 
            [background:linear-gradient(97.31deg,_#0a0a0a,_#000000)]
               p-6
               mt-6
               md:mt-0
                max-w-full md:border-[0.5px]  border-gray-100  ">
                    <div className="md:w-[575px] flex flex-col  items-start justify-start lg:pt-[134px] 
                    px-0 pb-0 box-border md:min-w-[575px] max-w-full rounded-xl ">
                        <div className="flex flex-col items-start justify-start gap-[43px] max-w-full">
                            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2 max-w-full">
                                <div className="flex-1 flex flex-col lg:items-start lg:justify-start items-center justify-center gap-[8px] max-w-full">
                                    <h3 className={cn(
                                        "md:leading-[52px]",
                                        "capitalize font-medium text-center lg:text-left",
                                        "md:text-4xl text-xl", primary_font.className)} >
                                        {`Automate workflows for `}
                                        <span className="text-transparent
                                        !bg-clip-text [background:linear-gradient(91.85deg,_#4e62ca,_#4a60d9)]
                                        [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                            seamless {" "}
                                        </span>
                                        collaboration
                                    </h3>
                                    <p className={cn("md:text-xl opacity-80 text-md lg:text-left text-center",
                                        "leading-[27px] font-light whitespace-pre-wrap ", secondary_jakarta.className)}>
                                        Enhance team communication and process flow,  as our agents  smoothly integrates with and automates
                                        your operational communications.
                                    </p>
                                </div>
                            </div>
                            <Link href={`/submit`} className=
                                {cn(buttonVariants(), "bg-black shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                                    "rounded-xl overflow-hidden",
                                    "md:px-10 md:py-7",
                                    "px-6 py-4",
                                    "text-md",
                                    "m-auto",
                                    "lg:m-0",
                                    "md:text-xl",
                                    "whitespace-nowrap ",
                                    "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-300",
                                    " hover:border-cornflowerblue-600", primary_font.className)}>
                                Experience the efficiency
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start relative gap-[20px] md:min-w-[408px] min-w-[200px] max-w-full
                   mt-8 md:mt-8 lg:mt-0">
                        <LottieAnimation ani={ani} />
                    </div>
                </div>
            </div>
        </section >
    )

}


