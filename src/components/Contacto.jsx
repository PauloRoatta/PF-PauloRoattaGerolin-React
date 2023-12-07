import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Contacto =()=>{
    return(
<>
<h1 className='TitleContacto'>Contacto</h1>
<Form className='FormContacto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='LabelForm'>Nombre</Form.Label>
        <Form.Control className="BackTextContact" type="email" placeholder="ej:Luis Alberto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='LabelForm'>Email</Form.Label>
        <Form.Control className="BackTextContact" type="email" placeholder="ej:Spinettaisgod@email.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='LabelForm'>Telefono</Form.Label>
        <Form.Control className="BackTextContact" type="email" placeholder="ej:351-546767" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='LabelForm'>Mensaje</Form.Label>
        <Form.Control  className="BackTextContact" type="email" placeholder="ej:Queria recomendar....etc." />
      </Form.Group>
      
      
      <Button className='BotonForm' variant="primary" type="submit">
        Enviar
      </Button>
    </Form>

</>

    );
}