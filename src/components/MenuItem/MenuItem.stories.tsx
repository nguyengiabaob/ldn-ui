import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./MenuItem";

const meta: Meta<typeof MenuItem> = {
  title: "Components/MenuItem",
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <MenuItem />,
};
