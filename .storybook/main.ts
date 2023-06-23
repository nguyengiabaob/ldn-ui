import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "stories": [
    "../src/**/*.stories.tsx"
 ],
 "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-styling", "@storybook/addon-actions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
