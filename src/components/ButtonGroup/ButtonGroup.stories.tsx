import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
    </ButtonGroup>
  ),
};
