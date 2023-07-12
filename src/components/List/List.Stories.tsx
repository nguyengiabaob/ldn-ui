import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import List from "./List";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <List />,
};
