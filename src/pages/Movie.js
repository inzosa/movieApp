import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const BackgroundStyle = styled.div`
  background-image: url("images/background.jpg");
  height: 969px;
  background-size: 100% 100%;
`;

const SaveStyle = styled.div`
  width: 650px;
  height: 500px;
  border-radius: 10px;
  display: inline-block;
  background-color: white;
  position: relative;
  top: 100px;
  left: 200px;
  padding: 20px 30px;
  box-shadow: 0px 2px 2px 0px rgb(214, 214, 214);
`;
const SaveInputStyle = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 5px;
`;
const SaveTextStyle = styled.textarea`
  width: 500px;
  border-radius: 5px;
  resize: none;
`;
const SaveBtnStyle = styled.button`
  background-color: #faf1d6;
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
const SaveSubTitleStyle = styled.td`
  font-size: 12px;
`;
const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function submitUser(e) {
    e.preventDefault();
    console.log(movie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화등록 성공");
        }
      });
  }

  function resetButton(e) {
    e.preventDefault();
    setMovie({ title: "", rating: "", medium_cover_image: "", summary: "" });
    console.log(movie);
  }
  return (
    <div>
      <BackgroundStyle>
        <Nav />
        <SaveStyle>
          <form style={{ marginLeft: "40px", marginTop: "20px" }}>
            <table style={{ withd: "100%" }}>
              <tr>
                <SaveSubTitleStyle>제목</SaveSubTitleStyle>
              </tr>
              <tr>
                <td>
                  <SaveInputStyle
                    type="text"
                    name="title"
                    onChange={inputHandle}
                    placeholder="영화제목"
                  />
                </td>
              </tr>
              <tr>
                <SaveSubTitleStyle>평점</SaveSubTitleStyle>
              </tr>
              <tr>
                <td>
                  <SaveInputStyle
                    type="number"
                    name="rating"
                    min="0"
                    onChange={inputHandle}
                    placeholder="평점"
                  />
                </td>
              </tr>
              <tr>
                <SaveSubTitleStyle>줄거리</SaveSubTitleStyle>
              </tr>
              <tr>
                <td>
                  <SaveTextStyle
                    cols="30"
                    rows="10"
                    name="summary"
                    onChange={inputHandle}
                    placeholder="영화 줄거리"
                  ></SaveTextStyle>
                </td>
              </tr>
              <tr>
                <SaveSubTitleStyle>사진</SaveSubTitleStyle>
              </tr>
              <tr>
                <td>
                  <SaveInputStyle
                    type="text"
                    name="medium_cover_image"
                    onChange={inputHandle}
                    placeholder="사진링크"
                  />
                </td>
              </tr>
            </table>
            <SaveBtnStyle onClick={submitUser}>등록</SaveBtnStyle>
            <SaveBtnStyle onClick={resetButton}>리셋</SaveBtnStyle>
          </form>
        </SaveStyle>
      </BackgroundStyle>
    </div>
  );
};

export default Movie;
