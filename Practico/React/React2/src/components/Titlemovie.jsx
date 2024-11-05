function TitleMovie({ nombrepeli, reseniapeli, imgpeli }) {
  let color;
  if (reseniapeli === "Increible") {
    color = "bg-danger";
  } else if (reseniapeli === "Muy buena") {
    color = "bg-warning";
  } else if (reseniapeli === "Obra maestra") {
    color = "bg-success";
  } else {
    color = "bg-secondary";
  }

  return (
    <>
      <h1 className="fs-4 p-3 m-0 bg-black">{nombrepeli}</h1>
      <h2 className={`fs-6 p-2 m-0 mb-1 ${color}`}>{reseniapeli}</h2>
      <img src={imgpeli} alt={nombrepeli} className="movie-img" />
    </>
  );
}
export default TitleMovie;
