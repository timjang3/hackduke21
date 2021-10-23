import styled from "styled-components"
import { keyframes } from "styled-components"
import { FaDiscord } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { CgSearch } from "react-icons/cg"

export const Background = styled.div`
  position: relative;
  height: 140px;
  width: 100%;
  background-color: #303133;
  box-shadow: 0px 0px 15px #111;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: 950px) {
    height: 140px;
  }
`

export const TopFlex = styled.div`
  position: relative;
  width: 1340px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  margin: auto;

  @media (max-width: 1370px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    margin: auto;
    width: 450px;
  }
  @media (max-width: 570px) {
    width: 83%;
  }
`

export const SearchInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 47px;
  border-radius: 35px;
  border-style: none;
  background-color: #e7eaf1;
  font-size: 14px;
  outline: none;
  text-indent: 22px;
  font-size: 17px;
  font-family: "poppins";

  &::-webkit-search-cancel-button {
    margin-right: 20px;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    height: 43px;
  }
  @media (max-width: 430px) {
    height: 43px;
  }
`

export const InputDiv = styled.div`
  width: 820px;
  position: relative;

  @media (max-width: 1370px) {
    width: 60%;
  }
  @media (max-width: 1140px) {
    width: 53%;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 730px) {
    width: 100%;
  }
  @media (max-width: 570px) {
    width: 95%;
    margin-left: 8%;
  }
`

export const Logo = styled.img`
  cursor: pointer;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media (max-width: 1300px) {
    width: 190px;
    height: auto;
  }
  @media (max-width: 1370px) {
    margin-left: 5px;
  }
  @media (max-width: 950px) {
    width: 220px;
  }
`

export const LogoDiv = styled.div`
  width: 220px;
  position: relative;
  @media (max-width: 1300px) {
    width: 190px;
  }
  @media (max-width: 950px) {
    width: 220px;
    margin: auto;
    margin-top: 38px;
  }
`

export const RightComponent = styled.div`
  width: 220px;
  position: relative;

  @media (max-width: 950px) {
    display: none;
  }
`

export const RightComponentDiv = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;
  left: 0;
  height: 30px;
  flex-direction: row;
  width: 190px;
  justify-content: space-around;

  @media (max-width: 1370px) {
    margin-right: 5px;
    justify-content: space-between;
  }

  @media (max-width: 1300px) {
    width: 170px;
    margin-right: 10px;
  }
`

const RegionHover = keyframes`
  0%{    
    background-color: #303133;
    width: 0px;
    height: 0px;
    top: 0;
    left: 0;
    margin-left: 25px;
    margin-top: 12.5px;
    border-radius: 20px;
    z-index: -1;
    position: absolute;
  }
  75%{
    width: 80px;
    height: 40px;
    top: 0;
    left: 0;
    margin-left: -11.9px;
    margin-top: -7.5px;
    border-radius: 20px;
    z-index: -1;
    position: absolute;
  }
  100%{
    width: 70px;
    height: 35px;
    background-color: #616368;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -8.2px;
    margin-top: -5px;
    border-radius: 20px;
    z-index: -1;
  }
`

export const DiscordIcon = styled(FaDiscord)`
  color: #e7eaf1;
  margin-top: 8.1px;
  margin-left: 1px;
  position: relative;
  z-index: 1;
`

const InstagramHover = keyframes`
  0%{    
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0%;
    height: 0%;
    background-color: #303133;
    border-radius: 50%;
    margin-left:-4.5px;
  }
  70%{
    position: absolute;
    top: -6.5%;
    left: -6.5%;
    width: 113%;
    height: 113%;
    border-radius: 50%;
    margin-left:-4.5px;
  }
  100%{
    position: absolute;
    top: 0;
    left: 0;
    margin-left:-4.5px;
    width: 100%;
    height: 100%;
    background-color: #616368;
    border-radius: 50%;
  }
`

export const Instagram = styled(AiOutlineInstagram)`
  margin-top: 5px;
  color: #e7eaf1;
  position: relative;
  z-index: 1;
`

export const InstagramWrapper = styled.div`
  position: relative;
  width: 43px;
  height: 43px;
  margin-top: -7px;
`

export const InstagramHoverDiv = styled.div`
  ${InstagramWrapper}:hover & {
    animation-name: ${InstagramHover};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`

export const Region = styled.div`
  color: #e7eaf1;
  margin-top: 1px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  font-size: 17px;
  font-weight: 500;
`

export const RegionHoverDiv = styled.div`
  ${Region}:hover & {
    animation-name: ${RegionHover};
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`

export const SearchIcon = styled(CgSearch)`
  color: #282828;
  position: absolute;
  right: 17px;
  top: 36px;
  cursor: pointer;
`
