/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../icons/Icon";
import Typography from "../typography/Typography";
import { TertiaryButtonProps } from "./TertiaryButton.types";

const StyledButton = styled.button<TertiaryButtonProps>`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: auto; /* 150px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //ADD THEME-RADII
  border-radius: ${({ theme }) => theme.radii[0]}px;

  //ADD THEME-SPACE?
  height: 30px;

  //FOR SMALLICONBUTTON  – is this really  correct?
  width: ${(props) => (props.fillWidth === "max" ? "100%" : "auto")};
  pointer-events: all;

  //ADD THEME-SPACE?
  padding: 4px 6px 4px 6px;
  border: 0;
  background-color: transparent;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  }
`;

const IconWrapperLeft = styled.div<TertiaryButtonProps>`
  padding-right: ${(props) => (props.text === undefined ? "0px" : "5px")};
`;

const IconWrapperRight = styled.div<TertiaryButtonProps>`
  padding-left: ${(props) => (props.text === undefined ? "0px" : "5px")};
`;

const TertiaryButton: FC<TertiaryButtonProps> = ({
  text,
  children,
  iconLeft,
  iconLeftTransform,
  iconRight,
  iconRightTransform,
  size,
  fillWidth,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      text={text}
      fillWidth={fillWidth}
      loading={loading}
      onClick={onClick}
      size={size}
      {...rest}
    >
      {iconLeft && (
        <IconWrapperLeft text={text}>
          <Icon
            icon={iconLeft}
            transform={
              size === "small"
                ? `scale(0.7) ${iconLeftTransform}`
                : `scale(1) ${iconLeftTransform}`
            }
          />
        </IconWrapperLeft>
      )}
      {text && <Typography variant={"buttonBg"}> {text}</Typography>}

      {iconRight && (
        <IconWrapperRight text={text} iconLeft={iconLeft}>
          <Icon
            icon={iconRight}
            transform={
              size === "small"
                ? `scale(0.7) ${iconRightTransform}`
                : `scale(1) ${iconRightTransform}`
            }
          />
        </IconWrapperRight>
      )}
    </StyledButton>
  );
};

export default TertiaryButton;
