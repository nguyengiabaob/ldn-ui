import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CircularProgress from "./CircularProgress";

const meta: Meta<typeof CircularProgress> = {
  title: "Components/CircularProgress",
  component: CircularProgress,
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <CircularProgress
    // labelId="demo-simple-select-label"
    // id="demo-simple-select"
    // value={age}
    // label="Age"
    // onChange={handleChange}
    />
  ),
};
