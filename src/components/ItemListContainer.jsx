import { useParams } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import { Container } from "react-bootstrap";

import {getFirestore, getDoc, doc} from "firebase/firestore";

import { products } from "../data/products";
import { ItemList } from "../components/ItemList";


export const ItemListContainer = (props) => {
    const [items, setItems] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => { resolve(products) }, 2000)
        });

        mypromise.then((response) => {
            if (!id) {
                setItems(response);
            } else {
                const filterByCategory = response.filter(item => item.category === id);
                setItems(filterByCategory)
            }

        });
        mypromise.catch(error => { console.log("La promise no funciona", error) });
    }, [id]);

    return (
        <Container className="ContenedorCards">
            {items ? <><h1 className="titulo">{props.greeting}</h1><ItemList items={items} /></> : <>Loading...</>}
        </Container>
    );

};