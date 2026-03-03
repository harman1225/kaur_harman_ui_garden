import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200",
    title: "Welcome to UI Garden",
  },
};