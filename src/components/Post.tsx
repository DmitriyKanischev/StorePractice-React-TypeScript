import { IPosts } from "../models";
import icon from "../assets/like.png"


interface PostProps {
    post: IPosts
}

const users: string[] = [
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Patricia Lebsack",
    "Chelsey Dietrich"
]

export function Post({post}: PostProps) {
    return (
        <div
        className="border py-2 px-4 rounded flex flex-col max-w-4xl justify-between mb-4 mx-auto bg-slate-100" 
        >
            <div className="flex items-center">
                <div className="max-w-[7%] mb-4">
                    <img src={icon} alt="Author icon"/>
                </div>
                <p className="ml-2 font-bold text-lg">{users[Math.floor(Math.random() * users.length)]}</p>
            </div>
            <div className="rounded py-2 px-4 bg-slate-200" >
                <p className="font-bold">{post.name}</p>

                <p>{post.body}</p>
            </div>
            
        </div>
    )
}