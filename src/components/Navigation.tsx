import { Link } from "react-router-dom"

export function Navigation() {
    return(
        <nav className="h-[50px] mb-5 flex justify-between items-center px-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500">
            <span className="font-bold text-xl">R-Shop</span>
            <span>
                <Link to="/posts" className="mr-2 hover:text-cyan-100">Feedback</Link>
                <Link to="/products" className="hover:text-cyan-100">Products</Link>
            </span>
        </nav>
    )
}