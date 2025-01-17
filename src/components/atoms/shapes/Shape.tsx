/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { ShapeProps } from "./Shape.types";

const StyledWrapper = styled.div<ShapeProps>`
  position: absolute;
  width: 100%;
  margin-top: 288px;
  z-index: 0;
  display: flex;
  flex-direction: column;
`;

//NOT WORKING
const RemainingSpaceFill = styled.div`
  flex-grow: 1;
  background-color: green;
  width: 100%;
  position: relative;
  z-index: 99999;
`;

const Shapes = [
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 390 464"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 390 464.613 L 0 464.613 L 0 71.912 C 0 71.912 36.092 36.859 111.8 46.425 C 187.508 55.991 219.827 62.556 257.92 53.187 C 296.013 43.818 304.708 17.337 331.24 5.334 C 357.772 -6.668 390 5.334 390 5.334 Z"
      fill="rgb(254, 217, 87)"
    ></path>
  </svg>,
];

const Shape: FC<ShapeProps> = ({ variant }) => {
  return (
    <StyledWrapper>
      {Shapes[0]} <RemainingSpaceFill />
    </StyledWrapper>
  );
};

export default Shape;
