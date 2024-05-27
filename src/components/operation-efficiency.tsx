import {
    AudioIcon,
    BrainIcon,
    BulbIcon,
    MobileEfficiencyIcon,
    OperationEfficienyIcon,
    UparrowIcon,
} from "@/lib/icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { primary_font } from "@/lib/font";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { LottieAnimation } from "./animation";
import efficiency from "../../public/efficenicy.json";

export const OperationEfficiencySection = () => {
    const EfficienceInfo1 = [
        {
            icon: <BulbIcon />,
            header: "Automatic Learning",
            description: "AI that gets smarter over time for better outcomes.",
        },
        {
            icon: <AudioIcon />,
            header: "Voice Profile",
            description:
                "Builds and updates voice profiles for precise communication.",
        },
    ];
    const EfficienceInfo2 = [
        {
            icon: <UparrowIcon />,
            header: "Continuous Development",
            description: "Adapts and grows with your organization.",
        },
        {
            icon: <BrainIcon />,
            header: "Re-Test Function",
            description: "Customizable to fit unique business requirements.",
        },
    ];
    return (
        <section className="md:p-15 md:mt-16 lg:p-30 lgxl:mt-2 ">
            <div className="flex flex-col items-center justify-center gap-5">
                <Button
                    className={cn(
                        " w-fit rounded-full bg-black text-xl  font-[500px] text-white md:text-[20px]",
                        " overflow-hidden whitespace-nowrap",
                        "bg-black ",
                        "lgxl:p-4 lgxl:px-16 lg2xl:p-6 lg2xl:px-20 lg3xl:p-8 lg3xl:px-24",
                        "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
                        "!bg-clip-text text-transparent [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                        "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                        primary_font.className,
                    )}
                >
                    Features Improvement
                </Button>
                <h3
                    className={cn(
                        "p-2 text-center text-4xl text-white lg:text-[36px]",
                        "!bg-clip-text text-transparent [background:linear-gradient(92.46deg,_#FFFFFF,_#999999)]",
                        primary_font.className,
                    )}
                >
                    Operation Efficieny Reimagined{" "}
                </h3>
            </div>
            <div className="flex flex-col lg:p-10 p-4 md:flex-row md:gap-12 lg:gap-0">
                <div className="">
                    {EfficienceInfo1.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="card_border mb-20 rounded-2xl
            p-[2px] shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]"
                            >
                                <Card className="rounded-2xl border-none bg-black md:h-[250px] md:w-[300px]  lg:h-[200px]  lg:w-[400px] ">
                                    <CardHeader className={cn()}>
                                        {item.icon}
                                        <CardTitle
                                            className={cn(
                                                "text-[20px] text-white ",
                                                "!bg-clip-text text-transparent [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                                            )}
                                        >
                                            <span className="font-extrabold">{item.header}</span>
                                        </CardTitle>
                                        <CardDescription
                                            className={cn(
                                                "text-[18px] font-extralight text-whitesmoke ",
                                                primary_font.className,
                                            )}
                                        >
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        );
                    })}
                </div>
                <div className="z-100 hidden lg1000:hidden  lg:block relative">
                    {
                        // <Image
                        //     alt="efficiency"
                        //     src="/efficiency.png"
                        //     width={800}
                        //     height={800}
                        //     className="h-[400px] w-[100%]"
                        // />
                    }
                    <OperationEfficienyIcon />
                    <LottieAnimation className="absolute -top-[25%] right-[4%]" ani={efficiency} />
                </div>
                <div className="relative z-100 block md:hidden flex items-center justify-center">
                    {
                        // <Image
                        //     alt="efficiency"
                        //     src="/mobile-operation-efficiency.png"
                        //     width={800}
                        //     height={800}
                        // />
                    }
                    <MobileEfficiencyIcon />
                    <LottieAnimation className="absolute" ani={efficiency} />
                </div>
                <div className="mt-20 md:mt-0">
                    {EfficienceInfo2.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="card_border mb-20 rounded-2xl
            p-[2px] shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]"
                            >
                                <Card className="rounded-2xl border-none bg-black  md:h-[250px] md:w-[300px]  lg:h-[200px] lg:w-[400px] ">
                                    <CardHeader className={cn()}>
                                        {item.icon}
                                        <CardTitle
                                            className={cn(
                                                "text-[20px] font-bold text-white ",
                                                "!bg-clip-text text-transparent [background:linear-gradient(92.46deg,_#6977F0,_#4255FC)]",
                                                "[-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
                                            )}
                                        >
                                            <span className="font-extrabold">{item.header}</span>
                                        </CardTitle>
                                        <CardDescription
                                            className={cn(
                                                "text-[18px] font-extralight text-whitesmoke ",
                                                primary_font.className,
                                            )}
                                        >
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
