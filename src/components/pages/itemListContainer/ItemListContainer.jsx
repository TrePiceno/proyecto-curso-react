import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const { categoryName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {

        const filteredProducts = products.filter(
            (product) => product.category === categoryName
        );
        
        const getProducts = new Promise((res, rej) => {
            let isLogued = true;
            if (isLogued) {
                res(categoryName ? filteredProducts : products);
            } else {
                rej ({message: "Algo salio mal"});
            }
        });
    
        getProducts
            .then((response) => {
                setItems(response);
            })
            .catch((error) => {
                console.log("Entro en el catch", error)
            });
    }, [categoryName]);

        let chilDrops = {
            items
        }

    return <ItemList {...chilDrops} />
};

export default ItemListContainer;
