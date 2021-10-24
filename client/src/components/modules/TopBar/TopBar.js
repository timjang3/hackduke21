import React, { useState } from "react";
import Link from "next/link";
import { NavBar, Region, RegionSelect } from "../../elements/index";
import { useRouter } from "next/router";
import * as Styled from "./TopBar.styled";

export function TopBar() {
  const router = useRouter();

  return (
    <Styled.Background>
      <Styled.Title>HackDuke</Styled.Title>
    </Styled.Background>
  );
}
