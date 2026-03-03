import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    alt: "Placeholder image",
  },
};