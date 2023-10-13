import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Breadcrumbs children={<>sadsadsad</>}></Breadcrumbs>,
};
