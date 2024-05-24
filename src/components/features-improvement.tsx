import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { primary_font, secondary_jakarta } from "@/lib/font";
import {
    FingerprintIcon,
    PiechartIcon,
    PopoutIcon,
    RefreshIcon,
    RocketIcon,
    TranslateIcon,
} from "@/lib/icons";

export const FeaturesImprovementSection = () => {
    const FeaturesInfo = [
        {
            icon: <RocketIcon />,
            header: "Super Fast",
            description:
                "No wait times for customer queries, Engage leads with zero delay",
        },
        {
            icon: <TranslateIcon />,
            header: "Multi-Lingual Mastery",
            description: "Communicate in every customer's  language",
        },
        {
            icon: <PiechartIcon />,
            header: "Engagement Analytics",
            description:
                "Gain insights from every customer exchange,  Make informed decisions swiftly",
        },
        {
            icon: <PopoutIcon />,
            header: "Scaling Support",
            description:
                "Scale support with fluctuating  customer volume Consistent quality,  regardless of demand",
        },
        {
            icon: <RefreshIcon />,
            header: "Continuously Improving",
            description:
                "Leverage previous conversations to perfect the conversations",
        },
        {
            icon: <FingerprintIcon />,
            header: "Human Like Touch",
            description:
                "Engage customers with a warm, conversational tone,  answering complex queries",
        },
    ];
    return (
        <section className="relative mt-10 flex min-h-screen w-full  flex-col items-center md:p-10 lgxl:min-h-[800px] ">
            <div className="feature_box relative  h-[338px] lg:w-[100%] w-[80%]  rounded-xl   md:block   ">
                <div className="flex  flex-col  justify-center   gap-5 p-10  md:absolute ">
                    <Button
                        className={cn(
                            " m-auto w-fit bg-black text-center text-sm text-white md:m-0 md:text-left md:text-[20px]",
                            "shadow-[0px_0px_6.9px_rgba(82,79,_255,_0.15)] ",
                            " overflow-hidden whitespace-nowrap",
                            "!bg-clip-text text-transparent [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                            "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                            "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] ",
                            primary_font.className,
                        )}
                    >
                        Agent&apos;s Capability
                    </Button>
                    <h3
                        className={cn(
                            "text-center text-xl md:text-2xl font-semibold  text-white md:text-left md:text-[36px]",
                            primary_font.className,
                        )}
                    >
                        Talk to Your Customers Right Away
                    </h3>
                </div>
                <div className=" absolute flex w-full items-end  justify-between ">
                    <svg
                        className="hidden md:block"
                        width="339"
                        height="298"
                        viewBox="0 0 339 298"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <circle
                                cx="282"
                                cy="282"
                                r="281.875"
                                transform="matrix(-1 0 0 1 339 0)"
                                stroke="#D9D9D9"
                                strokeWidth="0.25"
                            />
                            <circle
                                cx="253"
                                cy="253"
                                r="252.75"
                                transform="matrix(-1 0 0 1 258 81)"
                                stroke="#D9D9D9"
                                strokeWidth="0.5"
                            />
                            <circle
                                cx="204"
                                cy="204"
                                r="203.5"
                                transform="matrix(-1 0 0 1 175 153)"
                                stroke="#D9D9D9"
                            />
                        </g>
                    </svg>
                    <svg
                        className="hidden md:block"
                        width="289"
                        height="298"
                        viewBox="0 0 289 298"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.5">
                            <circle
                                cx="282"
                                cy="282"
                                r="281.875"
                                stroke="#D9D9D9"
                                strokeWidth="0.25"
                            />
                            <circle
                                cx="334"
                                cy="334"
                                r="252.75"
                                stroke="#D9D9D9"
                                strokeWidth="0.5"
                            />
                            <circle cx="368" cy="357" r="203.5" stroke="#D9D9D9" />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="relative mb-10 flex w-[95%] -translate-y-[10%] flex-wrap items-center justify-evenly
            gap-4  lg:-translate-y-[15%]  ">
                {FeaturesInfo.map((item, id) => {
                    return (
                        <div
                            key={id}
                            className="card_border  mx-2 rounded-2xl p-[2px]
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]"
                        >
                            <Card
                                key={id}
                                className="h-[200px] w-[300px] rounded-2xl border-none bg-black p-0  md:h-[225px]  lg:w-[400px] "
                            >
                                <CardHeader className=" m-auto flex h-full flex-col justify-evenly p-4">
                                    {item.icon}
                                    <CardTitle
                                        className={cn(
                                            "text-md font-bold text-white md:text-[20px]",
                                        )}
                                    >
                                        {item.header}
                                    </CardTitle>
                                    <CardDescription
                                        className={cn(
                                            "py-2 text-sm text-whitesmoke md:text-[16px]",
                                            secondary_jakarta.className,
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
        </section>
    );
};
