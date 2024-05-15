import Image from "next/image"
import { Button } from "./ui/button"

export const ActivateSection = () => {
    return (
        <section className="flex">
            <div className="flex flex-col justify-around  text-white  py-32 ml-28">
                <h3 className="text-6xl">
                    Ready To have Your Automation Assistant That Help You ?
                </h3>
                <p className="tracking-tight text-3xl">
                    If you have any questions or need further information about our
                    innovative voice AI products and features, please don't hesitate to get in touch with us.
                </p>
                <Button variant={"outline"} size={"sm"} className="w-80 rounded-3xl mt-10 p-6">Activate Voice First AI</Button>
            </div>
            <Image src="/activate.png" alt="activate" width={800} height={800} />
        </section>
    )

}
