import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const itemsTotal = () => {
        return listaCompras.reduce((total, item) => total + item.cantidad, 0).toFixed(0)
    }

    const handleImpresion = () => {

        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td className="gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => disminuirCantidad(item.id)}
                                    > - </button>
                                    <button className="btn btn-success">{item.cantidad}</button>
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => aumentarCantidad(item.id)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                    <div className="container">
                        <th><b>TOTAL: </b></th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>

                    </div>

                    <div className="container">
                        <th><b>CANTIDAD PRODUCTOS: </b></th>
                        <td></td>
                        <td></td>
                        <td>{itemsTotal()}</td>
                    </div>

                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-outline-primary"
                    onClick={handleImpresion}
                    disabled={listaCompras < 1}
                >COMPRAR</button>
            </div>
        </>
    )
}