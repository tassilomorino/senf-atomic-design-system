/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";
import TertiaryButton from "./TertiaryButton";
import { TertiaryButtonProps } from "./TertiaryButton.types";

export default {
  title: "Atom/TertiaryButton",
  component: TertiaryButton,
  argTypes: {},
} as Meta<typeof TertiaryButton>;

const Template: Story<TertiaryButtonProps> = (args) => (
  <TertiaryButton {...args} />
);

export const IconPure = Template.bind({});
IconPure.args = {
  iconLeft: "arrowdown",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  iconLeft: "arrowdown",
  text: "Teriary Button",
};

export const IconRight = Template.bind({});
IconRight.args = {
  iconRight: "arrowdown",
  text: "Teriary Button",
};

export const TextPure = Template.bind({});
TextPure.args = {
  text: "Teriary Button",
};
