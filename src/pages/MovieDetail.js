import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const UpdateStyle = styled.div`
  width: 700px;
  height: 500px;
  border-radius: 10px;
  display: inline-block;
  background-color: #ffb1b9;
  position: relative;
  top: 100px;
  left: 600px;
  padding: 20px 30px;
  box-shadow: 0px 2px 2px 0px rgb(214, 214, 214);
`;
const UpdateInputStyle = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 5px;
`;
const UpdateTextStyle = styled.textarea`
  width: 500px;
  border-radius: 5px;
  resize: none;
`;
const UpdateBtnStyle = styled.button`
  background-color: #acbfea;
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
const UpdateSubTitleStyle = styled.td`
  font-size: 12px;
`;

const MovieDetail = (props) => {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie/" + id)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }, []);

  function updateHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function updateById() {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화수정 성공!!!");
        }
      });
  }

  return (
    <div>
      <Nav />
      <UpdateStyle>
        <form>
          <table>
            <tr>
              <UpdateSubTitleStyle>사진</UpdateSubTitleStyle>
            </tr>
            <tr>
              <td>
                <UpdateInputStyle
                  type="text"
                  name="medium_cover_image"
                  onChange={updateHandle}
                  value={movie.medium_cover_image}
                />
              </td>
            </tr>
            <tr>
              <UpdateSubTitleStyle>제목</UpdateSubTitleStyle>
            </tr>
            <tr>
              <td>
                <UpdateInputStyle
                  type="text"
                  name="title"
                  onChange={updateHandle}
                  value={movie.title}
                />
              </td>
            </tr>
            <tr>
              <UpdateSubTitleStyle>평점</UpdateSubTitleStyle>
            </tr>
            <tr>
              <td>
                <UpdateInputStyle
                  type="number"
                  name="rating"
                  min="0"
                  onChange={updateHandle}
                  value={movie.rating}
                />
              </td>
            </tr>
            <tr>
              <UpdateSubTitleStyle>줄거리</UpdateSubTitleStyle>
            </tr>
            <tr>
              <td>
                <UpdateTextStyle
                  cols="30"
                  rows="10"
                  name="summary"
                  onChange={updateHandle}
                  value={movie.summary}
                ></UpdateTextStyle>
              </td>
            </tr>
          </table>
        </form>
        <UpdateBtnStyle onClick={() => updateById()}>수정</UpdateBtnStyle>
      </UpdateStyle>
    </div>
  );
};

export default MovieDetail;
