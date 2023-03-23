import { text } from "stream/consumers";

export function CreateProduct() {
    return(
        <form>
            <input
                type="text"
                className="border py-2 px-4 mb-2"
                placeholder="Enter product title"
            />
            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-400"
            >
                Submit
            </button>
        </form>
    )
}