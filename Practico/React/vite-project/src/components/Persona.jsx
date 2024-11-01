function Persona({ name, edad }) {
  return (
    <>
      <p>{name}</p>
      <p>
        {edad >= 18
          ? "Bienvenido. Lo invitamos a tomar una cerveza"
          : "Lo sentimos, no tiene edad legal para beber alcohol"}
      </p>
    </>
  );
}

export default Persona;
