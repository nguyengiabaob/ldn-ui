import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "./RadioGroup";
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Select",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <RadioGroup
    // labelId="demo-simple-select-label"
    // id="demo-simple-select"
    // value={age}
    // label="Age"
    // onChange={handleChange}
    ></RadioGroup>
  ),
};
