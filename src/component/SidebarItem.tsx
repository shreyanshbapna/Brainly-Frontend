import type { ReactElement } from "react"

export const SidebarItem = ({text, icon}: {text: string, icon: ReactElement}) => {
    return <div className="flex items-center pl-3 cursor-pointer hover:bg-gray-200">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2 font-semibold">
            {text}
        </div>
         
    </div>
}