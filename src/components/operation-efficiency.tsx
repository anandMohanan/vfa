

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
        <section className="lg:p-10 md:p-20 relative">
            <div className="flex flex-col gap-5 items-center justify-center">
                <Button className={cn(" md:text-[20px] font-[500px] text-sm rounded-full  text-white bg-black w-fit",
                    "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] ",
                    " overflow-hidden whitespace-nowrap",
                    "bg-transparent text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)]",
                    "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                    "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] ", secondary_jakarta.className)}>
                    Features Improvement
                </Button>
                <h3 className={cn("text-white lg:text-[36px] text-lg", secondary_jakarta.className)}>Operation Efficieny Reimagined </h3>
            </div>
            <div className="p-10 flex md:flex-row flex-col md:gap-12 lg:gap-0">

                <div className="">
                    {
                        EfficienceInfo1.map((item, index) => {
                            return (
                                <div key={index} className="card_border p-[2px] rounded-2xl
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] mb-20">
                                    <Card className="bg-black lg:h-[200px] lg:w-[400px] md:w-[300px]  border-none  rounded-2xl ">
                                        <CardHeader className={cn(
                                        )}>
                                            {item.icon}
                                            <CardTitle className={cn("text-white text-[20px] ",
                                                "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                                                primary_font.className
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
                    <Image alt="efficiency" src="/efficiency.png" width={800} height={800} />
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
                                    <Card className="bg-black lg:h-[200px] lg:w-[400px]  border-none md:w-[300px]  rounded-2xl ">
                                        <CardHeader className={cn(
                                        )}>
                                            {item.icon}
                                            <CardTitle className={cn("text-white text-[20px] ",
                                                "text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                                                primary_font.className
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
        </section>
    )
}
