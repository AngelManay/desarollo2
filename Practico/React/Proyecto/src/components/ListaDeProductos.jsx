import ProductoDeLista from "./ProductoDeLista";
function ListaDeProductos({
  productos,
  productosCarrito,
  setProductosCarrito,
}) {
  return (
    <>
      <h2>Lista de Productos</h2>
      {productos.map(function (producto) {
        return (
          <ProductoDeLista
            productosCarrito={productosCarrito}
            setProductosCarrito={setProductosCarrito}
            producto={producto}
          />
        );
      })}
    </>
  );
}

export default ListaDeProductos;
