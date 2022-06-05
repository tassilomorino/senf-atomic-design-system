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

const Vereine = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Vereine"
    transform={transform}
  >
    <title>Vereine</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Vereine" fill="#000000">
        <path
          d="M8.59940149,6.88158366 C9.58562821,7.1252734 10.3276766,7.93947248 10.4790704,8.94401604 C10.6304641,9.9485596 10.1613396,10.9452933 9.29073983,11.4688236 C9.26270924,11.4883926 9.24168418,11.516426 9.23074644,11.5488147 C9.21057385,11.5883496 9.20773179,11.634488 9.22289972,11.6761998 C9.23806765,11.7179116 9.26988221,11.7514476 9.31073762,11.7687905 C10.5459835,12.2855929 11.3447297,13.4995289 11.3305149,14.838452 C11.3305845,14.9993816 11.2186565,15.1348266 11.0675149,15.1697972 L11.0005513,15.1784145 L5.00121283,15.1784145 C4.81737838,15.1676714 4.67551836,15.012512 4.68124812,14.8284531 C4.66774932,13.497999 5.45701911,12.2904162 6.6810276,11.7687905 C6.71585632,11.7568836 6.74459396,11.7317381 6.76101878,11.6987982 C6.80684205,11.6185745 6.78019815,11.5164396 6.7010254,11.4688236 C6.35428196,11.2569939 6.06294881,10.9656607 5.85111912,10.6189173 C5.32454507,9.75015516 5.37363748,8.64963441 5.97547419,7.83120884 C6.5773109,7.01278328 7.61317477,6.63789392 8.59940149,6.88158366 Z M1.69238213,12.4548274 C2.4156032,12.109184 3.24707783,12.0673753 4.00132309,12.3387276 L4.00132309,12.3387276 L4.00132309,12.3587254 C4.08701738,12.4004357 4.15049112,12.4771618 4.17540562,12.5691538 C4.20032011,12.6611458 4.18424158,12.7594174 4.13130876,12.8386725 C3.80517389,13.4554046 3.63038396,14.1408553 3.62136499,14.838452 C3.62407021,14.9276831 3.59050424,15.0142025 3.52832843,15.0782624 C3.46615261,15.1423224 3.38067346,15.1784555 3.29140138,15.1784145 L3.29140138,15.1784145 L0.291732149,15.1784145 C0.110170615,15.1477661 -0.0165870866,14.9816698 0.00176412357,14.7984564 C0.0316224099,14.5874541 0.0818514968,14.3798405 0.151747585,14.1785248 C0.41436189,13.4211928 0.969161063,12.8004707 1.69238213,12.4548274 Z M14.8628349,12.7950167 C15.4408847,13.2440375 15.832958,13.8873379 15.9692296,14.6019011 L16,14.7984564 L16,14.8184542 C15.9952668,14.9793142 15.8793464,15.1113585 15.7272284,15.1418029 L15.6600375,15.1484178 L12.6603683,15.1484178 C12.4726121,15.1484178 12.3204057,14.9962114 12.3204057,14.8084553 C12.3152395,14.1115794 12.143844,13.4259975 11.8204609,12.8086758 C11.8151194,12.792439 11.8151194,12.7749181 11.8204609,12.7586813 C11.7603467,12.5875251 11.8496725,12.3999408 12.0204388,12.3387276 C12.2217546,12.2688315 12.4293681,12.2186025 12.6403705,12.1887442 C13.4323572,12.0869748 14.2322352,12.3051759 14.8628349,12.7950167 Z M13.0003308,8.15915836 C13.6766034,8.15513889 14.2885409,8.55939886 14.5501501,9.18303476 C14.8117593,9.80667066 14.6713756,10.5265221 14.1946082,11.0061615 C13.7178409,11.4858009 12.9988456,11.6305055 12.3736497,11.3726466 C11.7484539,11.1147876 11.3405138,10.5052891 11.3405138,9.82900437 C11.3405138,8.91068128 12.0820241,8.16468744 13.0003308,8.15915836 Z M3.00143335,8.15915836 C3.91973998,8.16468744 4.66125032,8.91068128 4.66125032,9.82900437 C4.66125032,10.5052891 4.25331025,11.1147876 3.62811439,11.3726466 C3.00291853,11.6305055 2.28392326,11.4858009 1.80715591,11.0061615 C1.33038856,10.5265221 1.19000483,9.80667066 1.45161402,9.18303476 C1.7132232,8.55939886 2.3251607,8.15513889 3.00143335,8.15915836 Z M6.6810276,8.71912676 C6.63102457,8.73944449 6.59135747,8.7791116 6.57103973,8.82911463 C6.40269639,9.29092148 6.47296783,9.80604315 6.75885488,10.2058852 C7.04474192,10.6057272 7.50944908,10.8388273 8.00088206,10.8288941 C8.75547454,10.8297162 9.38508839,10.2718491 9.48774248,9.53851468 L9.50071668,9.39905178 L9.50071668,9.3490573 C9.48074418,9.25838488 9.39171114,9.20051341 9.30073873,9.21907163 C9.09311699,9.25884333 8.88220487,9.2789302 8.67080819,9.27906501 C8.01214308,9.28122929 7.3679032,9.08621613 6.82101217,8.71912676 C6.77651637,8.69902142 6.7255234,8.69902142 6.6810276,8.71912676 Z M6.86100776,5.42948951 C7.04098791,5.56947407 7.05098681,5.66946304 7.03098901,5.77945092 C7.01099122,5.88943879 7.00099232,5.98942776 6.76101878,6.04942115 C6.55960577,6.12087264 6.36542413,6.21126754 6.18108273,6.31939138 C5.75124998,6.57197549 5.37980256,6.91275294 5.09120291,7.31928112 C4.91542257,7.56502551 4.58041733,7.63463699 4.32128781,7.47926348 C3.84569207,7.19598672 3.29283126,7.07001844 2.74146202,7.11930317 C2.59840014,7.13905117 2.45550073,7.08206776 2.36528325,6.96929591 C2.27506577,6.85652406 2.25084036,6.70460145 2.30151053,6.56936381 C2.73722124,5.60995114 3.64438128,4.94950827 4.69124701,4.82955566 C5.46396069,4.75251536 6.2376296,4.96643303 6.86100776,5.42948951 Z M11.0998385,4.76549191 L11.3105171,4.77956117 C12.3685148,4.90920017 13.2782492,5.59054939 13.7002536,6.56936381 C13.7509238,6.70460145 13.7266984,6.85652406 13.6364809,6.96929591 C13.5462634,7.08206776 13.403364,7.13905117 13.2603021,7.11930317 C12.7058389,7.07128617 12.1501817,7.19709534 11.6704774,7.47926348 C11.4144112,7.633459 11.0827233,7.56362997 10.9105612,7.31928112 C10.6209534,6.91001652 10.2456145,6.5687994 9.8106825,6.31939138 C9.63071712,6.2096254 9.4396826,6.11913536 9.24074534,6.04942115 C9.05076629,5.98942776 9.0007718,5.88943879 9.0007718,5.77945092 C9.0007718,5.66946304 9.0007718,5.56947407 9.14075637,5.37949502 C9.65043984,4.999908 10.2612533,4.78762662 10.8897858,4.76571384 L11.0998385,4.76549191 Z M12.6200447,2.43748141 C12.6019042,1.52204684 11.8499599,0.791961396 10.9343886,0.800826869 C10.0188172,0.809692342 9.28115141,1.55420168 9.2807406,2.46981587 C9.28053845,2.92147834 9.46331113,3.35395842 9.78736004,3.6685873 C10.1114089,3.98321618 10.5490913,4.15315461 11.0005513,4.13963174 C11.9157551,4.11221805 12.6381853,3.35291597 12.6200447,2.43748141 Z M3.38139145,2.46981587 C3.38139145,1.54760203 4.12899348,0.8 5.05120732,0.8 C5.97342116,0.8 6.72102319,1.54760203 6.72102319,2.46981587 C6.72102319,2.91267857 6.54509667,3.33740277 6.23194545,3.65055399 C5.91879423,3.96370522 5.49407003,4.13963174 5.05120732,4.13963174 C4.12899348,4.13963174 3.38139145,3.39202971 3.38139145,2.46981587 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Vereine;