import ProductCard from "../../common/productCard/ProductCard";
import "./itemlistcontainer.css";

const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <h2>{saludo}</h2>
            <div className="home">
            <ProductCard titulo="Laptop MSI Riader G378HX" precio="$59,999" />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            </div>
        </div>
    );
};

export default ItemListContainer;
