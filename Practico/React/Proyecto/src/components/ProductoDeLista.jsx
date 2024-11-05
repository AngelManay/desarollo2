function ProductoDeLista({ producto, setProductosCarrito, productosCarrito }) {
  function handleOnClick() {
    setProductosCarrito([...productosCarrito, producto]);
  }
  return (
    <>
      <p
        onClick={() => {
          handleOnClick();
        }}
      >
        {producto.name} ${producto.unitPrice}
      </p>
    </>
  );
}

export default ProductoDeLista;
