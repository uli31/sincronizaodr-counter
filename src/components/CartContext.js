import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { DataContext } from './conText/DataContext';


const CartContext = ()=>{
  

  const {carrito}= useContext(DataContext);

return(
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
     
      <th>Producto</th>
      <th>Nombre del Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
  </thead>
<tbody>
  {carrito.map(carro=>   
    
    <tr>
      <td><img src={carro.urlimg}></img></td>
      <td>{carro.nombreProducto}</td>
      <td>{carro.cantidadStock}</td>
      
    </tr>)
 }
   </tbody>
</Table>
    </div>
)




}

export default CartContext;