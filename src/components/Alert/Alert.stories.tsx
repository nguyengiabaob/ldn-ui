import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Alert title="fddfdsf"></Alert>,
};
