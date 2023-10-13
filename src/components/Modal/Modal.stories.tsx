import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Modal";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Modal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Modal open={true} />,
};
