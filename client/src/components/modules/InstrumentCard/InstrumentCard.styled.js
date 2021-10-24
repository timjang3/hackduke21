import styled from "styled-components"
import { keyframes } from "styled-components"
import { FaDiscord } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { CgSearch } from "react-icons/cg"

export const Background = styled.div`
  position: relative;
  height: 500px;
  border-radius:12px;
  width: 370px;
  // background-color:#DDDDDD;
  overflow:hidden;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
  text-align: center;
  margin-bottom:40px;
  transition: 500ms ease;
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.8);
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  // height:150%;
  overflow:hidden;
  margin:auto;
  border-radius:7px;
  // position:relative;
  // top:0;
  // position:absolute;
  z-index:0;
`
export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`
export const Title = styled.div`
  text-align: center;
  font-size: 55px;
  font-weight:600;
  color:#383838;
  line-height: 1.14;
  margin-bottom: 50px;
`
export const DesriptionWrapper = styled.div`
  background-color: light green
`
export const InstrumentDescription = styled.div`
  // background-color: white;
  font-size: 20px;
  // border: solid;
  // height: 100%;
`

export const Flex = styled.div`
  display:flex;
  justify-content:space-between;
  width:1200px;
  margin:auto;

  @media(max-width: 1240px){
    width: 99%;
  }
`
export const Button = styled.div`
  padding:15px;
  font-size:20px;
`
export const Link = styled.a`
  padding-top:10px;
  font-size: 25px;
  line-height: 1.6;
  font-weight:500;
  color:gray;
  text-decoration: underline;
`


