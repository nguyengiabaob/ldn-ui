import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <ToggleButton value="left" aria-label="left aligned">
      <p>dasd</p>
    </ToggleButton>
  ),
};
