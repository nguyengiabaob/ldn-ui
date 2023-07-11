import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <CheckBox
      value={true}
   />
  ),
};
