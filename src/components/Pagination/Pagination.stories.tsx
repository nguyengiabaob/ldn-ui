import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Pagination></Pagination>,
};
