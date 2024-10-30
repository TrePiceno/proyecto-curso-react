import ProductCard from "../../common/productCard/ProductCard";
import "./itemlistcontainer.css";
import { Skeleton } from "@mui/material";

const ItemList = ({items}) => {

    if (items.length === 0) {
        return (
        <div className="home">
            <Skeleton variant="rectangular" width={"350px"} height={"650px"} />
            <Skeleton variant="rectangular" width={"350px"} height={"650px"} />
            <Skeleton variant="rectangular" width={"350px"} height={"650px"} />
            <Skeleton variant="rectangular" width={"350px"} height={"650px"} />
        </div>
        );
    };

    return (
        <div>
            <h2>LISTADO DE PRODUCTOS</h2>
            <div className="home">
                {items.map((item) => {
                    return (
                        <ProductCard key={item.id} {...item}/>
                    )
                })}
            </div>
        </div>
    );
};

export default ItemList