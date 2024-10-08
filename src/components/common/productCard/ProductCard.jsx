import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./productCard.css"
import { Link } from "react-router-dom";

const ProductCard = ({ id, imageUrl, title, price, stock, description, category }) => {

    return (
    <Card sx={{ width: 350, height: 650, position: "relative"}}>
        <CardMedia
            sx={{ height: 350 }}
            image={imageUrl}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            $ {price}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Stock: {stock}
            </Typography>
        </CardContent>
        <CardActions sx={{position: "absolute", bottom: 10}}>
            <Link to={`/productDetail/${id}`}><Button size="small">+ info</Button></Link>
            <Link to={`/category/${category}`}><Button size="small">{category}</Button></Link>
        </CardActions>
    </Card>
    );
};

export default ProductCard