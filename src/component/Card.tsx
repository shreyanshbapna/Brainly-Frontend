import type { ReactElement } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon"
import { XIcon } from "../icons/XIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface CardProps {
    contentId: string;
    title: string;
    link: string;
    type: "X" | "Youtube" | "Document"
}

const helper: {
    "Youtube": ReactElement,
    "Document": ReactElement,
    "X": ReactElement,
} = {
    "Youtube": <YoutubeIcon/>,
    "Document": <DocumentIcon/>,
    "X": <XIcon/>
}

export const Card = ({title, link, type, contentId}: CardProps) => {
    console.log(contentId);
    async function deteteCard() {
        await axios.delete(`${BACKEND_URL}/api/v1/content`, {
            data: {
                contentId
            },
            headers: {
                "token": localStorage.getItem("token")
            }
        })
        
    }

    return <div className="bg-white rounded-md shadow-lg max-w-65 border-gray-200 border-2 p-4 min-h-65 min-w-45">
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="mr-2">
                    {helper[type]}
                </div>
                <div className="mr-2">
                    {title}
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-2"> 
                    <a href={link}> <ShareIcon/> </a>
                 </div>
                <div onClick={deteteCard}> <DeleteIcon/> </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="pt-2">
                {type === "Youtube" && <iframe className="w-full h-60" height="315" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
                {type === "X"  && <blockquote className="twitter-tweet m-0"> <a href={link.replace("x.com", "twitter.com")}></a> </blockquote> }
                {type === "Document" && <div> <a href={link}>{link}</a></div>}
            </div>
        </div>
    </div>  
}


