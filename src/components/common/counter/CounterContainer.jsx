import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ onAdd, stock, totalProductos }) => {
    const [contador, setContador] = useState(totalProductos);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert("Stock máximo alcanzado")
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
        
    };

    let childProps = {
        contador,
        sumar,
        restar,
        onAdd
    };

    return <Counter {...childProps} />;
};
export default CounterContainer;
