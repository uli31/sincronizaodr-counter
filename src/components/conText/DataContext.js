import { createContext } from "react";
import React,{useState} from 'react'

export const DataContext  = createContext();


export  const DatoContext=({children})=> {
        const data=[ ]

    const [carrito,setCarrito]= useState(data);
    const agregarItem = (valor)=>{
        setCarrito([...carrito,valor])
    }
    return (
        <DataContext.Provider value={{carrito,agregarItem}}>
            {children}
        </DataContext.Provider>
    )
}
