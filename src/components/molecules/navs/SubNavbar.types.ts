/** @format */

import { MouseEventHandler } from "react";
export interface SubNavbarProps {
  iconLeft?: string;
  iconLeftTransform?: string;
  textLeft?: string;
  header?: string;
  iconRight?: string;
  iconRightTransform?: string;
  textRight?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
