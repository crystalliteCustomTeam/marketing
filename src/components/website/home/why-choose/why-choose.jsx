// Next
import dynamic from "next/dynamic";
// Components
import { CTAGroupLight } from "@/components/CTA/CTA";
const Cards = dynamic(() => import("./cards/cards"))
export default function WhyChoose() {
    return (
        <section>
            <div className="relative lg:py-[100px] md:py-[80px] py-[60px]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
                        <div className="">
                            <h2 className="text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] font-mono text-black mb-3 max-w-[500px]">Why choose Book Marketing?</h2>
                            <p className="xl:text-[18px] md:text-[16px] text-[14px] leading-normal text-navy max-w-[690px]">Book Marketing provides comprehensive ghostwriting services to aid authors in writing their books and being one step closer to being accomplished. Our book-writing experts have in-depth experience of 10+ years and are committed to meeting all your expectations and bringing your ghostwriting dream to life.</p>
                            <div className="flex items-center gap-4 mt-10">
                                <CTAGroupLight/>
                            </div>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </section>
    )
}
