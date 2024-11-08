import ProductosCarrito from "./ProductosCarrito";
function Carrito({ productosCarrito, setProductosCarrito }) {
  return (
    <>
      <h4>Carrito</h4>

      <div className="card card-body">
        {productosCarrito.map(function (producto) {
          return (
            <ProductosCarrito
              producto={producto}
              productosCarrito={productosCarrito}
              setProductosCarrito={setProductosCarrito}
            />
          );
        })}
      </div>
    </>
  );
}

export default Carrito;
