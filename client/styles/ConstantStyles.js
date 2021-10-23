import styled from "styled-components"
import { keyframes } from "styled-components"
import { BiRightArrowAlt } from "react-icons/bi"

export const Container = styled.div`
  width: 1320px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  align-items: flex-start;

  @media (max-width: 1328px) {
    width: 100%;
  }
`

export const ListingContainer = styled.div`
  width: 1040px;
  @media (max-width: 1328px) {
    width: 80%;
  }
  @media (max-width: 1076px) {
    width: 94%;
  }
  @media (max-width: 642px) {
    width: 350px;
  }
  @media (max-width: 370px) {
    width: 96%;
  }
`

export const FilterContainer = styled.div`
  @media (max-width: 1076px) {
    display: none;
  }
`

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: white;
  width: 185px;
  white-space: nowrap;
  margin-top: 35px;
  margin-bottom: -5px;
  cursor: pointer;
`

export const HomeBanner = styled.div`
  width: 100%;
  height: 38px;
  background-color: #f1beb0;
  font-size: 16.5px;
  line-height: 38px;
  font-weight: 400;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 845px) {
    font-size: 14.5px;
    white-space: nowrap;
  }

  @media (max-width: 375px) {
    font-size: 13px;
  }
  @media (max-width: 335px) {
    font-size: 13px;
    white-space: normal;
    line-height: 17px;
  }
`

export const SubTitle = styled.h2`
  font-size: 17px;
  font-weight: 400;
  color: white;
  width: 185px;
  height: 18px;
  display: flex;
  margin-top: 0px;
`

export const SubText = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: white;
  white-space: nowrap;
  letter-spacing: 0.5px;
`

export const ArrowIcon = styled(BiRightArrowAlt)`
  margin-top: 4.2px;
  margin-right: 2px;
`
