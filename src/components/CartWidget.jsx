
import { Link } from "react-router-dom";
import Carrito from "../assets/Carrito.png"
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";


export const CartWidget = () => {

const {items} =useContext(CartContext);

const total = items.reduce((acum,valAct)=>acum+valAct.quantity, 0)

    return (
        <Link to="/cart">
            <img src={Carrito} alt="Carrito" width={40} />
            <span className="cartWidg" >{total}</span>
        </Link>
    );
}