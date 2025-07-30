// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InputBox = ({reference, placeholder}: {reference?: any, placeholder: string}) => {
    return <div className="">
        <input ref={reference} placeholder={placeholder} type="text" className="px-4 py-2 border border-gray-300 rounded-md m-2 w-75"/>
    </div>
}