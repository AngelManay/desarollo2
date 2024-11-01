function TitleMovie({ nombrepeli, reseniapeli, imgpeli }) {
  if (reseniapeli === "Increible") {
    color = "bg-danger";
  } else if (reseniapeli === "Muy buena") {
    color = "bg-warning";
  } else if (reseniapeli === "Obra maestra") {
    color = "bg-success";
  }
  return (
    <>
      <h1 className="fs-4 p-3 bg-black">{nombrepeli}</h1>
      <h2 className={`fs-6 ${color}`}>{reseniapeli}</h2>
      <img src={imgpeli} className="movie-img" />
    </>
  );
}
export default TitleMovie;
