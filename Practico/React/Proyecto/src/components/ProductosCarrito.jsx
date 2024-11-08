function ProductosCarrito({ producto, productosCarrito, setProductosCarrito }) {
  function handleOnClick() {
    setProductosCarrito(
      productosCarrito
        .map(function (unProductoDelCarrito) {
          if (producto.id === unProductoDelCarrito.id) {
            if (unProductoDelCarrito.cantidad > 1) {
              return {
                ...unProductoDelCarrito,
                cantidad: unProductoDelCarrito.cantidad - 1,
              };
            }
            return null;
          }
          return unProductoDelCarrito;
        })
        .filter(Boolean)
    );
  }

  return (
    <div className="lista">
      <p onClick={handleOnClick}>
        <i class="bi bi-dash-circle"></i>
        {producto.name} (Cant: {producto.cantidad}) (${producto.unitPrice} c/u)
      </p>
    </div>
  );
}

export default ProductosCarrito;
