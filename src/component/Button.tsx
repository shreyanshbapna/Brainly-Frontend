import type { ReactElement } from "react"


interface ButtonProp {
    variant: "primary" | "secondary",
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement,
    text: string,
    onClick?: () => void
}

const variantClass = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-500"
}

const sizeClass = {
    "sm": "px-2 py-1 rounded-sm",
    "md": "px-3 py-2 rounded-md",
    "lg": "px-5 py-2 rounded-lg"
}

const defaultClass = "font-semibold flex items-center m-1 cursor-pointer"

export const Button = (prop: ButtonProp)  => {
    return <div onClick={prop.onClick}>
        <button className={`${variantClass[prop.variant]} ${sizeClass[prop.size]} ${defaultClass}`}>
            <div className="pr-1">
                {prop.startIcon}
            </div>
            {prop.text}
        </button>
    </div>
} 