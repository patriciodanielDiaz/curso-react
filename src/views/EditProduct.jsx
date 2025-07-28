import { use, useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { db } from "../config/firebase";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";
import Layout from "../components/Layout/Layout";


const EditProduct = () => {
    const[productName, setProductName] = useState("");
    const[productPrice, setProductPrice] = useState("");
    const[productDescription, setProductDescription] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState(false);
    const[message, setMessage] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const fetchProduct = async (id) => {
        try {
            const productRef = doc(db, "products", id);
            const productSnap = await getDoc(productRef);
            if (productSnap.exists()) {
                const data = productSnap.data();
                setProductName(data.name);
                setProductPrice(data.price);
                setProductDescription(data.description);
            } else {
                setError("Producto no encontrado.");
            }
        } catch (error) {
            console.error("Error al recuperar el producto:", error);
            setError("Error al recuperar el producto.");
        }
    }

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    }

    const handleProductPriceChange = (e) => {
        setProductPrice(Number(e.target.value));
    }
    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    }
    const handleSubmit = async (e) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        
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

        try {
            const docRef = doc(db, "products", id);
            await updateDoc(docRef, {
                name: productName,
                price: productPrice,
                description: productDescription
            });
            setMessage("Producto editado exitosamente. Redirigiendo al home...");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            console.error("Error al editar el producto:", error);
            setError("Error al editar el producto.");
        }
    }

    return (
        <>
            <Layout>
                <section id="admin-section">
                    <h1>Panel de Edicion del Producto.</h1>
                    <p>Editar el producto con ID: {id}</p>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="productName">Nombre del Producto:</label>
                            <input type="text" id="productName" name="productName" onChange={handleProductNameChange} value={productName} />

                            <label htmlFor="productPrice">Precio del Producto:</label>
                            <input type="number" id="productPrice" name="productPrice" onChange={handleProductPriceChange} value={productPrice} />

                            <label htmlFor="productDescription">Descripción del Producto:</label>
                            <textarea id="productDescription" name="productDescription" onChange={handleProductDescriptionChange} value={productDescription} ></textarea>

                            <button>Producto Editado</button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            {message && <p style={{ color: "green" }}>{message}</p>}
                        </form>
                </section>
            </Layout>
        </>
    );
}

export default EditProduct;
