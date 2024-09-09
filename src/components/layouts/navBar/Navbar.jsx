import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src="https://res.cloudinary.com/dt4230nrl/image/upload/v1725762499/Press%20F1/Press%20F1%20Logo.png" alt="logo"/>
                <span>PRESS F1</span>
            </div>
            <div>
            <ul>
                <a href="">
                    <li>Home</li>
                </a>
                <a href="">
                    <li>About</li>
                </a>
                <a href="">
                    <li>Contact</li>
                </a>
            </ul>
            </div>
            <div className="widget">
            <CartWidget />
            </div>
        </div>
    );
};

export default Navbar