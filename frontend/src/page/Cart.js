import React, { useMemo }  from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import {Post} from'./Post';
const Contenere = styled.div`
width: 20%;
height: 440px;
background: #FFFFFF;
border-radius: 30px;
border: 2px solid black;
display: flex;
flex-direction: column;
align-items: center;
margin:50px;
`
const Img = styled.img`
width: 100%;
height: 30%;
border-radius: 30px 30px 0px 0px;
`
const Title = styled.div`
width: 70%;
margin-top: 21px;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #25313C;
`
const Comm = styled.div`
width: 70%;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: flex-end;
color: #25313C;
/* text-transform: uppercase; */
`
const Users = styled.div`
width: 80%;
height: 79px;
margin-top: 30px;
display: flex;
align-items: center;
`
export const Carts = (props) => {
    const description = props?.prop?.description;
  const Description = useMemo(
    () => (description?.length > 90 ? description.substring(0, 20) + "..." : description),
    [description]
  );
  // const Data = () => {
  //   const data = props.prop
  //   console.log(data)
  //   return(
  //     <Post data={data}/>
  //   )
  // }

    return(
        <Contenere>
            <Img src={props?.prop?.coverImage}/>
            <Title ><Link to={`/Post/${props?.prop?._id}`} >{props?.prop?.title}</Link></Title>
            <Comm style={{marginTop:'25px'}}>{Description}</Comm>
        <Users>
          <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',}}>
          <div style={{width:'56px',height:'56px',display:'flex'}}><img style={{borderRadius:'45px'}} src={props?.prop?.author?.image }/></div>
          <Comm>{props?.prop?.author?.username }</Comm>
          </div>
        </Users>
        </Contenere>
    )
} 