import { useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { InputBox } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function CreateContentModel({open, onClose}: {open: boolean, onClose: () => void}) {
    const TitleRef = useRef<HTMLInputElement>(null);
    const LinkRef = useRef<HTMLInputElement>(null);
    const TypeRef = useRef<HTMLInputElement>(null);

    async function createContent(){
        const title = TitleRef.current?.value;
        const link = LinkRef.current?.value;
        const type = TypeRef.current?.value;
        console.log(title)
        console.log(link)
        console.log(type)
        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            title,
            link,
            type
        }, {
            headers: {
                "token": localStorage.getItem("token")
            }
        })
        onClose()

    } 
    
    return <div>
        {open && <div>
            <div className="w-screen h-full flex justify-center items-center bg-slate-500 fixed top-0 left-0 opacity-65">
            
            </div> 
            <div className="w-screen h-full flex justify-center items-center fixed top-0 left-0">
                 <div className=" bg-white p-4 rounded-md">
                <div className="flex justify-between items-center m-2">
                    <div className="flex justify-center text-bold w-full text-2xl font-bold"> <div>Add Content</div> </div>
                    <div onClick={onClose}>
                        <CrossIcon/>
                    </div>
                </div>
                
                <div>
                    <InputBox reference={TitleRef} placeholder="Title"/>
                    <InputBox reference={LinkRef} placeholder="Link"/>
                    <InputBox reference={TypeRef} placeholder="Type: ['Youtube', 'Document', 'X']"/>
            </div>
            <div className="flex justify-center">
                <Button onClick={createContent} variant="primary" text="Sumit" size="md"/>
            </div>
                
            </div>
           </div>
        </div>
        
        }
    </div>
   
}

