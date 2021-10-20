import React,{Fragment,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

import swal from 'sweetalert2';
import { Card,Button} from 'react-bootstrap';

const  ItemCount=({cantidad}) =>{

        
 

    
    const [cantidadPro,settCantidad]=useState(0);
   
    const rest= ()=>{
        cantidadPro>0?settCantidad(cantidadPro-1):new swal('agrega la cantidad')
    }
    const add= ()=>{
        cantidadPro<cantidad?settCantidad(cantidadPro+1): new swal('no hay mas productos en stock')
    }


    return (

      
        <div>
         
    <div className="container card-contenido">
    <Button variant="primary" onClick={()=>rest()}>-</Button><span>{cantidadPro}</span> <Button variant="primary" onClick={()=>add()}>+</Button>
    </div>
 
        </div>
    )
}

export default  ItemCount;