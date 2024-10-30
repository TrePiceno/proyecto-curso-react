import React from 'react';
import {Button} from "@mui/material";
import { Link } from 'react-router-dom';
import "./cart.css"

const Cart = ({cart, vaciarCarrito, borrarProducto, total}) => {
    return (
        <div>
            <h1>Resumen de compra</h1>
            {cart.map((product) => {
                return (
                    <div key={product.id} className='cardCart'>
                        <img src={product.imageUrl} alt="" />
                        <div className='resumen'>
                        <h4>{product.title}</h4>
                        <h4>precio por unidad: ${product.price}</h4>
                        <h4>Cantidad: {product.cantidad}</h4>
                        <h4>Sub-total: ${product.price * product.cantidad}</h4>
                        </div>
                        <Button color='warning' onClick={() => {borrarProducto(product.id)}}>Eliminar</Button>
                    </div>
                )
            })}

            {total > 0 && (
                <div className='cardCart'>
                    <h3>El total a pagar es: ${total}</h3>
                    <Button onClick={vaciarCarrito} color='warning'>Limpiar carrito</Button>
                    <Link to="/checkout"><Button>Finalizar compra</Button></Link>
                </div>
            )}
            
        </div >
    );
};

export default Cart; 