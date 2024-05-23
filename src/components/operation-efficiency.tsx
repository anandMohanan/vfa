

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
            description: "AI that gets smarter over time for better outcomes."
        },
        {
            icon: <AudioIcon />,
            header: "Voice Profile",
            description: "Builds and updates voice profiles for precise communication."
        },
    ]
    const EfficienceInfo2 = [
        {
            icon: <UparrowIcon />,
            header: "Continuous Development",
            description: "Adapts and grows with your organization."
        },
        {
            icon: <BrainIcon />,
            header: "Re-Test Function",
            description: "Customizable to fit unique business requirements."
        },
    ]
    return (
        <section className="lg:p-10 md:p-15 md:mt-16 ">
            <div className="flex flex-col gap-5 items-center justify-center">
                <Button className={cn(" md:text-[20px] font-[500px] text-sm rounded-full  text-white bg-black w-fit",
                    " overflow-hidden whitespace-nowrap",
                    "bg-black ",
                    "lgxl:p-4 lg2xl:p-6 lg3xl:p-8 lgxl:px-16 lg2xl:px-20 lg3xl:px-24",
                    "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
                    "text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                    "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                    secondary_jakarta.className)}>
                    Features Improvement
                </Button>
                <h3 className={cn("text-white lg:text-[36px] text-lg p-2",
                    "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#FFFFFF,_#999999)]",
                    secondary_jakarta.className)}>Operation Efficieny Reimagined </h3>
            </div>
            <div className="p-10 flex md:flex-row flex-col md:gap-12 lg:gap-0">

                <div className="">
                    {
                        EfficienceInfo1.map((item, index) => {
                            return (
                                <div key={index} className="card_border p-[2px] rounded-2xl
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] mb-20">
                                    <Card className="bg-black lg:h-[200px] lg:w-[400px] md:w-[300px] md:h-[250px]  border-none  rounded-2xl ">
                                        <CardHeader className={cn(
                                        )}>
                                            {item.icon}
                                            <CardTitle className={cn("text-white text-[20px] ",
                                                "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                                            )}><span className="font-extrabold">{item.header}</span></CardTitle>
                                            <CardDescription className={cn("text-[18px] text-whitesmoke font-extralight ", secondary_jakarta.className)}>
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
                    <Image alt="efficiency" src="/efficiency.png" width={800} height={800} className="h-[400px]" />
                </div>
                <div className="z-100 md:hidden block">
                    <Image alt="efficiency" src="/mobile-operation-efficiency.png" width={800} height={800} />
                </div>
                <div className="mt-20 md:mt-0">
                    {
                        EfficienceInfo2.map((item, index) => {
                            return (
                                <div key={index} className="card_border p-[2px] rounded-2xl
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] mb-20">
                                    <Card className="bg-black lg:h-[200px] lg:w-[400px]  border-none md:w-[300px]  md:h-[250px] rounded-2xl ">
                                        <CardHeader className={cn(
                                        )}>
                                            {item.icon}
                                            <CardTitle className={cn("text-white font-bold text-[20px] ",
                                                "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                                            )}><span className="font-extrabold">{item.header}</span></CardTitle>
                                            <CardDescription className={cn("text-[18px] text-whitesmoke font-extralight ", secondary_jakarta.className)}>
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
        </section >
    )
}
