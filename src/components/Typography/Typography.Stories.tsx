import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Typography title="Delete">
      <p>dasdsa</p>
    </Typography>
  ),
};
