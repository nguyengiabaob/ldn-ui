import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./ToolTip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/ToolTip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Tooltip title="Delete">
      <p>dasdsa</p>
    </Tooltip>
  ),
};
