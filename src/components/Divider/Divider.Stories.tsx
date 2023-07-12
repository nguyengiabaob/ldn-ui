import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ToggleButtonGroup from "./Divider";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "Components/ToggleButton",
  component: ToggleButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <ToggleButtonGroup></ToggleButtonGroup>,
};
