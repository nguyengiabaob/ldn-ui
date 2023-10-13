import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Divider />,
};
