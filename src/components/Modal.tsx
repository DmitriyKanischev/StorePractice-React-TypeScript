import { title } from "process"

interface ModalProps {
    children: React.ReactNode,
    title: string
}

export function Modal({children, title}: ModalProps) {
    return(
        <>
            <div
                className="fixed bg-black/40 top-0 left-0 right-0 bottom-0"
            />
            <div className="w-[500px] p-5 rounded-md bg-slate-100 absolute top-10 left-1/2 -translate-x-1/2">
                <h1
                    className="text-2xl text-center mb-2"
                >
                    {title}
                </h1>
                {children}
            </div>
        </> 
        
    )
}