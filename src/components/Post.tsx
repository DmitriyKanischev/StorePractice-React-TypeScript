import { IPosts } from "../models";

interface PostProps {
    post: IPosts
}

export function Post({post}: PostProps) {
    return (
        <div
        className="border py-2 px-4 rounded flex flex-col max-w-4xl justify-between mb-4 mx-auto bg-slate-100" 
        >
            <div className="rounded py-2 px-4 bg-slate-200" >
                <p className="font-bold">{post.name}</p>

                <p>{post.body}</p>
            </div>
            
        </div>
    )
}