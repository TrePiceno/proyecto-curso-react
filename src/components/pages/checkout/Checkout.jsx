import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import { db } from '../../../firebaseConfig';
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"
import "./checkout.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Checkout = () => {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const {cart, totalAPagar, vaciarCarrito} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [isloading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let total = totalAPagar();

        const order = {
            buyer: user,
            items: cart,
            total
        };

        let refCollection = collection(db, "orders");
        addDoc(refCollection, order).then((res) => {
            setOrderId(res.id);
            vaciarCarrito();
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });

        order.items.forEach((elemento) => {
            let collectionRef = collection(db, "productos");
            updateDoc(doc(collectionRef, elemento.id), {stock: elemento.stock - elemento.cantidad});
        })
    };

    const handleChange = (e)  => {
        const {value, name} = e.target;
        setUser({...user, [name]: value })
    };

    if (isloading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h1>Proceso de pago</h1>
            { orderId ? ( <div className='gif'>
                <h2>Su numero de orden es: {orderId}</h2>
                <img src="https://res.cloudinary.com/dt4230nrl/image/upload/v1730228151/16-39-36-203_512_hpxlt8.gif" alt="" />
                <h2>¡Gracias por su compra!</h2>
            </div> 
            ) : (
                <div className='formulario'>
                    <div>
                    <video muted autoPlay loop>
                        <source src="https://res.cloudinary.com/dt4230nrl/video/upload/v1730184991/7679837-sd_338_640_25fps_z8tlhk.mp4" type="video/mp4"/>
                    </video>
                    </div>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 } }}autoComplete="off" onSubmit={handleSubmit}>
                        <div className='inputs'>
                        <h2>Ingrese sus datos</h2>
                            <TextField onChange={handleChange} name="name" label="Nombre completo" type="text"/>
                            <TextField onChange={handleChange} name="phone" label="Teléfono" type="text"/>
                            <TextField onChange={handleChange} name="email" label="Email" type="text"/>
                            <Button type="submit">Realizar pago</Button>
                        </div>
                    </Box>
                </div>
            )};
        </div>
    );
};

export default Checkout