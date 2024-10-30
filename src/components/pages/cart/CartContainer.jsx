import { useContext } from 'react';
import Cart from './Cart';
import { CartContext } from '../../../context/CartContext';

const CartContainer = () => {

    const { cart, vaciarCarrito, borrarProducto, totalAPagar } =
    useContext(CartContext);

    let total = totalAPagar();

    return (
        <Cart cart={cart} vaciarCarrito={vaciarCarrito} borrarProducto={borrarProducto} total={total}/>
    );
};

export default CartContainer;