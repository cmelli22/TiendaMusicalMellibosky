import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom";


const ItemDetail = ({productoDetail}) =>{

    let [cantidad, setcantidad] = useState(0)
    let [showCount, setShowCount] = useState(true)

    const onAdd = (cantidad) =>{
        console.log("ONADD")
        setcantidad(cantidad)
        setShowCount(!showCount)
    }
    
    return(
        <>
            <div className="card">
                <h2>{productoDetail.tittle}</h2>
                <img src={productoDetail.pictureUrl}/>
                <p>{productoDetail.description}</p>
                <p>$ {productoDetail.price}</p>
                <div className="itemCount">
                    <p>Cantidad : {cantidad} unidades</p>   
                    { showCount ? (
                    <ItemCount stock = {5} initial= {1} onAdd={onAdd}/>
                    ) : (<></>)}                 
                </div>
                <Link to={`/cart`}>
                    <button className="button">
                        <span>Comprar</span>
                    </button>               
                 </Link>
                </div>
        </>
    )
}

export default ItemDetail