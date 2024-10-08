import ProductCard from "../../common/productCard/ProductCard";
import "./itemlistcontainer.css";

const ItemList = ({items}) => {

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