import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const[productName, setProductName] = useState("");
    const[productPrice, setProductPrice] = useState("");
    const[productDescription, setProductDescription] = useState("");
    const[error, setError] = useState("");
    const[isDisabled, setIsDisabled] = useState(true);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
        //console.log(productName);
    }

    const handleProductPriceChange = (e) => {
        setProductPrice(Number(e.target.value));
        //console.log(Number(productPrice));
    }
    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
        //console.log(productDescription);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        
        if (!productName || !productPrice || !productDescription) {
            setError("Faltan completar campos.");
            return;
        }

        if (productName.length < 3) {
            setError("El nombre del producto debe tener al menos 3 caracteres.");
            return;
        }

        if (productPrice <= 0) {
            setError("El precio del producto debe ser mayor a 0.");
            return;
        }
        if (productDescription.length < 10) {
            setError("La descripción del producto debe tener al menos 10 caracteres.");
            return;
        }

        const newProduct = {
            name: productName,
            price: productPrice,
            description: productDescription
        };
        console.log("Producto agregado:", newProduct);
        setProductName("");
        setProductPrice("");
        setProductDescription("");
    }

    useEffect(() => {
        if (productName && productPrice && productDescription) {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    }, [productName, productPrice, productDescription]);

    //console.log({ productName, productPrice, productDescription });

    return (
        <>
            <Layout>
                <section id="admin-section">
                    <h1>Bienvenido al panel de administración.</h1>
                    <p>Desde aquí puedes gestionar todos tus productos.</p>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="productName">Nombre del Producto:</label>
                            <input type="text" id="productName" name="productName" onChange={handleProductNameChange} value={productName} />

                            <label htmlFor="productPrice">Precio del Producto:</label>
                            <input type="number" id="productPrice" name="productPrice" onChange={handleProductPriceChange} value={productPrice} />

                            <label htmlFor="productDescription">Descripción del Producto:</label>
                            <textarea id="productDescription" name="productDescription" onChange={handleProductDescriptionChange} value={productDescription} ></textarea>

                            <button disabled={isDisabled} style={{ backgroundColor: isDisabled && "grey", cursor: isDisabled && "not-allowed" }}>Agregar Producto</button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </form>
                </section>
            </Layout>
        </>
    );
}

export default Dashboard;
