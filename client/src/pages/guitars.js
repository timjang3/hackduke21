import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing, Mission, InstrumentCard} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Guitars() {
  let isBuilderFriendly = useMediaQuery("(min-width: 1310px)");
  const router = useRouter();
  return (
    <div>
        <TopBar />
        <InstrumentCard />
    </div>
  );
}
