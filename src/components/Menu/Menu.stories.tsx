import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./Menu";
import MenuItem from "../MenuItem";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      open={true}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
    // labelId="demo-simple-select-label"
    // id="demo-simple-select"
    // value={age}
    // label="Age"
    // onChange={handleChange}
  ),
};
