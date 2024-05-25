"use client"
import z from "zod"
import PhoneInput from "./phone-input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { isValidPhoneNumber } from "react-phone-number-input";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useFormspark } from "@formspark/use-formspark"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import Captcha from "react-google-recaptcha"
import { useState } from "react"

const formSchema = z.object({
    company_name: z.string().min(2).max(50),
    work_email: z.string().email(),
    usage: z.string().min(2).max(500),
    expected_engagements: z.string().min(2).max(500),
    phone_number: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    founder_call: z.boolean().default(false).optional()

})

export const SubmitFormComponent = () => {
    const [submit, submitting] = useFormspark({
        formId: process.env.NEXT_PUBLIC_FORMSPARK_ID!,
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            company_name: "",
            work_email: "",
            usage: "",
            expected_engagements: "",
            phone_number: "",
            founder_call: false
        },
    })
    const { toast } = useToast()
    const [captchaCompleted, setCaptchaCompleted] = useState(false)
    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (captchaCompleted === false) {
            toast({
                title: "Error",
                description: "Please complete captcha",
                variant: "destructive",
            })
            return
        } else {
            await submit({ ...values })
            toast({
                title: "Thank you for your submission!",
                description: "We will get back to you shortly.",
                variant: "default",
            })
        }

    }
    const recaptchaChange = (value: string | null) => {
        setCaptchaCompleted(true)
    }
    return (
        <div className="flex items-center p-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name={"company_name"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-[16px]" htmlFor={field.name}>
                                    Company Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Where do you work?"
                                        className="bg-black border-cornflowerblue-200 text-white  "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"work_email"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-[16px]" htmlFor={field.name}>
                                    Work Email
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Work Email address"
                                        className="bg-black border-cornflowerblue-200 text-white  "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <PhoneInput name={"phone_number"}
                        control={form.control}
                        label={"Phone Number"}
                        placeholder={"what's your phone Number"}
                    />
                    <FormField
                        control={form.control}
                        name={"usage"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-[16px]" htmlFor={field.name}>
                                    Use of Voice First Agents
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="What are you hoping to use Voice First Agents for?"
                                        className="bg-black border-cornflowerblue-200 text-white  "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={"expected_engagements"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-[16px]" htmlFor={field.name}>
                                    Expected Customer Engagements
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="No of expected customer engagements per month "
                                        className="bg-black border-cornflowerblue-200 text-white  "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="founder_call"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="border-cornflowerblue-200"
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-white text-[16px]">
                                        Would you like a call with one of our founders for enterprise program
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                    <Captcha sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA!} onChange={recaptchaChange} />

                    <Button type="submit" disabled={!captchaCompleted}>{submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Submit</Button>
                </form>
            </Form>
        </div>
    )



}
