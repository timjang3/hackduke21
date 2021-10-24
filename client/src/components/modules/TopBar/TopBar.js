import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from "./TopBar.styled";

export function TopBar() {
  const router = useRouter();

  return (
      <Styled.Background>
          <Styled.Flex>
            <Styled.Title>MoreMusic</Styled.Title>
            <div style={{display:"flex"}}>
              <Styled.Button>Lend Instruments</Styled.Button>
              <Styled.Button style={{backgroundColor:"#c4c4c4", marginLeft:"25px"}}>Sign In</Styled.Button>
            </div>
          </Styled.Flex>
      </Styled.Background>
  );
}
