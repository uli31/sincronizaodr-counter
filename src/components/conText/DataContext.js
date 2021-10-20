import { createContext } from "react";
import React,{useState} from 'react'

export const DataContext  = createContext();


export  const DatoContext=({children})=> {
        const data=[ ]

    const [carrito,setCarrito]= useState(data)
    return (
        <DataContext.Provider value={carrito,setCarrito}>
            {children}
        </DataContext.Provider>
    )
}
