import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navBar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<ItemListContainer />}/>
                    <Route path={"/category/:categoryName"} element={<ItemListContainer />}/>
                    <Route path={"/productDetail/:id"} element={<ItemDetailContainer />}/>
                    <Route path={"/cart"} element={<CartContainer />} />
                    <Route path={"/checkout"} element={<Checkout />} />
                    <Route path="*" element={<h2>404 not found</h2>} />                
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
