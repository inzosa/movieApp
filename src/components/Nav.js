import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  grid-gap: 60px;
  list-style-type: none;
  font-size: 60px;
  color: red;
`;
const Nav = () => {
  return (
    <NavStyle>
      <li>
        <Link to="/list" style={{ textDecoration: "none", color: "#fad4ae" }}>
          영화목록
        </Link>
      </li>
      <li>
        <Link to="/" style={{ textDecoration: "none", color: "#fad4ae" }}>
          영화등록
        </Link>
      </li>
    </NavStyle>
  );
};

export default Nav;
