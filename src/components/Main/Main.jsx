import { useEffect, useState } from "react";
import "./Main.css";
import { db } from "../../config/firebase";
import { collection ,getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Main = () => {

  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);
  //const [user, setUser] = useState(true);

  const { user } = useAuth();

  const fetchProducts = async () => {
    //try{
    //  const response = await fetch("https://fakestoreapi.com/products")
    //  const data = await response.json();
    //  setProductsList(data);
    //} catch (error) {
    //  setError("Error al recuperar los productos");
    //  console.error("Error al recuperar los productos:", error);
    //}

    const productsCollection = collection(db, "products");
    const productsDB = await getDocs(productsCollection);
    console.log(productsDB);
    const docs = productsDB.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    setProductsList(docs);
  }
  useEffect(() => {
    fetchProducts()
  }, []);

  useEffect(() => {
  },[]);

  const handlerDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProductsList(productsList.filter((prod) => prod.id !== id));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  }

    return (
        <main>
            <section className='banner'>
              <h1>Bienvenidos a la tienda</h1>
              <h1>Ofertas especiales</h1>
            </section>
            <section className='productList'>
              {error && <p>{error}</p>}
              {productsList.length === 0 && !error && <p>No hay productos disponibles</p>}
              {
                productsList.map((prod, index) => {
                  console.log(prod, index);
                    return (
                    <div className='product'>
                      {/* <img src={prod.image} alt={"imagen del producto"} /> */}
                      <h2>{prod.name}</h2>
                      <p>Precio: {prod.price}</p>
                      <p>SKU: {prod.sku}</p>
                      <p>{prod.description}</p>
                      {
                        user && <div className="user-buttons">
                          <Link to={`/editar-producto/${prod.id}`}>
                            Editar
                          </Link>
                          <button onClick={() => handlerDeleteProduct(prod.id)}>Borrar</button>
                        </div>
                      }
                      <button>Comprar</button>
                    </div>
                    )
                })
              }
            </section>
        </main>
    )
}
export default Main;