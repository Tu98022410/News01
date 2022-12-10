import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API } from "../API";
import { Carts } from "./Cart";
import { Pooter } from "./Pooter";

import { Data } from "../data";
import { Header } from "./header";

const Contenere = styled.div`
  width: 80%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
`;
export const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    API.get("/posts")
      .then((el) => {
        setData(el);
      })
      .catch((err) => console.log(err));
  }, []);
  const Post = data?.data?.data;
  const User = data;
  console.log(User);
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {Data?.map((el) => {
        // console.log(el);
        return <Header data={el} />;
      })}
      <Contenere>
        <div
          style={{
            fontWeight: "800",
            fontSize: "48px",
            lineHeight: "60px",
            fontStyle: "normal",
          }}
        >
          {" "}
          Blog posts
        </div>
        <div
          style={{
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "29px",
            color: "#6D7D8B",
          }}
        >
          Our latest updates and blogs about managing your team
        </div>
        <Flex>
          {data &&
            Post?.map((el, key) => {
              return <Carts key={key} prop={el} user={data}></Carts>;
            })}
        </Flex>
      </Contenere>
      <Pooter></Pooter>
    </div>
  );
};
