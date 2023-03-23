import { text } from "stream/consumers";
import { useState } from "react";

export function CreateProduct() {
    const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <button
                type="submit"
                className="py-2 px-4 border rounded bg-yellow-400 hover:text-slate-100"
            >
                Submit
            </button>
        </form>
    )
}