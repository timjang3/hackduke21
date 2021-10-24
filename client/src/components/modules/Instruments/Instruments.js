import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./Instruments.styled";

export function Instruments({data}) {
  return (
    <Styled.Background>
      <Styled.ImageContainer>
        <Styled.Image src={data.image}/>
      </Styled.ImageContainer>
      <Styled.Description>{data.name}</Styled.Description>
    </Styled.Background>
  );
}
