/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { icons } from "../../../assets/icons/icons";
import { IconProps } from "./Icon.types";

const Svg = styled.svg`
  display: inline-block;
  shape-rendering: inherit;
  transform: ${(props) => props.transform};
  vertical-align: middle;
  path {
    fill: ${(props) => (props.color ? props.color : "currentColor")};
  }
`;

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */

const Icon: FC<IconProps> = ({
  icon = 0,
  size,
  transform,
  color,
  ...props
}) => {
  return (
    <Svg
      viewBox={size === "big" ? "0 0 24 24" : "0 0 16 16"}
      width={size === "big" ? "24px" : "20px"}
      height={size === "big" ? "24px" : "20px"}
      color={color}
      transform={transform}
      {...props}
    >
      <path d={icons[icon]} />
    </Svg>
  );
};

export default Icon;
