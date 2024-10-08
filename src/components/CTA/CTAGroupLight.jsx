// Components
import { CTA } from "./CTA"

export function CTAGroupLight() {
    return (
        <>
            <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none text-white" />
            <CTA icon="call-pink" css="bg-transparent border-2 text-pink border-pink hover:text-black hover:border-black [&:hover>img]:brightness-0 [&:hover>img]:invert-0" text="(833) 0001 - 2222" />
        </>
    )
}