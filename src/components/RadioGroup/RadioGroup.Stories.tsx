import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { FormControlLabel, Radio } from "@mui/material";
import RadioGroup from "./RadioGroup";
const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
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
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  ),
};
