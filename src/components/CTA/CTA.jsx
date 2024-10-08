export function CTA({
    text = "Get Started",
    link = "javascript:;",
    icon = "chat",
    css = "bg-gradient"
}) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<a href='${link}' class='inline-flex items-center text-sm md:text-base leading-none w-max px-3 md:px-0 h-[40px] md:w-[200px] md:h-[50px] rounded-xl ${css} justify-center gap-2 uppercase transition-all duration-300'>
                    ${icon === "chat" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/chat.png" width="16" height="16" />` :
                        ``}
                    ${icon === "chat-pink" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/chat-pink.png" width="17" height="17" />` :
                        ``}
                    ${icon === "call" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/call-pink.png" width="17" height="16" />` :
                        ``}
                    ${icon === "call-pink" ?
                        `<img loading="lazy" alt="domain" class='transition-all duration-300' src="/icons/call-pink.png" width="17" height="16" />` :
                        ``}
                    <span>${text}</span>
                </a>`
            }}
        />
    )
}


export function CTAGroupDark() {
    return (
        <>
            <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none" />
            <CTA icon="call" css="bg-transparent border-2 border-white hover:text-pink hover:border-pink [&>img]:brightness-0 [&>img]:invert [&:hover>img]:invert-0 [&:hover>img]:brightness-[inherit]" text="(833) 0001 - 2222" />
        </>
    )
}

export function CTAGroupLight() {
    return (
        <>
            <CTA css="hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none text-white" />
            <CTA icon="call-pink" css="bg-transparent border-2 text-pink border-pink hover:text-black hover:border-black [&:hover>img]:brightness-0 [&:hover>img]:invert-0" text="(833) 0001 - 2222" />
        </>
    )
}
