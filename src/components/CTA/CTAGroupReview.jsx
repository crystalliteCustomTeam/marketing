import { CTA } from "./CTA";

export default function CTAGroupReviews() {
    return (
        <>
            <CTA icon="chevron-pink" css="!rounded-full bg-transparent border-2 border-black hover:text-pink hover:border-pink [&>img]:brightness-0 [&:hover>img]:brightness-100 font-manrope font-medium gap-4 " text="Clutch review" />
            <CTA icon="chevron-white" css="!rounded-full bg hover:bg-black text-white font-manrope font-medium gap-4 hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none" text="View case study" />
        </>
    )
};