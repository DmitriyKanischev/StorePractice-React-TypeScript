import React from "react";


export function Home() {
    return (
        <div 
            className="absolute left-0 right-0 bottom-0 top-0 bg-slate-300 ">
                <div 
                    className="absolute left-0 right-0 bottom-0 top-0 bg-slate-100 w-[50%] flex justify-center items-center">
                        <img 
                            className="rounded-2xl w-3/4 border-solid border-2 border-slate-500 shadow-lg shadow-slate-500/50" 
                            src="https://optomby.com/wp-content/uploads/2019/11/Internet-magazin-odezhdy-1.jpg" 
                            alt="shop welcome" />
                </div>
                <div 
                    className="absolute left-[50%] right-0 bottom-0 top-0 bg-slate-100 w-[50%] shadow-lg shadow-slate-500/50">
                        <h1 
                            className="text-blue-400 font-bold text-7xl text-left mx-8 my-10 drop-shadow-lg"
                            >Buy more - 
                        </h1>
                        <br/>
                        <h1
                            className="text-yellow-400 font-bold text-7xl text-right my-1 mx-8 drop-shadow-md"
                        > pay less
                        </h1>
                        <button
                            className="py-4 px-5 border my-40 mx-[40%] hover:text-slate-100 bg-yellow-400 rounded"
                        >
                            Start shopping!
                        </button>
                         
                </div>
        </div>
    )
}