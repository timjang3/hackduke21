
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing, Mission} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function About() {
  let isBuilderFriendly = useMediaQuery("(min-width: 1310px)");
  const router = useRouter();
  return (
    <div>
      <TopBar />
      <Mission />
    </div>
  );
}
