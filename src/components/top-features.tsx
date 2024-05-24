import { LineSvg } from "@/lib/icons";
import { Button, buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import { primary_font, secondary_jakarta } from "@/lib/font";
import { cn } from "@/lib/utils";

import CustomerCallFlow from "../../public/flow-6.json";
import CustomerChatFlow from "../../public/customer-chat-flow.json";

import { LottieAnimation } from "./animation";
import Link from "next/link";

export const TopFeaturesSection = () => {
  return (
    <section className="top_section w-full">
      <div className="relative m-auto hidden items-center justify-center p-2 lg:flex">
        <div className="top-0 z-10 hidden lg:absolute lg:block">
          <LineSvg className="" />
        </div>
        <Badge
          variant={"outline"}
          className={cn(
            "z-20 hidden p-2 px-8 text-sm text-white md:block md:text-[30px]",
            "border-none bg-black font-[700px]",
            "lgxl:p-4 lgxl:px-16 lg2xl:p-6 lg2xl:px-20 lg3xl:p-8 lg3xl:px-24",
            "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px]",
            secondary_jakarta.className,
          )}
        >
          <span className="!bg-clip-text text-transparent [background:linear-gradient(91.92deg,_#fff,_#698aff)]">
            Your 24/7 AI Agents
          </span>
        </Badge>
      </div>
      <div
        className="md:gap-34 mt-5 flex flex-col lg:mt-0 
        lg:max-h-[80vh] lg:flex-row lg:gap-0 lg:p-0"
      >
        <div
          className="z-50 mb-10 flex flex-col items-center
           gap-5 md:p-6 lg:mb-0 lg:h-[80vh] 
         lg:w-1/2 lg:items-center lg:justify-center lgxl:p-0"
        >
          <div className="flex flex-col gap-6 ">
            <Badge
              className={cn(
                "m-auto w-fit text-center text-[16px] text-white md:text-[20px]  lg:m-0",
                "border-[0.3px] bg-black",
                "lgxl:p-4 lgxl:px-16 lg2xl:p-6 lg2xl:px-20 lg3xl:p-8 lg3xl:px-24",
                "!bg-clip-text text-transparent [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px]",
                "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]",
                secondary_jakarta.className,
              )}
            >
              Customer Support
            </Badge>
            <h3
              className={cn(
                "text-[24px] font-[500px] text-white md:text-[35.94px]",
                "text-center lg:text-left lgxl:text-[40px] lg2xl:text-[50px] lg3xl:text-[50px]",
                secondary_jakarta.className,
              )}
            >
              Instant Support, No{" "}
              <span
                className="
                !bg-clip-text text-transparent [-webkit-background-clip:text]
                [-webkit-text-fill-color:transparent] [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]"
              >
                Wait
              </span>{" "}
              Times
            </h3>
            <p
              className={cn(
                "m-auto w-[20rem] text-center font-thin tracking-tight text-white opacity-80 md:w-[25rem] md:text-[1.25rem] lg:m-0 lg:w-[32rem] lg:text-left lgxl:w-[50rem] lgxl:leading-[60px] lg2xl:text-[36px]",
                "text-[1rem] leading-[27px] lgxl:text-[28px] lgxl:leading-[32px] lg2xl:text-[26px] lg3xl:text-[26px]",
                secondary_jakarta.className,
              )}
            >
              Long wait times? Missed calls? Not on our watch. VoiceFirst Agents
              ensures every customer feels heard and helped, right when they
              need it.
            </p>
            <Link
              href="/submit"
              className={cn(
                buttonVariants(),
                "m-auto w-fit rounded-none font-bold lg:m-0",
                "text-[16px] md:p-6 md:text-[24px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
                "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                "lgxl:p-8 lg2xl:p-10 lg3xl:p-12",
                primary_font.className,
              )}
            >
              Customer First
            </Link>
          </div>
        </div>

        <div className=" h-full min-w-[30%] p-10 lg:m-auto lg:min-w-[20rem]">
          <LottieAnimation ani={CustomerCallFlow} className="" />
        </div>
      </div>
      <div
        className="md:gap-34 mt-24 flex flex-col lg:mt-0 
        lg:max-h-[80vh] lg:flex-row-reverse lg:gap-0 lg:p-0 "
      >
        <div
          className="z-50 mb-10 flex flex-col items-center
           gap-5 md:p-6 lg:mb-0 lg:h-[80vh] 
         lg:w-1/2 lg:items-center lg:justify-center lgxl:p-0"
        >
          <div className="flex flex-col gap-6 ">
            <Badge
              className={cn(
                "m-auto w-fit text-center text-[16px] text-white md:text-[20px]  lg:m-0",
                "border-[0.3px] bg-black",
                "lgxl:p-4 lgxl:px-16 lg2xl:p-6 lg2xl:px-20 lg3xl:p-8 lg3xl:px-24",
                "!bg-clip-text text-transparent [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
                "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px]",
                "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]",
                secondary_jakarta.className,
              )}
            >
              Agent-driven Outreach
            </Badge>
            <h3
              className={cn(
                "text-[24px] font-[500px] text-white md:text-[35.94px]",
                "text-center lg:text-left lgxl:text-[40px] lg2xl:text-[50px] lg3xl:text-[50px]",
                secondary_jakarta.className,
              )}
            >
              Accelerate Sales With{" "}
              <span
                className="
                !bg-clip-text text-transparent [-webkit-background-clip:text]
                [-webkit-text-fill-color:transparent] [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]"
              >
                Proactive
              </span>{" "}
              Outreach
            </h3>
            <p
              className={cn(
                "m-auto w-[20rem] text-center font-thin tracking-tight text-white opacity-80 md:w-[25rem] md:text-[1.25rem] lg:m-0 lg:w-[32rem] lg:text-left lgxl:w-[50rem] lgxl:leading-[60px] lg2xl:text-[36px]",
                "text-[1rem] leading-[27px] lgxl:text-[28px] lgxl:leading-[32px] lg2xl:text-[26px] lg3xl:text-[26px]",
                secondary_jakarta.className,
              )}
            >
              Proactively engage and follow up on leads, driving sales with
              timely and relevant conversations initiated by our AI.
            </p>
            <Link
              href="/submit"
              className={cn(
                buttonVariants(),
                "m-auto w-fit rounded-none font-bold lg:m-0",
                "text-[16px] md:p-6 md:text-[24px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
                "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
                "lgxl:p-8 lg2xl:p-10 lg3xl:p-12",
                primary_font.className,
              )}
            >
              Increase your sales
            </Link>
          </div>
        </div>

        <div className=" h-full min-w-[30%] p-10 lg:m-auto  lg:min-w-[18rem] ">
          <LottieAnimation ani={CustomerChatFlow} className="" />
        </div>
      </div>
      {/* <div className="flex lg:flex-row-reverse flex-col md:gap-34 lg:gap-56 items-center md:p-36 mt-28 lg:mt-0">
        <div className="flex flex-col items-center lg:w-1/2 z-50 lgxl:p-20 md:items-start gap-5 md:p-6 mb-10">
          <Badge
            className={cn(
              "text-white w-fit text-[16px] text-center m-auto lg:m-0 lg:text-center md:text-[20px]",
              "bg-black border-[0.3px]",
              "lgxl:p-4 lg2xl:p-6 lg3xl:p-8 lgxl:px-16 lg2xl:px-20 lg3xl:px-24",
              "text-transparent !bg-clip-text [background:linear-gradient(91.92deg,_#fff,_#698aff)]",
              "lgxl:text-[28px] lg2xl:text-[36px] lg3xl:text-[42px]",
              "shadow-[0px_0px_6.9px_rgba(82,_79,_255,_0.15)]",
              secondary_jakarta.className
            )}
          >
            Agent-driven Outreach
          </Badge>
          <h3
            className={cn(
              "text-white text-[24px] md:text-[35.94px] font-[500px]",
              "text-center lg:text-left lgxl:text-[50px] lg2xl:text-[50px] lg3xl:text-[50px]",
              secondary_jakarta.className
            )}
          >
            Accelerate Sales With{" "}
            <span
              className="
                text-transparent !bg-clip-text [background:linear-gradient(92.46deg,_#698aff,_#3f5399)]
                [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            >
              Proactive
            </span>{" "}
            Outreach
          </h3>
          <p
            className={cn(
              "text-white lg:w-[32rem] w-[20rem] md:w-[25rem] lgxl:w-[50rem] m-auto lg:m-0 tracking-tight font-thin opacity-80 lg:text-left text-center md:text-[1.25rem]",
              "text-[1rem] leading-[27px] lgxl:text-[20px] lg2xl:text-[30px] lg3xl:text-[30px]",
              secondary_jakarta.className
            )}
          >
            Proactively engage and follow up on leads, driving sales with timely
            and relevant conversations initiated by our AI.
          </p>

          <Link
            href="/submit"
            className={cn(
              buttonVariants(),
              "rounded-none font-bold m-auto lg:m-0",
              "md:p-6 md:text-[24px] text-[16px] lgxl:text-[34px] lg2xl:text-[42px] lg3xl:text-[50px]",
              "shadow-[1px_-1px_13.5px_4px_rgba(17,_14,_160,_0.53)]",
              "lgxl:p-8 lg2xl:p-10 lg3xl:p-12",
              primary_font.className
            )}
          >
            Increase your sales
          </Link>
        </div>
        <div className="flex flex-col items-center lg:w-1/2 z-50 lgxl:p-0 md:items-start gap-5 md:p-6 mb-10 min-w-[40%]">
          <LottieAnimation ani={CustomerChatFlow} className="" />
        </div>
      </div> */}
    </section>
  );
};
