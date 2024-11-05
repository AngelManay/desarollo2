import { useState } from "react";
import ListaDeProductos from "./components/ListaDeProductos";
import groceries from "./data/groceries";
import "./App.css";

function App() {
  const [productosCarito, setProductosCarrito] = useState([
    { name: "un producto del carrito" },
  ]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ListaDeProductos
              productosCarrito={productosCarito}
              setProductosCarrito={setProductosCarrito}
              productos={groceries}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
