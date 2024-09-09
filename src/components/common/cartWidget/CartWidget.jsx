import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
const CartWidget = () => {
    return (
        <div>
            <Badge badgeContent={100} color="warning" font>
                <AddShoppingCartIcon fontSize="large" />
            </Badge>
        </div>
    );
};

export default CartWidget;
