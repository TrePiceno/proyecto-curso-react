import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navBar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<ItemListContainer />}/>
                <Route path={"/category/:categoryName"} element={<ItemListContainer />}/>
                <Route path={"/productDetail/:id"} element={<ItemDetailContainer />}/>
                <Route path={"/cart"} element={<CartContainer />} />
                <Route path="*" element={<h2>404 not found</h2>} />                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
