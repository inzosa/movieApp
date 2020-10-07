import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const CardStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1000px;
  margin: 100px 0px 50px 460px;
  border: 1px solid rgb(212, 210, 210);
  border-radius: 6px;
  box-shadow: 0px 0px 2px rgb(172, 170, 170);
`;
const CardImgStyle = styled.img`
  background-size: 100% 100%;
  height: 300px;
  width: 400px;
`;
const CardContentStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: left;
  font-weight: 600;
  margin-left: 10px;
`;
const DelBtnStyle = styled.button`
  background-color: #ff6875;
  margin: 20px 10px 0px 0px;
  color: black;
  width: 70px;
  height: 45px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 6px;
  border: 0px;
  cursor: pointer;
`;
const MovieList = () => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => setMovie(res));
  }, []);

  function deleteBtn(movieId) {
    fetch("http://10.100.102.2:8000/api/movie/" + movieId, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          let newMovie = movies.filter((movie) => movie.id !== movieId);
          setMovie(newMovie);
        }
      });
  }
  return (
    <div>
      <Nav />
      {movies.map((movie) => (
        <CardStyle key={movie.id}>
          <Link to={`/detail/${movie.id}`}>
            <CardImgStyle src={movie.medium_cover_image} />
          </Link>
          <CardContentStyle>
            {movie.title}
            <DelBtnStyle onClick={() => deleteBtn(movie.id)}>삭제</DelBtnStyle>
          </CardContentStyle>
        </CardStyle>
      ))}
    </div>
  );
};

export default MovieList;
