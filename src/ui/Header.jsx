import { Link } from "react-router-dom"
import SearchOrder from "../feateures/order/SearchOrder"

function Header() {
    return (
        <div>
            <Link to="/">FastReact Pizza Co.</Link>
            <SearchOrder />
            <p>user</p>
        </div>
    )
}

export default Header
