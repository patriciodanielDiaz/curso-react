import { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {

  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setProductsList(data);
    } catch (error) {
      setError("Error al recuperar los productos");
      console.error("Error al recuperar los productos:", error);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, []);

  const products = [];

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
                      <img src={prod.image} alt={"imagen del producto"} />
                      <h2>{prod.title}</h2>
                      <p>Precio: {prod.price}</p>
                      <p>{prod.description}</p>
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