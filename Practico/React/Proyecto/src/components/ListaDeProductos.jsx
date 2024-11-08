import ProductoDeLista from "./ProductoDeLista";
function ListaDeProductos({
  productos,
  productosCarrito,
  setProductosCarrito,
}) {
  return (
    <>
      <h4>Lista de Productos</h4>

      <div className="card card-body">
        {productos.map(function (producto) {
          return (
            <ProductoDeLista
              productosCarrito={productosCarrito}
              setProductosCarrito={setProductosCarrito}
              producto={producto}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListaDeProductos;
