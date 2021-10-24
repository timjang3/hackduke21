import React, { useState } from "react";
import Link from "next/link";
import { NavBar, Region, RegionSelect } from "../../elements/index";
import { useRouter } from "next/router";
import * as Styled from "./Mission.styled";

export function Mission() {
  const router = useRouter();

  return (
    
    <Styled.Flex>
      <Styled.Background>
            <Styled.Title>Welcome to the biggest online library of instruments!</Styled.Title>
            <Styled.Description>We’re a non-profit dedicated to providing underpriveledged right-leaning students with access to gluten free musical instruments.</Styled.Description>
            <Styled.Link >Our Story</Styled.Link>
      </Styled.Background>
      <Styled.Image><img src="https://i.ibb.co/KK7f4np/Children-instruments.jpg" alt="Children playing instruments"/></Styled.Image>
    </Styled.Flex>
  );
}
