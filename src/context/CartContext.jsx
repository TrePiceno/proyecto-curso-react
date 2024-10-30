import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

import React from 'react'

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (product) => {
        let productoYaAgregado = cart.some((elemento) => elemento.id === product.id);

        if (productoYaAgregado) {
            let modificarCarrito = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return {...elemento, cantidad: product.cantidad};
                } else {
                    return elemento;
                }
            });
            setCart(modificarCarrito);
        } else {
            setCart([...cart, product]);
        }
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    const borrarProducto = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "El producto se eliminará en tu carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Si, eliminar!",
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "¡Listo!",
                text: "El producto ha sido eliminado.",
                icon: "success",
                });
                let arrayFiltrado = cart.filter((product) => product.id !== id);
                setCart(arrayFiltrado);
            }
        });
    };

    const totalAPagar = ()=> {
        let totalCompra = cart.reduce((acc, product)=> {
            return acc + (product.price * product.cantidad)
        }, 0);
        return totalCompra;
    };

    const totalProductos = () => {
        let cantidadProductos = cart.reduce((acc, product) => {
            return acc + product.cantidad;
        }, 0);
        return cantidadProductos;
    };

    const mostrarTotalProductos = (id) =>{
        let producto = cart.find((elemento) => elemento.id === id);
        return producto ? producto.cantidad : 1;
    };

    let data = {
        cart,
        agregarAlCarrito,
        vaciarCarrito, 
        borrarProducto,
        totalAPagar,
        totalProductos, 
        mostrarTotalProductos
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
};

export default CartContextProvider;