import Navbar from "./components/layouts/navBar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
    return (
    <div>
        <Navbar />
        <ItemListContainer saludo="¡Hola, bienvenido a mi tienda online!"/>
    </div>
    );
}

export default App;
