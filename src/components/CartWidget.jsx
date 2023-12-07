
import { Link } from "react-router-dom";
import Carrito from "../assets/Carrito.png"


export const CartWidget = () => {
    return (
        <Link to="/cart">
            <img src={Carrito} alt="Carrito" width={40} />
            <span>6</span>
        </Link>
    );
}