import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        let productsCollection = collection(db, "productos");
        let consulta = productsCollection;

        if (categoryName) {
            let productsCollectionFiltered = query(
                productsCollection,
                where("category", "==", categoryName)
            );
            consulta = productsCollectionFiltered;
        };

        getDocs(consulta).then((res) => {
            let array = res.docs.map((elemento) => {
                return { ...elemento.data(), id: elemento.id };
            });

            setItems(array);
        });
    }, [categoryName]);

        let chilDrops = {
            items
        };

    return <ItemList {...chilDrops} />
};

export default ItemListContainer;
