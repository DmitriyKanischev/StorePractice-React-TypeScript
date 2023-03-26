import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 border mb-2 hover:text-slate-100 rounded', btnClassName];

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2 bg-slate-100" 
        >
            <img
                className="w-1/6"
                src={product.image} alt={product.title}
            />

            <p>{product.title}</p>

            <p className="font-bold">{product.price}</p>

            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? 'Hide Details' : 'Show details'}</button>

            { details && <div className="border rounded-md px-2 bg-slate-300">
                <p>{product.description}</p>
                <p className="font-bold">Rate: {product.rating.rate}</p>
            </div>}
        </div>
    )
}