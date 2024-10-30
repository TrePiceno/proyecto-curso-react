import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {agregarAlCarrito, mostrarTotalProductos} = useContext(CartContext); 
    const { id } = useParams();
    let totalProductos = mostrarTotalProductos(id);

    useEffect(() => {
    let productsCollection = collection(db, "productos");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc).then((res) => {
        setItem({ ...res.data(), id: res.id });
    });
    }, [id]);

    const onAdd = (cantidad) => {
        let carritoCompra = {...item, cantidad};
        agregarAlCarrito(carritoCompra);
        
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto ha sido agregado",
            showConfirmButton: false,
            timer: 1000,
        });
    };

    return <ItemDetail item={item} onAdd={onAdd} totalProductos={totalProductos}/> 
}

export default ItemDetailContainer