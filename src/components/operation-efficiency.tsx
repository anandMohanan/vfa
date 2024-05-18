

import { AudioIcon, BrainIcon, BulbIcon, OperationEfficienyIcon, UparrowIcon } from "@/lib/icons"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"






export const OperationEfficiencySection = () => {
    const EfficienceInfo1 = [
        {
            icon: <BulbIcon />,
            header: "Automatic Learning",
            description: "Supaglue is SOC 2 Type I certified. Report is available upon request."
        },
        {
            icon: <AudioIcon />,
            header: "Voice Profile",
            description: "No wait times for customer queries, Engage leads with zero delay"
        },
    ]
    const EfficienceInfo2 = [
        {
            icon: <UparrowIcon />,
            header: "Continuous Development",
            description: "Deploy our platform in your cloud to satisfy security and compliance requirements."
        },
        {
            icon: <BrainIcon />,
            header: "Re-Test Function",
            description: "Open source connectors you can contribute to and customize for your use case."
        },
    ]
    return (
        <section className="md:p-10 relative">
            <div className="flex flex-col gap-5 items-center justify-center">
                <Button className={cn(" md:text-xl text-sm rounded-full  text-white bg-black w-fit",
                    "border border-cornflowerblue-300",
                    "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                    " overflow-hidden whitespace-nowrap",
                    "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-400",
                    " hover:border-[1.5px]  hover:border-cornflowerblue-600",
                    "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                    "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                    "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] ", primary_font.className)}>
                    Features Improvement
                </Button>
                <h3 className={cn("text-white lg:text-3xl text-lg", primary_font.className)}>Operation Efficieny Reimagined </h3>
            </div>
            <div className="p-10 flex md:flex-row flex-col">

                <div className="">
                    {
                        EfficienceInfo1.map((item, index) => {
                            return (
                                <div key={index} className="card_border p-[2px] rounded-2xl
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] mb-20">
                                    <Card className="bg-black lg:h-[200px] lg:w-[320px]  border-none  rounded-2xl ">
                                        <CardHeader className={cn(
                                        )}>
                                            {item.icon}
                                            <CardTitle className={cn("text-white text-md",
                                                "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                                                primary_font.className
                                            )}>{item.header}</CardTitle>
                                            <CardDescription className={cn("text-sm text-whitesmoke ", secondary_jakarta.className)}>
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="z-100 lg:block hidden">
                    <Image alt="efficiency" src="/efficiency.png" width={800} height={800} />
                </div>
                <div className="">
                    {
                        EfficienceInfo2.map((item, index) => {
                            return (
                                <div key={index} className="card_border p-[2px] rounded-2xl
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] mb-20">
                                    <Card className="bg-black lg:h-[200px] lg:w-[320px]  border-none  rounded-2xl ">
                                        <CardHeader>
                                            {item.icon}
                                            <CardTitle className={cn("text-white text-md",
                                                "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                                                primary_font.className
                                            )}>{item.header}</CardTitle>
                                            <CardDescription className={cn("text-sm text-whitesmoke ", secondary_jakarta.className)}>
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
