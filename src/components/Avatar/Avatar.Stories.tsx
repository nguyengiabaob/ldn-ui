import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Avatar title="fddfdsf"></Avatar>,
};
