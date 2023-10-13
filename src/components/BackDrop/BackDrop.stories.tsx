import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Backdrop from "./BackDrop";
import Button from "../Button";
import CircularProgress from "../Progress/CircularProgress";

const meta: Meta<typeof Backdrop> = {
  title: "Components/Backdrop",
  component: Backdrop,
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  ),
};
