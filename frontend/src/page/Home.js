import React from "react";
import styled from 'styled-components'
import { Header } from './header';

export const Home = () => {
const image = require("../icon/HomeP1.jpg")
    const Contenere = styled.div`
      width: 100vw ;
      height: 100vh;
      /* display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed; */
    `
    const Photo = styled.div`
    background-image: url(../icon/HomeP1.jpg);
  background-size: cover;
      /* display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed; */
    `
    return (
        <Contenere>
            {/* <Header></Header> */}
          
{/* <img src="../icon/HomeP1.jpg" style={{
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "-1"
}}/> */}
<div style={{backgroundImage:`url(${require("https://brunswickhlc.org.uk/wp-content/uploads/2017/10/online-942408_960_720.jpg")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>
</div>
        </Contenere>
    )
}