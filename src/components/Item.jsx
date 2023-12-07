import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => {

  return (


    <Card className="CardsRopa" style={{ width: '18rem', height: '32rem' }}>
      <Card.Img className="ImagenCard" variant="top" src={item.pictureUrl} />
      <Card.Body className="FondoCard">
        <Card.Title className="TextoCard">{item.title}</Card.Title>
        <Card.Text className="TextoCard">
          {`Precio $${item.price}`}
          <br></br>
          {`${item.description}`}
        </Card.Text>
        <Link to={`/items/${item.id}`}><Button className="BotonCard" variant="primary">Ver Más</Button></Link>
      </Card.Body>
    </Card>



  )
}



