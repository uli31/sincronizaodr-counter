import React,{useState,useEffect} from 'react'
import Producto from '../assets/data/prdoctos..json';
import { useParams } from 'react-router-dom';
import ItemDescrib from './ItemDescrib';


 const ItemaDetail=()=> {

    const [productos, setProductos] = useState([]);
    const[descripcion,setDescripcion]=useState([]);
    const{id}=useParams();
    useEffect(()=>{
        const conexion= new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Producto)
            },1000)
        })
        conexion.then(datos=>setProductos(datos))
        },[productos]);

        const filtro = productos.filter(producto=>(producto.id=== parseInt(id)));

    return (
        <div>
           {filtro.map(dato=>(
               <ItemDescrib
               Producto={dato}/>
           ))}
        </div>
    )
}
export default ItemaDetail;