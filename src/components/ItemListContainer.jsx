import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
    getFirestore,
    collection,
    getDocs,
    query,
    where, 
} from "firebase/firestore";

import { ItemList } from "../components/ItemList";


export const ItemListContainer = (props) => {
    const [items, setItems] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, "items")
            : query(collection(db, "items"), where("categoryId", "==", id));

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
            else
                setItems(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
        });
    }, [id]);
  
    return (
        <Container className="ContenedorCards">
            {items ? <><h1 className="titulo">{props.greeting}</h1><ItemList items={items} /></> : <>Loading...</>}
        </Container>
    );

};