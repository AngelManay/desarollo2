function ProductoDeLista({ producto, setProductosCarrito, productosCarrito }) {
  function handleOnClick() {
    const productoEnCarrito = productosCarrito.find(
      (p) => p.id === producto.id
    );

    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad < 5) {
        setProductosCarrito(
          productosCarrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          )
        );
      } else {
        console.log("No puedes agregar más de 5 unidades de este producto");
      }
    } else {
      setProductosCarrito([...productosCarrito, { ...producto, cantidad: 1 }]);
    }
  }

  return (
    <div className="lista" onClick={handleOnClick}>
      <i class="bi bi-plus-circle"></i>
      <span>
        {producto.name} (${producto.unitPrice} c/u)
      </span>
    </div>
  );
}

export default ProductoDeLista;
