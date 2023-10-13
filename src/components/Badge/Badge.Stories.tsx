import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const second: Story = {
  render: () => (
    <Badge badgeContent={4} color="primary">
      <p>sadsadasd</p>
    </Badge>
  ),
};
