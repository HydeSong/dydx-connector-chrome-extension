import type { MouseEventHandler } from "react"

export interface MyButtonProps {
    title: string
    containerStyle?: string
    textStyle?: string
    rightIcon?: string
    btnType?: "button" | "submit"
    isDisabled?: boolean
    handleClick?: MouseEventHandler<HTMLButtonElement>
}