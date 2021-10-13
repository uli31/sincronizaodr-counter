import React from 'react'
import Item from './Item'

const ItemList=({productos})=>{
    return (
        <div className="Contenedor">
            {productos.map(productos=>(
                    <Item 
                    productos={productos}
                    />
            ))}
        </div>
    )
}

export default ItemList