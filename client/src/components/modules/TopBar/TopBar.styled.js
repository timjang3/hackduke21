import styled from "styled-components"
import { keyframes } from "styled-components"
import { FaDiscord } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { CgSearch } from "react-icons/cg"

export const Background = styled.div`
  position: relative;
  height: 190px;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const Title = styled.div`
  font-size: 80px;
  color:black;
  font-weight:700;
`

export const Flex = styled.div`
  margin-top:15px;
  display:flex;
  justify-content:space-between;
  width:1200px;
  margin:auto;

  @media(max-width: 1240px){
    width: 99%;
  }
`
export const Button = styled.div`
  background-color:#BFDE8D;
  margin:auto;
  font-size:28px;
  font-weight:500;
  border-radius:7px;
  padding-top:6px;
  padding-bottom:7px;
  padding-left: 15px;
  padding-right: 15px;
`



