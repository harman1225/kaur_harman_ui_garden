import React from "react";
import { ImgProps } from "./Img.types";

export const Img = ({ src, alt }: ImgProps) => {
  return <img src={src} alt={alt} width="200" />;
};