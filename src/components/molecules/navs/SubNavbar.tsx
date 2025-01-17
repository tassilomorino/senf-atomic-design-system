/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import TertiaryButton from "../../atoms/buttons/TertiaryButton";
import FlexWrapper from "../../atoms/layout/FlexWrapper";
import Typography from "../../atoms/typography/Typography";
import { SubNavbarProps } from "./SubNavbar.types";

const Wrapper = styled.div<SubNavbarProps>`
  width: 100%;
  height: 50px;
  position: relative;
`;

const LeftWrapper = styled.div<SubNavbarProps>`
  position: absolute;
  left: 12px;
  display: flex;
  height: 100%;
  align-items: center;
`;
const CenterWrapper = styled.div<SubNavbarProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  height: 100%;
  align-items: center;
`;
const RightWrapper = styled.div<SubNavbarProps>`
  position: absolute;
  right: 12px;
  display: flex;
  height: 100%;
  align-items: center;
`;
const SubNavbar: FC<SubNavbarProps> = ({
  iconLeft,
  iconLeftTransform,
  textLeft,
  header,
  textRight,
  iconRight,
  iconRightTransform,
}) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <TertiaryButton
          iconLeft={iconLeft}
          iconLeftTransform={iconLeftTransform}
          text={textLeft}
        />
      </LeftWrapper>

      <CenterWrapper>
        <Typography variant="h3">{header}</Typography>
      </CenterWrapper>

      <RightWrapper>
        {textRight || iconRight ? (
          <TertiaryButton
            iconRight={iconRight}
            iconRightTransform={iconRightTransform}
            text={textRight}
          />
        ) : (
          <div />
        )}
      </RightWrapper>
    </Wrapper>
  );
};

export default SubNavbar;
