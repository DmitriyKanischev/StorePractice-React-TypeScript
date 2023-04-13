import { Link } from "react-router-dom"

export function Navigation() {
    return(
        <nav className="h-[50px] mb-5 flex justify-between items-center px-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
            <span className="font-bold text-xl">
                <Link to="/">R-Shop</Link>
                </span>
            <span>
                <Link to="/products" className="mr-2 hover:text-cyan-100">Products</Link>
                <Link to="/posts" className=" hover:text-cyan-100">Feedback</Link>
            </span>
        </nav>
    )
}