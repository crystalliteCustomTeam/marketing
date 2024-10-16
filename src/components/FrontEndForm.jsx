"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import { Form, FormControl, FormField, FormItem, FormMessage, Input, Textarea, FormLabel } from "@/components/shadcnui"
import { useState } from "react"
// Next
import { useRouter } from "next/navigation"

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "name cannot be empty",
    }),
    lastName: z.string(),
    phone: z.string({
        required_error: "phone is required",
        invalid_type_error: "phone must be a string",
    }).min(7, {
        message: "phone must be at least 7 characters.",
    }).max(14, {
        message: "phone must be at most 14 characters.",
    }).regex(/^\d+$/, {
        message: "phone number can only contain digits.",
    }),
    email: z.string().email({
        message: "please use a valid email",
    }),
    message: z.string(),
})

const FrontEndForm = ({ label = true, theme = false, lastName = false }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: ""
        }
    })
    const handleSubmit = async (values) => {
        setLoading(true)
        const filteredValues = Object.entries(values).reduce((acc, [key, value]) => {
            if (value !== '') {
                acc[key] = value
            }
            return acc
        }, {})

        console.log(filteredValues)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder={lastName ? "First Name" : "Type Full Name"} {...field} theme={theme} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {!lastName && <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder="Type Email" {...field} theme={theme} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />}
                    {lastName && <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Last Name <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} theme={theme} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />}
                </div>
                {lastName && <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>}
                            <FormControl>
                                <Input placeholder="Type Email" {...field} theme={theme} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Phone <span className="text-primary">*</span></FormLabel>}
                            <FormControl>
                                <Input placeholder="(000) 000-0000" {...field} theme={theme} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Details</FormLabel>}
                            <FormControl>
                                <Textarea placeholder="Type Full Details..." {...field} theme={theme} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit" className="inline-flex text-white items-center text-sm md:text-base leading-none px-3 md:px-0 h-[40px] w-[200px] md:h-[50px] rounded-xl bg-gradient justify-center uppercase transition-all duration-300 mt-5 hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] hover:bg-none">
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
        </Form>
    )
}

export default FrontEndForm