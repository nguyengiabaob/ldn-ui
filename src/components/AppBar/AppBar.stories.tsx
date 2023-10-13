import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import AppBar from "./AppBar";

const meta: Meta<typeof AppBar> = {
  title: "Components/AppBar",
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <AppBar children={<>sadsadsad</>}></AppBar>,
};
