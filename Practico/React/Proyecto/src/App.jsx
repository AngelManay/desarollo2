import { useState } from "react";
import ListaDeProductos from "./components/ListaDeProductos";
import Carrito from "./components/Carrito";
import groceries from "./data/groceries";
import "./App.css";

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);

  const calcularTotalCarrito = () => {
    return productosCarrito
      .reduce(
        (total, producto) => total + producto.unitPrice * producto.cantidad,
        0
      )
      .toFixed(2);
  };

  return (
    <>
      <div>
        <div className="row container">
          <div className="col-6">
            <ListaDeProductos
              productosCarrito={productosCarrito}
              setProductosCarrito={setProductosCarrito}
              productos={groceries}
            />
          </div>
          <div className="col-6">
            <Carrito
              productosCarrito={productosCarrito}
              setProductosCarrito={setProductosCarrito}
            />
            <div className="total">
              <h6>Total: ${calcularTotalCarrito()}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
