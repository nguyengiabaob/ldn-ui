import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Dialog open={true} />,
};
