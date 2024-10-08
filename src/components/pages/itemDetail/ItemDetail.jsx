import CounterContainer from "../../common/counter/CounterContainer"
import "./itemDetail.css";


const ItemDetail = ({ item }) => {

    return (
        <div>
            <div className="itemDetail">
                <div>
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className="textDetail">
                    <h3>{item.title}</h3>
                    <h3>{item.description}</h3>
                    <h3>Precio: ${item.price}</h3>
                    <h3>Stock: {item.stock}</h3>
                    <h3>Categoria: {item.category}</h3>
                    <CounterContainer />
                </div>
            </div>
        </div>
        )
}

export default ItemDetail