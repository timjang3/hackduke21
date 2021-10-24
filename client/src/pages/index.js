
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing, Instruments, InstrumentCard} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";
import styled from "styled-components"

let instrumentsArray = [
  {
    name: "Guitar",
    image: "https://i.ibb.co/RB0PDV7/TV65rv-Mm-ZUx6-p-Ek8-FZKXTBSX0z-XOq-Y9z-PMm3l-O9-LFew7-DXQDhmb-Pjd-NMXUWZde-OLkn7q-Lq6-MQ-s900-c-k-c.jpg"
  },
  {
    name: "Keyboard",
    image: "https://i.ibb.co/PZ7Lj1K/images-q-tbn-ANd9-Gc-TW-ZV3r-Bj2d7-JW8-QILu-LPsbl-W3jnye0v-Wdbg-usqp-CAU.jpg"
  },
  {
    name: "Trumpet",
    image: "https://i.ibb.co/2MK2k2n/trumpet-maintenance-adams-music.jpg"
  },
  {
    name: "Violin",
    image: "https://i.ibb.co/ynLBkL6/16e2ef0e21a48b7eab250f8a4bc1a5bc.jpg"
  },
  {
    name: "Saxophone",
    image: "https://i.ibb.co/8KWn1Qy/88269917-2494183857501366-2940449703080230912-n.jpg"
  },
  {
    name: "Flute",
    image: "https://i.ibb.co/wrb1TTw/1262653.jpg"
  },
]

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <TopBar />
      <Landing />
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

export const Flex = styled.div`
  width:1200px;
  margin:auto;
  display:flex;
  margin-top:160px;
  justify-content:space-between;
  flex-wrap: wrap;
`