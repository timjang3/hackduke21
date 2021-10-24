
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing, Instruments} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";
import styled from "styled-components"

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <TopBar />
      <Landing />
      <Flex>
        <Instruments />
        <Instruments />
        <Instruments />
      </Flex>
    </div>
  );
}

export const Flex = styled.div`
  width:1200px;
  margin:auto;
  display:flex;
  margin-top:30px;
  justify-content:space-between;
`