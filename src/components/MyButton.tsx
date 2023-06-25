import type { MyButtonProps } from "~types"
import Image from "next/image"

const MyButton = ({
    title,
    containerStyle,
    textStyle,
    rightIcon,
    btnType,
    handleClick
} : MyButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}>
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
                </div>
            )}
        </button>
    )
}

export default MyButton