import React, { useEffect, useState } from "react";
import { API } from "../API";
import styled from "styled-components";
import { Header } from "./header";
import { useParams } from "react-router-dom";
const Contenere = styled.div`
margin-top: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Flex = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  margin-top: 61px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div`
  margin-top: 61px;
  width: 70%;
  font-style: normal;
  font-size: 18px;
  line-height: 29px;

  /* Black */

  color: #25313c;
`;
const Users = styled.div`
  width: 70%;
  height: 79px;
  margin-top: 21px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  width: 70%;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 80px;
  display: flex;
  align-items: center;
  color: #25313c;
`;
const Comm = styled.div`
  width: 70%;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

export const Post = () => {
  const [data, setData] = useState({});
  let { postId } = useParams();
  useEffect(() => {
    API.get(`/posts/${postId}`)
      .then((el) => {
        setData(el.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // if(data)
  return (
    <Contenere>
      <Header></Header>
      <Flex>
        <Title>{data.title}</Title>
        {/* <Users>
              <div style={{ width: '30%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '45px', backgroundColor: 'black' }}><img src={data && data[0].author.image} /></div>
                <div>{data && el.author.username}</div>
              </div>
            </Users> */}
        <Img src={data && data.image} />
        <Description>{data && data.body}</Description>
        {/* <Users>
              <div style={{ width: '30%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '45px', backgroundColor: 'black' }}><img src={data && data[0].author.image} /></div>
                <div>{data && data[0].author.username}</div>
              </div>
            </Users> */}
        <div
          style={{
            width: "70%",
            margin: "80px",
            border: "1px solid rgba(109, 125, 139, 0.22)",
          }}
        ></div>
        <Comm>
          <div>Join the conversation</div>
          <div style={{ width: "100%", display: "flex" }}>
            {/* <div style={{ width: '56px', height: '56px', marginTop: '10px', borderRadius: '45px', backgroundColor: 'black' }}><img src={data && data[0].author.image} /></div> */}

            <input
              name="Comments"
              style={{
                border: "none",
                width: "60%",
                marginLeft: "5px",
                height: "100px",
                borderRadius: "15px",
                border: "2px solid #BBC8D4",
                marginTop: "10px",
              }}
            />
          </div>
        </Comm>
      </Flex>
    </Contenere>
  );
};

export default Post;
