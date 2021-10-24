import styled from "styled-components"
import { keyframes } from "styled-components"
import { FaDiscord } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { CgSearch } from "react-icons/cg"

export const MissionBackground = styled.div`
  position: relative;
  height: 300px;
`

export const Background = styled.div`
  position: relative;
  height: 300px;
  width: 650px;
`

export const Title = styled.div`
  font-size: 55px;
  font-weight:600;
  color:#383838;
  line-height: 1.14;
  text-align: center;
`

export const Description = styled.div`
  padding-top:30px;
  font-size: 25px;
  line-height: 1.5;
  font-weight:500;
  color:#383838;
`

export const SubDescription = styled.div`
  padding-top:10px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 300;
  color:#383838;
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
export const Image = styled.div`
  width: 100%;
  margin: 0px 100px;
  margin-top: -30px;
`

export const Link = styled.a`
  padding-top:10px;
  font-size: 25px;
  line-height: 1.6;
  font-weight:500;
  color:gray;
  text-decoration: underline;
`


