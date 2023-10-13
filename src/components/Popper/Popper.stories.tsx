import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Popper from "./Popper";

const meta: Meta<typeof Popper> = {
  title: "Components/Popper",
  component: Popper,
};

export default meta;
type Story = StoryObj<typeof Popper>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Popper open={true}></Popper>,
};
