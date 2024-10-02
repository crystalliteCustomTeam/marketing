export function CTA({
    text = "Get Started",
    link = "javascript:;",
    icon = "chat",
    bg = "bg-gradient"
}) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<a href='${link}' class='inline-flex items-center text-sm md:text-base leading-none w-max px-3 md:px-0 h-[40px] md:w-[200px] md:h-[50px] rounded-xl ${bg} justify-center gap-2 uppercase'>
                    ${icon === "chat" ?
                        `<img loading="lazy" src="/icons/chat.png" width="16" height="16" />` :
                        ``}
                    ${icon === "chat-pink" ?
                        `<img loading="lazy" src="/icons/chat-pink.png" width="17" height="17" />` :
                        ``}
                    ${icon === "call" ?
                        `<img loading="lazy" src="/icons/call.png" width="17" height="16" />` :
                        ``}
                    ${icon === "call-pink" ?
                        `<img loading="lazy" src="/icons/call-pink.png" width="17" height="16" />` :
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
            <CTA />
            <CTA icon="call" bg="bg-transparent border-2 border-white" text="(833) 0001 - 2222" />
        </>
    )
}

export function CTAGroupLight() {
    return (
        <>
            <CTA />
            <CTA icon="call-pink" bg="bg-transparent border-2 text-pink border-pink" text="(833) 0001 - 2222" />
        </>
    )
}
