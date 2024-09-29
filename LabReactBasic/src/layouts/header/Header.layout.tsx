import { PropsWithChildren } from "react"

export const HeaderLayout = (props: PropsWithChildren) => {
   
    return (
        <header>
            {props.children}
        </header>
    )
}