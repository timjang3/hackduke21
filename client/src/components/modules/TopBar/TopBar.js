import React, { useState } from "react";
import Link from "next/link";
import { NavBar, Region, RegionSelect } from "../../elements/index";
import { useRouter } from "next/router";
import * as Styled from "./TopBar.styled";

export function TopBar() {
  const router = useRouter();

  return (
      <Styled.Background>
          <Styled.Title>HackDuke 21</Styled.Title>
          <Styled.Title>Click here if you want to lend your instrument</Styled.Title>
      </Styled.Background>
  );
}
