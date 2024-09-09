import "./productCard.css"

const ProductCard = ({ titulo, precio }) => {


    return (
        <div className="card">
            <img
                src="https://res.cloudinary.com/dt4230nrl/image/upload/v1725817006/laptopMSI.png"
                alt="Laptop MSI"
            />
            <h2>{titulo}</h2>
            <h3>{precio}</h3>
            <button>+ info</button>
        </div>
    );
};

export default ProductCard