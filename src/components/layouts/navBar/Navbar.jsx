import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";

const Navbar = () => {
    return (
        <div className="container">
            <Link to="/">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dt4230nrl/image/upload/v1725762499/Press%20F1/Press%20F1%20Logo.png" alt="logo"/>
                    <span>PRESS F1</span>
                </div>
            </Link>
            <div>
            <ul>
                {categories.map(({ title, path }) => (
                <Link key={title} to={path}>
                    {title}
                </Link>
                ))}
            </ul>
            </div>
            <Link to="/cart">
                <div className="widget">
                <CartWidget />
                </div>
            </Link>
        </div>
    );
};

export default Navbar