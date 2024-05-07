import { useState } from "react"
import '../styles/card.css'


    export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar, handleDisminiur }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">$ {precio}</p>
                {added
                    ? <button
                        type="submit"
                        className="btn btn-outline-danger"
                        onClick={clickQuitar}
                    >
                        Quitar del carrito
                    </button>
                    : <button
                        type="submit"
                        className="btn btn-outline-success"
                        onClick={clickAgregar}
                    >
                        Agregar al carrito
                    </button>
                }
            </div>
        </div>
    )
}
