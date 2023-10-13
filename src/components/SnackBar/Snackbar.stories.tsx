import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Snackbar from "./Snackbar";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Snackbar title="fddfdsf"></Snackbar>,
};
