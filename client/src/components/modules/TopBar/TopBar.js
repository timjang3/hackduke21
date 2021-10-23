import React, { useState } from "react";
import Link from "next/link";
import { NavBar, Region, RegionSelect } from "../../elements/index";
import { useRouter } from "next/router";
import * as Styled from "./TopBar.styled";

export function TopBar() {
  const router = useRouter();
  const [isPressed, setIsPressed] = useState(false);
  const [state, setState] = useState("");
  const [value, setValue] = useState(router.query.search);

  function handleRegionButton() {
    if (isPressed) {
      setIsPressed(false);
    } else {
      setIsPressed(true);
    }
  }

  return (
    <>
      <Styled.Background></Styled.Background>
    </>
  );
}
