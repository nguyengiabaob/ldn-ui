import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Drawer from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Drawer children={<>sadsadsad</>}></Drawer>,
};
