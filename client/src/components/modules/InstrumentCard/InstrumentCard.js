import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./InstrumentCard.styled";

export function InstrumentCard({data}) {
  return (
    <Styled.Background>
      {/* <Styled.Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></Styled.Image> */}
      {/* <Styled.InstrumentDescription>Hello</Styled.InstrumentDescription> */}
      <Styled.ImageContainer>
        <Styled.Image src={data.image}/>
      </Styled.ImageContainer>
      <Styled.DesriptionWrapper>
        <Styled.InstrumentDescription>{data.name}</Styled.InstrumentDescription>
        <Styled.InstrumentDescription>{data.owner}</Styled.InstrumentDescription>
      </Styled.DesriptionWrapper>
    </Styled.Background>
  );
}