import React, { useState } from "react";
import Link from "next/link";
import { NavBar, Region, RegionSelect } from "../../elements/index";
import { useRouter } from "next/router";
import * as Styled from "./Mission.styled";

export function Mission() {
  const router = useRouter();

  return (
    <>
    <Styled.Flex>
      <Styled.MissionBackground>
            <Styled.Title>Our Mission</Styled.Title>
            <Styled.Description>At MoreMusic, we believe instruments are meant to be played. We strive to democratize access to music instruments by connecting owners of unused instruments to disadvantaged youth. Someday, we hope wealth will no longer be a barrier to the gift of musicianship.</Styled.Description>
      </Styled.MissionBackground>
      {/* <Styled.Image><img src="https://i.ibb.co/KK7f4np/Children-instruments.jpg" alt="Children playing instruments"/></Styled.Image> */}
    </Styled.Flex>
    <Styled.Flex>
      <Styled.Background>
            <Styled.SubDescription>At MoreMusic, we believe instruments are meant to be played. We strive to democratize access to music instruments by connecting owners of unused instruments to disadvantaged youth. Someday, we hope wealth will no longer be a barrier to the gift of musicianship.</Styled.SubDescription>
      </Styled.Background>

      <Styled.Image><img src="https://i.ibb.co/KK7f4np/Children-instruments.jpg" alt="Children playing instruments"/></Styled.Image>
      </Styled.Flex>
    <Styled.Flex>
      <Styled.Image><img src="https://i.ibb.co/hXXjKq6/slider-800x533-1.jpg" alt="Children playing instruments"/></Styled.Image>
      <Styled.Background>
            <Styled.SubDescription>Community is of utmost importance to us. We hope to build connections between individuals from all walks of life through the shared love of muisc.</Styled.SubDescription>
      </Styled.Background>
    </Styled.Flex>
    <Styled.Flex>
      <Styled.Background>
            <Styled.SubDescription>No longer will guitars and keyboards collect dust in the corner of your garage. Lend your instruments today and follow the progress of a new musician!</Styled.SubDescription>
      </Styled.Background>
      <Styled.Image><img src="https://i.ibb.co/1Kh5S7M/families-banner35.jpg" alt="Children playing instruments"/></Styled.Image>
    </Styled.Flex>
    </>
    
  );
}
