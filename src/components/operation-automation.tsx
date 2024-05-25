import { Button, buttonVariants } from "./ui/button";
import ani from "../../public/operation-automation-flow.json";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { primary_font  } from "@/lib/font";
import { LottieAnimation } from "./animation";
import Link from "next/link";

export const OperationAutomationSection = () => {
  return (
    <section className="relative mt-40 flex max-w-full flex-col items-end justify-start text-left text-white md:mb-10  lg:mt-56">
      <div className="mt-10 flex max-w-full flex-col ">
        <Button
          className={cn(
            " cursor-normal absolute left-[28%] top-[5%] m-auto bg-[transparent] md:left-[38%] md:top-[2%]  lg:left-[42%] lgxl:left-[25%]",
            "lgxl:p-8 lgxl:px-24 lg2xl:p-4 lg2xl:px-16 lg3xl:p-6 lg3xl:px-20",
            "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px] ",
            "shadow-[0px_0px_6.9px_rgba(82, _79, _255, _0.15)] rounded-lg",
            "     overflow-hidden [background:linear-gradient(97.31deg,_#b68bfc,_#7354ef_47.79%,_#5e25ff)]",
            "z-[1] whitespace-nowrap  hover:bg-darkslategray-500",
            "hover:box-border  hover:border-darkslategray-300",
            primary_font.className,
          )}
        >
          Operation Automation
        </Button>
        <div
          className="mt-6 
                 flex  min-w-full max-w-full flex-col items-start justify-center
               rounded-xl 
            border
               border-gray-100
               p-6
               [background:linear-gradient(97.31deg,_#0a0a0a,_#000000)]
                md:mt-0 md:p-10  lg:flex-row  "
        >
          <div
            className="box-border flex max-w-full  flex-col items-start justify-start 
                    rounded-xl px-0 pb-0 md:w-[575px] md:min-w-[575px] lg:pt-[134px] "
          >
            <div className="flex max-w-full flex-col items-start justify-start gap-[43px]">
              <div className="flex max-w-full flex-row items-start justify-start py-0 pl-2 pr-0">
                <div className="flex max-w-full flex-1 flex-col items-center justify-center gap-[8px] lg:items-start lg:justify-start">
                  <h3
                    className={cn(
                      "md:leading-[52px]",
                      "text-center font-medium capitalize lg:text-left",
                      "text-2xl md:text-4xl",
                      primary_font.className,
                    )}
                  >
                    {`Automate workflows for `}
                    <span
                      className="!bg-clip-text
                                        text-transparent [-webkit-background-clip:text]
                                        [-webkit-text-fill-color:transparent] [background:linear-gradient(91.85deg,_#4e62ca,_#4a60d9)]"
                    >
                      seamless{" "}
                    </span>
                    collaboration
                  </h3>
                  <p
                    className={cn(
                      "text-md text-center opacity-80 md:text-xl lg:text-left",
                      "whitespace-pre-wrap font-light leading-[20px] ",
                      primary_font.className,
                    )}
                  >
                    Enhance team communication and process flow, as our agents
                    smoothly integrates with and automates your operational
                    communications.
                  </p>
                </div>
              </div>
              <Link
                href={`/submit`}
                className={cn(
                  buttonVariants(),
                  "bg-black shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                  "overflow-hidden rounded-xl",
                  "md:px-10 md:py-7",
                  "px-6 py-4",
                  "text-md",
                  "m-auto",
                  "lg:m-0",
                  "md:text-xl",
                  "whitespace-nowrap ",
                  "border-[1.5px] border-cornflowerblue-300 hover:bg-darkslategray-300",
                  " hover:border-cornflowerblue-600",
                  primary_font.className,
                )}
              >
                Experience the efficiency
              </Link>
            </div>
          </div>
          <div
            className="relative mt-8 flex min-w-[200px] max-w-full flex-1 flex-col items-start justify-start gap-[20px]
                   md:mt-8 md:min-w-[408px] lg:mt-0"
          >
            <LottieAnimation ani={ani} />
          </div>
        </div>
      </div>
    </section>
  );
};
