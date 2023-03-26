import axios from "axios";
import { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./Error";

const ProductDataExample: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 4,
        count: 123
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('')

    const submitHandler = async(event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if(value.trim().length === 0) {
            setError('Please Enter valid title')
            return
        }

        ProductDataExample.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductDataExample)

        onCreate(response.data)
    }

    const changeHandler =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return(
        <form
            onSubmit={submitHandler}
        >
            <input
                type="text"
                className="border py-2 px-4 mb-4 w-full outline-none"
                placeholder="Enter product title"
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}
            <button
                type="submit"
                className="py-2 px-4 border border-black rounded bg-yellow-400 hover:text-slate-100"
            >
                Submit
            </button>
        </form>
    )
}