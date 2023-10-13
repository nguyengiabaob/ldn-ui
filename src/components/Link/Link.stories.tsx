import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Link children={<>sadsadsad</>}></Link>,
};
