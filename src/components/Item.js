import React from 'react';
import { Card,Button,} from 'react-bootstrap';
import ItemCount from './ItemCount';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';
import ItemDescrib from './ItemDescrib';


const Item=({productos})=> {
  const{nombre,url,cantidad,descripcion,id}=productos
    return (
        <div className='hijo'>
          
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
  
    <Card.Text>
      Productos: {cantidad}
    </Card.Text>
        <ItemCount
        cantidad={cantidad}/>
        <Button className="btna"><Link to={`/ItemDescribs/${id}`} className="btn btn-primary">Ver mas</Link></Button>
 </Card.Body>
 
</Card>
        


        </div>
    )
}

export default Item;
