import { Button } from "./ui/button"

export const TopFeaturesSection = () => {
    return (
        <section className=" w-[1262px] flex flex-col items-end justify-start gap-[29px] max-w-full text-left text-16xl-9 text-white font-plus-jakarta-sans">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[29px]">
                <Button className="cursor-pointer  bg-black
                shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]
                rounded-3xl overflow-hidden flex flex-row items-start
                justify-start whitespace-nowrap z-[4] border-[0.3px] border-solid border-cornflowerblue-300 
                hover:bg-darkslategray-300 hover:box-border hover:border-[0.3px] 
                hover:border-solid hover:border-cornflowerblue-600">
                    Our Top 3 Features
                </Button>
            </div>
            <div className=" flex flex-row items-end justify-center gap-[45px] max-w-full lg:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[115px] box-border min-w-[431px] min-h-[431px] max-w-full mq800:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[27px] max-w-full mq800:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[373px] max-w-full mq450:min-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
                                <Button className="cursor-pointer  bg-black 
                                shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] rounded-3xl
                                box-border overflow-hidden flex flex-row items-start
                                justify-start whitespace-nowrap border-[2px]
                                border-solid border-darkslateblue-100 hover:bg-darkslategray-300
                                hover:box-border hover:border-[2px] hover:border-solid hover:border-cornflowerblue-500">
                                    Customer Support
                                </Button>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                                    <div className="relative leading-[52px]
                                    font-medium inline-block max-w-full lg:text-4xl ">
                                        {`Instant Support, No `}
                                        <span className="text-cornflowerblue-200">Wait {" "}</span>
                                        Times
                                    </div>
                                    <div className="self-stretch relative text-xl leading-[27px] font-light whitespace-pre-wrap mq450:text-base mq450:leading-[22px]">
                                        Long wait times? Missed calls? Not on our watch. VoiceFirst
                                        AI ensures every customer feels heard and helped, right when
                                        they need it.
                                    </div>
                                </div>
                                <Button size="lg" className="cursor-pointer  bg-black
                                shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]
                                rounded-xl overflow-hidden 
                                whitespace-nowrap border-[1.5px]
                                border-solid border-cornflowerblue-300
                                px-20 py-8
                                text-lg
                                text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]
                                hover:bg-darkslategray-300 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-cornflowerblue-600">
                                    Customer First
                                </Button>
                            </div>
                        </div>
                        <Button className="py-[21px] px-2 bg-black h-[62px] w-[62px] shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] rounded-17xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center z-[4] border-[1.5px] border-solid border-cornflowerblue-300">
                            <img
                                className="h-[43px] w-[43px] relative overflow-hidden shrink-0"
                                alt=""
                                src="/clocksvgrepocom-3-1.svg"
                            />
                        </Button>
                    </div>
                </div>
                <div className="w-[554px] rounded-2xs bg-white  overflow-hidden
                shrink-0 flex flex-col items-end justify-start pt-[47px]
                px-[4.6px] pb-[137.6px] box-border gap-[2.6px] min-w-[554px] max-w-full text-xl-6 mq800:min-w-full mq1125:flex-1">
                    <div className="h-[212.9px] flex flex-row items-start justify-end py-0 px-11 box-border">
                        <div className="self-stretch flex flex-row items-start justify-start relative">
                            {/* Add animation */}
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex flex-row items-end justify-center gap-[45px] max-w-full lg:flex-wrap">
                <div className="w-[554px] rounded-2xs bg-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[47px] px-[4.6px] pb-[137.6px] box-border gap-[2.6px] min-w-[554px] max-w-full text-xl-6 mq800:min-w-full mq1125:flex-1">
                    <div className="h-[212.9px] flex flex-row items-start justify-end py-0 px-11 box-border">
                        <div className="self-stretch flex flex-row items-start justify-start relative">
                            {/* Add animation */}
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[115px] box-border min-w-[431px] min-h-[431px] max-w-full mq800:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[27px] max-w-full mq800:flex-wrap">
                        <Button className="py-[21px] px-2 bg-black h-[62px] w-[62px] shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)] rounded-17xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center z-[4] border-[1.5px] border-solid border-cornflowerblue-300">
                            <img
                                className="h-[43px] w-[43px] relative overflow-hidden shrink-0"
                                alt=""
                                src="/clocksvgrepocom-3-1.svg"
                            />
                        </Button>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border min-w-[373px] max-w-full mq450:min-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
                                <Button className="cursor-pointer  bg-black 
                                shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)] rounded-3xl
                                box-border overflow-hidden flex flex-row items-start
                                justify-start whitespace-nowrap border-[2px]
                                border-solid border-darkslateblue-100 hover:bg-darkslategray-300
                                hover:box-border hover:border-[2px] hover:border-solid hover:border-cornflowerblue-500">
                                    Customer Support
                                </Button>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                                    <div className="relative leading-[52px]
                                    font-medium inline-block max-w-full lg:text-4xl ">
                                        {`Instant Support, No `}
                                        <span className="text-cornflowerblue-200">Wait {" "}</span>
                                        Times
                                    </div>
                                    <div className="self-stretch relative text-xl leading-[27px] font-light whitespace-pre-wrap mq450:text-base mq450:leading-[22px]">
                                        Long wait times? Missed calls? Not on our watch. VoiceFirst
                                        AI ensures every customer feels heard and helped, right when
                                        they need it.
                                    </div>
                                </div>
                                <Button size="lg" className="cursor-pointer  bg-black
                                shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]
                                rounded-xl overflow-hidden 
                                whitespace-nowrap border-[1.5px]
                                border-solid border-cornflowerblue-300
                                px-20 py-8
                                text-lg
                                text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#c6d9ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]
                                hover:bg-darkslategray-300 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-cornflowerblue-600">
                                    Customer First
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
