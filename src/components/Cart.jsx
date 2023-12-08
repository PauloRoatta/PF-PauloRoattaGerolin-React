import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc, } from "firebase/firestore";


export const Cart = () => {
    const { clear, items, onRemove } = useContext(CartContext);
    const navigate = useNavigate();

    const total = items.reduce((acum,valAct)=>acum+(valAct.quantity*valAct.price), 0)


    const handleChange = (event) => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            }
        })
    }

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        emailrepeat:"",
    };

    const [buyer, setBuyer] = useState(initialValues);

    const sendOrder = () => {
        
    if((buyer.name=="")||(buyer.phone=="")||(buyer.email=="")||(buyer.emailrepeat=="")){
        alert("Rellene el formulario")
        }else{  if(buyer.email!=buyer.emailrepeat){
            alert("Los emails no coinciden")
        }else{
            const order = {
                buyer,
                items,
                total:total,
            };
        
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
        
            addDoc(orderCollection, order).then(({ id }) => {
                if (id) {
                    alert("Su orden: " + id + " ha sido completada!");
                    setBuyer(initialValues);
                    clear();
                }
            });}
        }          



  
  
    };

    if (!items.length) {
        return <Container className="mt-4"><h2 className='TitleContacto'>Tu Carrito Esta Vacio</h2><button className="BotonCard" onClick={() => navigate("/")}>Volver Al Inicio</button></Container>;
    }
    const totalPrice = 0;
    return (
        <Container className="mt-4">
            <h1 className='TitleContacto'>Carrito</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="titulo">Producto</th>
                        <th className="titulo">Cantidad</th>
                        <th className="titulo">Precio</th>
                        <th className="titulo">Imagen</th>
                        <th className="titulo">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>{`$${item.price}`}</td>
                                <td><img src={item.pictureUrl} width={300} /></td>
                                <td className="xcarrito" onClick={() => onRemove(item.id)}>x</td>
                            </tr>
                        </>
                    ))}

                    <tfoot>
                        <tr>
                            <td className="totalCart">Total: ${total}</td>
                        </tr>
                    </tfoot>

                </tbody>
            </Table>

            <button  className="BotonCard" onClick={clear}>Vaciar Carrito</button>

            <hr />

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={buyer.email} required onChange={handleChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="emailrepeat" value={buyer.repiteemail} required onChange={handleChange} placeholder="Repite email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={buyer.name} required onChange={handleChange} placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name="phone" value={buyer.phone} required onChange={handleChange} placeholder="Enter your Phone Number" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={sendOrder}>
                    Enviar
                </Button>
            </Form>


        </Container>
    );

};