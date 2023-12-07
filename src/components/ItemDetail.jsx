import { useContext } from "react";


import { ItemCounter } from "./ItemCounter";
import { CartContext } from "../../Contexts/CartContext";

export const ItemDetail = ({ item }) => {

const {onAdd} = useContext(CartContext);

const Add = () => {
onAdd(item);

};

    return (
        <>
        <div className="ContenedorDetail">
        <div>
                <h1 className="TitleDetail">{item.title}</h1>
                <img className="ImageDetail" src={item.pictureUrl} />
            </div>
            <div className="DescripDetail">
                {item.description}
            </div>
            
        </div>
        <ItemCounter onAdd={Add}/>
        </>
    );

};

