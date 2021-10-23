import { TopBar } from "../components/modules/index";
import { NextSeo } from "next-seo";
import { HomeBanner } from "../../styles/ConstantStyles";
import styled from "styled-components";
import { BiRightArrowAlt } from "react-icons/bi";
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home({ data }) {
  let isBuilderFriendly = useMediaQuery("(min-width: 1310px)");
  const router = useRouter();
  return (
    <div>
      <NextSeo title="HackDuke 21" description="" />
      <TopBar />
    </div>
  );
}
