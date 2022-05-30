/** @format */

import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

interface SVGRProps {
  color?: string;
  transform?: string;
}

const Svg = styled.svg`
  transform: ${({ transform }) => (transform ? transform : undefined)};
`;

const FlameActive = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="FlameActive"
    transform={transform}
  >
    <title>FlameActive</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Icons/Flame.active" fill="#FF743D">
        <path
          d="M13.5647,6.05309764 C13.4077,5.67009764 13.2557,5.30209764 13.1307,4.95609764 C13.0097,4.62109764 12.6707,4.41809764 12.3177,4.47109764 C11.9647,4.52309764 11.6977,4.81709764 11.6767,5.17209764 C11.6757,5.18309764 11.6257,5.96309764 11.2007,6.66509764 C10.4137,3.11409764 9.0047,1.10609764 6.6237,0.0630976362 C6.3727,-0.0469023638 6.0837,-0.0109023638 5.8677,0.154097636 C5.6507,0.320097636 5.5417,0.589097636 5.5807,0.859097636 C5.8987,3.03109764 4.8457,4.18609764 3.2517,5.93509764 L2.8967,6.32609764 C1.5447,7.82309764 0.9877,9.68209764 1.3687,11.4250976 C1.7897,13.3540976 3.2787,14.9570976 5.5607,15.9390976 C5.8957,16.0810976 6.2787,15.9630976 6.4797,15.6610976 C6.6797,15.3590976 6.6317,14.9530976 6.3697,14.7020976 C6.3437,14.6780976 5.7477,14.0950976 5.8457,13.1650976 C5.9167,12.4990976 6.3617,11.5050976 7.9377,10.2900976 C8.0367,11.1520976 8.4597,11.5560976 8.9797,11.9490976 C9.1157,12.0500976 9.2607,12.1560976 9.3987,12.3060976 C10.1227,13.0960976 10.1697,13.8600976 9.5567,14.8580976 C9.3857,15.1370976 9.4157,15.4960976 9.6307,15.7430976 C9.7767,15.9100976 9.9847,16.0000976 10.1967,16.0000976 C10.2977,16.0000976 10.4007,15.9800976 10.4987,15.9370976 C16.5257,13.2900976 14.7437,8.93509764 13.5647,6.05309764"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default FlameActive;
