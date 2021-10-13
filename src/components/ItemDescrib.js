import React,{useState} from 'react'
import { Card,Button,} from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDescrib=({Producto})=>{

   const[info,setInfo]=useState('AGREGAR AL CARRITO');
   

    const {nombre,cantidad,url,descripcion}=Producto


    const prueba= ()=>{
        
      setInfo('ir a carrito');
    }
    
    return (
        <div>
             <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={url} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
  
    <Card.Text>
      Productos: {cantidad}
    </Card.Text>
    <Card.Text>
      Productos: {descripcion}
    </Card.Text>
        <ItemCount
        cantidad={cantidad}/>
        <Button className="btna" onClick={()=>prueba()}><a>{info}</a> </Button>
 </Card.Body>
 
</Card>
        </div>
    )
}

export default ItemDescrib;
