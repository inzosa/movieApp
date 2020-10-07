import React from "react";
import { Route } from "react-router-dom";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div>
      <Route path="/list" exact={true} component={MovieList}></Route>
      <Route path="/" exact={true} component={Movie}></Route>
      <Route path="/detail/:id" exact={true} component={MovieDetail}></Route>
    </div>
  );
}

export default App;
