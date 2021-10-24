
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function About() {
  let isBuilderFriendly = useMediaQuery("(min-width: 1310px)");
  const router = useRouter();
  return (
    <div>
      <TopBar />
      <div>This is our about page</div>
    </div>
  );
}
