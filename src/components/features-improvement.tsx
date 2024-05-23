

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { primary_font, secondary_jakarta } from "@/lib/font"
import { FingerprintIcon, PiechartIcon, PopoutIcon, RefreshIcon, RocketIcon, TranslateIcon } from "@/lib/icons"

export const FeaturesImprovementSection = () => {
    const FeaturesInfo = [
        {
            icon: <RocketIcon />,
            header: "Super Fast",
            description: "No wait times for customer queries, Engage leads with zero delay"
        },
        {
            icon: <TranslateIcon />,
            header: "Multi-Lingual Mastery",
            description: "Communicate in every customer's  language"
        },
        {
            icon: <PiechartIcon />,
            header: "Engagement Analytics",
            description: "Gain insights from every customer exchange,  Make informed decisions swiftly"
        },
        {
            icon: <PopoutIcon />,
            header: "Scaling Support",
            description: "Scale support with fluctuating  customer volume Consistent quality,  regardless of demand"
        },
        {
            icon: <RefreshIcon />,
            header: "Continuously Improving",
            description: "Leverage previous conversations to perfect the conversations"
        },
        {
            icon: <FingerprintIcon />,
            header: "Human Like Touch",
            description: "Engage customers with a warm, conversational tone,  answering complex queries"
        },
    ]
    return (
        <section className="relative min-h-screen w-full  md:p-10 flex flex-col items-center ">
            <div className="relative md:block  feature_box rounded-xl  w-[80%]   h-[338px]   ">
                <div className="md:absolute  flex  flex-col   p-10 gap-5  justify-center ">

                    <Button className={cn(" md:text-[20px] text-sm md:text-left text-center text-white bg-black w-fit",
                        "shadow-[0px_0px_6.9px_rgba(82,79,_255,_0.15)] ",
                        " overflow-hidden whitespace-nowrap",
                        "text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                        "[-webkit-background-clip:text]  [-webkit-text-fill-color:transparent]",
                        "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] ", primary_font.className)}>
                        Agent&apos;s Capability
                    </Button>
                    <h3 className={cn("md:text-[36px] text-center md:text-left  text-md font-semibold text-white", primary_font.className)}>
                        Talk to Your Customers Right Away
                    </h3>
                </div>
                <div className=" absolute flex w-full justify-between  items-end ">
                    <svg className="hidden md:block" width="339" height="298" viewBox="0 0 339 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <circle cx="282" cy="282" r="281.875" transform="matrix(-1 0 0 1 339 0)" stroke="#D9D9D9" stroke-width="0.25" />
                            <circle cx="253" cy="253" r="252.75" transform="matrix(-1 0 0 1 258 81)" stroke="#D9D9D9" stroke-width="0.5" />
                            <circle cx="204" cy="204" r="203.5" transform="matrix(-1 0 0 1 175 153)" stroke="#D9D9D9" />
                        </g>
                    </svg>
                    <svg className="hidden md:block" width="289" height="298" viewBox="0 0 289 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <circle cx="282" cy="282" r="281.875" stroke="#D9D9D9" stroke-width="0.25" />
                            <circle cx="334" cy="334" r="252.75" stroke="#D9D9D9" stroke-width="0.5" />
                            <circle cx="368" cy="357" r="203.5" stroke="#D9D9D9" />
                        </g>
                    </svg>

                </ div>
            </div>

            <div className="relative -translate-y-[10%] lg:-translate-y-[15%] flex flex-wrap w-[80%] items-center justify-center  gap-4  lg:p-8 mb-10 ">
                {
                    FeaturesInfo.map((item, id) => {
                        return (
                            <div key={id} className="card_border  mx-2 p-[2px] rounded-2xl
            shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]">
                                <Card key={id} className="md:h-[225px] bg-black lg:w-[400px] w-[300px] h-[200px] p-0  border-none  rounded-2xl ">
                                    <CardHeader className=" m-auto h-full flex flex-col justify-evenly p-4" >
                                        {item.icon}
                                        <CardTitle className={cn("text-white md:text-[20px] font-bold text-md")}>{item.header}</CardTitle>
                                        <CardDescription className={cn("md:text-[16px] text-sm py-2 text-whitesmoke", secondary_jakarta.className)}>
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>

                        )
                    })
                }
            </div>
        </section >

    )

}
