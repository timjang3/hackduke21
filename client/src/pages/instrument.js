import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Instrument() {
  let isBuilderFriendly = useMediaQuery("(min-width: 1310px)");
  const router = useRouter();

  let instrumentsArray = [
      
  ]

  return (
    <div>
      <TopBar />
      <Flex>
        {
          instrumentsArray.map((index) =>
            <Instruments data={index}/>
          )
        }
      </Flex>
    </div>
  );
}
