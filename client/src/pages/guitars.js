import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import {TopBar, Landing, Mission, InstrumentCard} from "../components/modules/index"
import { useMediaQuery } from "../hooks/useMediaQuery";
import styled from "styled-components"


let guitarArray = [
  {
    name: "Peavey 3/4 size",
    image: "https://i.ibb.co/dMjXFPs/s-l400.jpg",
    owner: "john.thomas@gmail.com"
  },
  {
    name: "Cort AF510",
    image: "https://i.ibb.co/1fq7TVn/cort-af510-acoustic-guitar-bad-finish-360-74d9a9d4a785009c5877a180b42c4830.jpg",
    owner: "allison.richardson@gmail.com"
  },
  {
    name: "Fender Autographed",
    image: "https://i.ibb.co/D70XRgx/ck1dcads72ctbbs1q2av.jpg",
    owner: "chris.smith@gmail.com"
  },
  {
    name: "Reglar 1960's Vintage",
    image: "https://i.ibb.co/1JX49YH/b5chv9itywvgcsj81n2g.jpg",
    owner: "alexa432@yahoo.com"
  },
  {
    name: "Left-Handed Martin",
    image: "https://i.ibb.co/Tg89K6X/c-f-martin-guitars-acoustic-guitar-martin-left-handed-standard-series-d-41-acoustic-guitar-299234607.jpg",
    owner: "jeffrey917@gmail.com"
  },
  {
    name: "Epiphone",
    image: "https://i.ibb.co/cxgGhRt/generic-guitar-indoors-resized-e1602545144526.jpg",
    owner: "amy.wright@aol.com"
  }
]

export default function Guitars() {
  let isBuilderFriendly = useMediaQuery("(min-width: 1310px)");
  const router = useRouter();

  return (
    <div>
        <TopBar />
        <Title>Guitars</Title>

                <Flex>
        {
          guitarArray.map((index) =>
            <InstrumentCard data={index}/>
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
  margin-top: 50px;
  justify-content:space-between;
  flex-wrap: wrap;
`
export const Title = styled.div`
  text-align: center;
  font-size: 55px;
  font-weight:600;
  color:#383838;
`