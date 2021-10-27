import React,{useState} from 'react'
import { useContext } from 'react';
import { Card,Button,} from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { DataContext } from './conText/DataContext';
import '../index.css'
import swal from 'sweetalert2';

const ItemDescrib=({Producto})=>{

  // context
        const {agregarItem}= useContext(DataContext);
        
      

// usestate
      const {nombre,cantidad,url,descripcion,precio,id}=Producto
      const[info,setInfo]=useState(false);
      const [cantidadPro,settCantidad]=useState(0);
      const[datosCarrito,setDatosCarrito]=useState({
          nombreProducto:'',
          urlimg:'',
          cantidadStock:'',
          precioU:'',
          id:''

      })

      // funciones 
      
   
    const rest= ()=>{
        cantidadPro>0?settCantidad(cantidadPro-1):new swal('agrega la cantidad')
    }
    const add= ()=>{
        cantidadPro<cantidad?settCantidad(cantidadPro+1): new swal('no hay mas productos en stock')
    }
    

    const agregarCarrito= ()=>{
         //tomara los datos del producto
         setDatosCarrito({
          nombreProducto:`${nombre}`,
          urlimg:`${url}`,
          cantidadStock:`${cantidadPro}`,
          precioU:`${precio}`,
          key:id
         })

         // lo envia al carrito principla
         agregarItem(datosCarrito);
         
         
         // cambia el estado para que apresca el boton nuevo
         setInfo(true);
        
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
      Precio: {precio}
    </Card.Text>
    
    <Card.Text>
      Productos: {descripcion }
    </Card.Text>
    <div className="container card-contenido">
    <Button variant="primary" onClick={()=>rest()}>-</Button><span>{cantidadPro}</span> <Button variant="primary" onClick={()=>add()}>+</Button>
    </div>  
        <Button className="btna" onClick={()=>agregarCarrito()}>Agregar </Button>
        {info===false?null:<Button className="btna"><Link to={`/Carrtito`}>Carro</Link> </Button>}
 </Card.Body>
 
</Card>
        </div>
    )
}

export default ItemDescrib;
