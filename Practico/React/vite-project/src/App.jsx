// import Title from "./components/Welcome";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Title name="María Perez" />
//     </>
//   );
// }

// export default App;

// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";
// import Description from "./components/Description";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Title saludo="Hola" />
//       <Subtitle sub="Subtitulo" />
//       <Description descripcion="María" />
//     </>
//   );
// }

// export default App;
// import Persona from "./components/Persona";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Persona name="Angel" edad="23" />
//     </>
//   );
// }

// export default App;

import "./App.css";
import TitleMovie from "./components/TitleMovie";

function App() {
  return (
    <>
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <div className="card col-4">
            <TitleMovie
              nombrepeli="Dogthoot (2009)"
              reseniapeli="Increible"
              imgpeli="https://m.media-amazon.com/images/M/MV5BMjIyOTkyMDE5N15BMl5BanBnXkFtZTcwNjIwNzQwMw@@._V1_.jpg"
            />
          </div>
          <div className="card col-4">
            <TitleMovie
              nombrepeli="At eternity's gate (2019)"
              reseniapeli="Muy buena"
              imgpeli="https://a.ltrbxd.com/resized/film-poster/4/2/2/0/9/6/422096-at-eternity-s-gate-0-2000-0-3000-crop.jpg?v=05fad8a4cd"
            />
          </div>
          <div className="card col-4">
            <TitleMovie
              nombrepeli="Full Metal Jacket (1987)"
              reseniapeli="Obra maestra"
              imgpeli="https://a.ltrbxd.com/resized/sm/upload/l0/l4/6c/7v/29veIwD38rVL2qY74emXQw4y25H-0-2000-0-3000-crop.jpg?v=6e44829670"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
