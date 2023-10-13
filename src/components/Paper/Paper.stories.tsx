import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Paper from "./Paper";

const meta: Meta<typeof Paper> = {
  title: "Components/Paper",
  component: Paper,
};

export default meta;
type Story = StoryObj<typeof Paper>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Paper children={<>sadsadsad</>}></Paper>,
};
