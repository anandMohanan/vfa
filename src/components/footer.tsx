
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { primary_font, secondary_jakarta } from "@/lib/font";
import Link from "next/link";

export const FooterSection = () => {
    return (
        <footer id="footer text-white">
            <section className="py-10 flex justify-around  gap-y-8">
                <div className="flex text-xl text-white ">
                    <svg width="190" height="38" viewBox="0 0 190 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_464_456)">
                            <path d="M31.4742 31.3648C29.8934 31.3648 28.4444 30.9899 27.127 30.24C25.83 29.4901 24.7964 28.4667 24.0262 27.1696C23.2561 25.8725 22.871 24.4032 22.871 22.7616C22.871 21.0997 23.2561 19.6304 24.0262 18.3536C24.7964 17.0565 25.83 16.0432 27.127 15.3136C28.4241 14.5637 29.8732 14.1888 31.4742 14.1888C33.0956 14.1888 34.5446 14.5637 35.8214 15.3136C37.1185 16.0432 38.142 17.0565 38.8918 18.3536C39.662 19.6304 40.047 21.0997 40.047 22.7616C40.047 24.4235 39.662 25.9029 38.8918 27.2C38.1217 28.4971 37.0881 29.5205 35.791 30.2704C34.494 31 33.055 31.3648 31.4742 31.3648ZM31.4742 28.1728C32.447 28.1728 33.3084 27.9397 34.0582 27.4736C34.8081 27.0075 35.3958 26.3691 35.8214 25.5584C36.2673 24.7275 36.4902 23.7952 36.4902 22.7616C36.4902 21.728 36.2673 20.8059 35.8214 19.9952C35.3958 19.1845 34.8081 18.5461 34.0582 18.08C33.3084 17.6139 32.447 17.3808 31.4742 17.3808C30.5217 17.3808 29.6604 17.6139 28.8902 18.08C28.1404 18.5461 27.5425 19.1845 27.0966 19.9952C26.671 20.8059 26.4582 21.728 26.4582 22.7616C26.4582 23.7952 26.671 24.7275 27.0966 25.5584C27.5425 26.3691 28.1404 27.0075 28.8902 27.4736C29.6604 27.9397 30.5217 28.1728 31.4742 28.1728ZM43.4008 31V14.5536H46.836V31H43.4008ZM43.4008 12.304V8.352H46.836V12.304H43.4008ZM58.6651 31.3648C57.0235 31.3648 55.5643 30.9899 54.2875 30.24C53.031 29.4699 52.0278 28.4363 51.2779 27.1392C50.5483 25.8421 50.1835 24.3728 50.1835 22.7312C50.1835 21.1099 50.5483 19.6507 51.2779 18.3536C52.0075 17.0565 53.0107 16.0432 54.2875 15.3136C55.5643 14.5637 57.0235 14.1888 58.6651 14.1888C59.7798 14.1888 60.8235 14.3915 61.7963 14.7968C62.7691 15.1819 63.6102 15.7189 64.3195 16.408C65.0491 17.0971 65.5862 17.8976 65.9307 18.8096L62.9211 20.208C62.5766 19.3568 62.0193 18.6779 61.2491 18.1712C60.4993 17.6443 59.6379 17.3808 58.6651 17.3808C57.7329 17.3808 56.8918 17.6139 56.1419 18.08C55.4123 18.5259 54.8347 19.1643 54.4091 19.9952C53.9835 20.8059 53.7707 21.728 53.7707 22.7616C53.7707 23.7952 53.9835 24.7275 54.4091 25.5584C54.8347 26.3691 55.4123 27.0075 56.1419 27.4736C56.8918 27.9397 57.7329 28.1728 58.6651 28.1728C59.6582 28.1728 60.5195 27.9195 61.2491 27.4128C61.999 26.8859 62.5563 26.1867 62.9211 25.3152L65.9307 26.744C65.6065 27.6155 65.0795 28.4059 64.3499 29.1152C63.6406 29.8043 62.7995 30.3515 61.8267 30.7568C60.8539 31.1621 59.8001 31.3648 58.6651 31.3648ZM77.0099 31.3648C75.3683 31.3648 73.9091 30.9899 72.6323 30.24C71.3758 29.4699 70.3928 28.4363 69.6835 27.1392C68.9741 25.8219 68.6195 24.3525 68.6195 22.7312C68.6195 21.0693 68.9741 19.6 69.6835 18.3232C70.4131 17.0464 71.3859 16.0432 72.6019 15.3136C73.8179 14.5637 75.196 14.1888 76.7363 14.1888C77.9726 14.1888 79.0771 14.4016 80.0499 14.8272C81.0227 15.2528 81.8435 15.8405 82.5123 16.5904C83.1811 17.32 83.6878 18.1611 84.0323 19.1136C84.3971 20.0661 84.5795 21.0795 84.5795 22.1536C84.5795 22.4171 84.5693 22.6907 84.5491 22.9744C84.5288 23.2581 84.4883 23.5216 84.4275 23.7648H71.3251V21.0288H82.4819L80.8403 22.2752C81.043 21.2821 80.972 20.4005 80.6275 19.6304C80.3032 18.84 79.7966 18.2219 79.1075 17.776C78.4387 17.3099 77.6483 17.0768 76.7363 17.0768C75.8243 17.0768 75.0136 17.3099 74.3043 17.776C73.595 18.2219 73.0478 18.8704 72.6627 19.7216C72.2776 20.5525 72.1256 21.5659 72.2067 22.7616C72.1053 23.8763 72.2573 24.8491 72.6627 25.68C73.0883 26.5109 73.676 27.1595 74.4259 27.6256C75.196 28.0917 76.0675 28.3248 77.0403 28.3248C78.0333 28.3248 78.8744 28.1019 79.5635 27.656C80.2728 27.2101 80.8302 26.6325 81.2355 25.9232L84.0323 27.2912C83.708 28.0613 83.2014 28.7605 82.5123 29.3888C81.8435 29.9968 81.0328 30.4832 80.0803 30.848C79.148 31.1925 78.1246 31.3648 77.0099 31.3648ZM88.2664 31V8.352H103.01V11.544H91.8536V18.3536H101.794V21.5456H91.8536V31H88.2664ZM105.685 31V14.5536H109.12V31H105.685ZM105.685 12.304V8.352H109.12V12.304H105.685ZM113.137 31V14.5536H116.42V17.8672L116.116 17.3808C116.481 16.3067 117.068 15.5365 117.879 15.0704C118.69 14.584 119.663 14.3408 120.798 14.3408H121.801V17.472H120.372C119.237 17.472 118.315 17.8267 117.606 18.536C116.916 19.2251 116.572 20.2181 116.572 21.5152V31H113.137ZM130.231 31.3648C128.549 31.3648 127.069 30.9493 125.792 30.1184C124.536 29.2875 123.654 28.1728 123.148 26.7744L125.792 25.528C126.238 26.4603 126.846 27.2 127.616 27.7472C128.407 28.2944 129.278 28.568 130.231 28.568C131.041 28.568 131.7 28.3856 132.207 28.0208C132.713 27.656 132.967 27.1595 132.967 26.5312C132.967 26.1259 132.855 25.8016 132.632 25.5584C132.409 25.2949 132.126 25.0821 131.781 24.92C131.457 24.7579 131.123 24.6363 130.778 24.5552L128.194 23.8256C126.775 23.4203 125.711 22.8123 125.002 22.0016C124.313 21.1707 123.968 20.208 123.968 19.1136C123.968 18.1205 124.222 17.2592 124.728 16.5296C125.235 15.7797 125.934 15.2021 126.826 14.7968C127.718 14.3915 128.721 14.1888 129.836 14.1888C131.335 14.1888 132.673 14.5637 133.848 15.3136C135.024 16.0432 135.855 17.0667 136.341 18.384L133.696 19.6304C133.372 18.84 132.855 18.2117 132.146 17.7456C131.457 17.2795 130.677 17.0464 129.805 17.0464C129.055 17.0464 128.457 17.2288 128.012 17.5936C127.566 17.9381 127.343 18.3941 127.343 18.9616C127.343 19.3467 127.444 19.6709 127.647 19.9344C127.849 20.1776 128.113 20.3803 128.437 20.5424C128.761 20.6843 129.096 20.8059 129.44 20.9072L132.116 21.6976C133.473 22.0827 134.517 22.6907 135.247 23.5216C135.976 24.3323 136.341 25.3051 136.341 26.44C136.341 27.4128 136.078 28.2741 135.551 29.024C135.044 29.7536 134.335 30.3312 133.423 30.7568C132.511 31.1621 131.447 31.3648 130.231 31.3648ZM146.821 31.1824C145.098 31.1824 143.76 30.696 142.808 29.7232C141.855 28.7504 141.379 27.3824 141.379 25.6192V17.6544H138.491V14.5536H138.947C139.717 14.5536 140.315 14.3307 140.741 13.8848C141.166 13.4389 141.379 12.8309 141.379 12.0608V10.784H144.814V14.5536H148.553V17.6544H144.814V25.4672C144.814 26.0347 144.905 26.5211 145.088 26.9264C145.27 27.3115 145.564 27.6155 145.969 27.8384C146.375 28.0411 146.902 28.1424 147.55 28.1424C147.712 28.1424 147.895 28.1323 148.097 28.112C148.3 28.0917 148.493 28.0715 148.675 28.0512V31C148.391 31.0405 148.077 31.0811 147.733 31.1216C147.388 31.1621 147.084 31.1824 146.821 31.1824ZM155.669 31L163.634 8.352H168.073L176.037 31H172.207L170.474 25.9232H161.263L159.5 31H155.669ZM162.297 22.7312H169.38L165.367 10.8752H166.37L162.297 22.7312ZM178.724 31V8.352H182.311V31H178.724Z" fill="white" />
                        </g>
                        <path d="M5.06667 11.4C5.06667 12.7992 3.93245 13.9334 2.53333 13.9334C1.13421 13.9334 0 12.7992 0 11.4C0 10.0009 1.13421 8.8667 2.53333 8.8667C3.93245 8.8667 5.06667 10.0009 5.06667 11.4Z" fill="white" />
                        <path d="M7.60011 20.2667C7.60011 21.6659 6.4659 22.8001 5.06678 22.8001C3.66766 22.8001 2.53345 21.6659 2.53345 20.2667C2.53345 18.8676 3.66766 17.7334 5.06678 17.7334C6.4659 17.7334 7.60011 18.8676 7.60011 20.2667Z" fill="white" />
                        <circle cx="11.4" cy="29.1334" r="2.53333" fill="white" />
                        <circle cx="20.2667" cy="11.4" r="2.53333" fill="white" />
                        <circle cx="17.7333" cy="20.2667" r="2.53333" fill="white" />
                        <defs>
                            <clipPath id="clip0_464_456">
                                <rect width="190" height="38" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                <div className="flex flex-col gap-2">
                    <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Email</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
                        >
                            xyz@voicefirstai.com
                        </a>
                    </div>

                    <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Phone Number</h3>
                    <div>
                        <a
                            rel="noreferrer noopener"
                            href="#"
                            className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
                        >
                            +1 123 456 7890
                        </a>
                    </div>
                </div>


            </section>

        </footer>
    );
};
// <div className="flex flex-col gap-2"> <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Company</h3> <div> <a rel="noreferrer noopener" href="#" className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)} > Blog </a> </div> <div> <a rel="noreferrer noopener" href="#" className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)} > Careers </a>
//     </div>
//
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Pricing
//         </a>
//     </div>
// </div>
//
// <div className="flex flex-col gap-2">
//     <h3 className={cn("font-bold text-lg text-white", primary_font.className)}>Resources</h3>
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Documentation
//         </a>
//     </div>
//
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Papers
//         </a>
//     </div>
//
//     <div>
//         <a
//             rel="noreferrer noopener"
//             href="#"
//             className={cn("opacity-60 hover:opacity-100 text-white", secondary_jakarta.className)}
//         >
//             Presentation
//         </a>
//     </div>
// </div>
