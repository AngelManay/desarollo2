function ProductoCarrito({ producto, productosCarrito, setProcutosCarrito }) {
  function handleOnClick() {
    setProcutosCarrito(
      productosCarrito.map(function (unProductoDelCarrito) {
        if (!producto.id === unProductoDelCarrito.id) {
          return unProductoDelCarrito;
        }
      })
    );
  }

  return <p onClick={() => handleOnClick}>{producto.name}</p>;
}

export default ProductoCarrito;
