import ProductCard from "../../common/productCard/ProductCard";
import "./itemlistcontainer.css";

const ItemList = ({saludo, items}) => {

    return (
        <div>
            <h2>Listado de productos</h2>
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