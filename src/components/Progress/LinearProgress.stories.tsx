import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LinearProgress from "./LinearProgress";

const meta: Meta<typeof LinearProgress> = {
  title: "Components/LinearProgress",
  component: LinearProgress,
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <LinearProgress
    // labelId="demo-simple-select-label"
    // id="demo-simple-select"
    // value={age}
    // label="Age"
    // onChange={handleChange}
    />
  ),
};
