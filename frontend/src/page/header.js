import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../icon/Logo";
const Contenere = styled.div`
  top: 0px;
  height: 0px;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: #ffff;
`;
const Linking = styled.div`
  padding: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Button = styled.button`
  width: 30%;
  height: 70%;
  border: 2px solid #ffffff;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const Header = ({data}) => {
  // console.log(data)
  return (
    <Contenere>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div style={{ display: "flex", width: "26%", alignItems: "center" }}>
        <Linking>Products</Linking>
        <Linking>Services</Linking>
        <Linking>Sign up</Linking>
        <Linking>
          <Link to="/login">Log in</Link>
        </Linking>
        <Button>
          <Link to="/add_post">Add post</Link>
        </Button>
      </div>
    </Contenere>
  );
};
export { Header };
