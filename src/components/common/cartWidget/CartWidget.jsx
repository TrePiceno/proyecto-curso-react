import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {

    const { totalProductos } = useContext(CartContext);

    return (
        <div>
            <Badge badgeContent={totalProductos()} color="warning" showZero={true}>
                <AddShoppingCartIcon fontSize="large" />
            </Badge>
        </div>
    );
};

export default CartWidget;
