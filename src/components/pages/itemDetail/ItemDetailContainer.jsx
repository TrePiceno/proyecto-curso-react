import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        let product = products.find((product) => product.id === id);
        if(product){
            setItem( product )
        }
    }, [id])

    return <ItemDetail item={item} />
}

export default ItemDetailContainer