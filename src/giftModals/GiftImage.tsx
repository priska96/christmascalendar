import { Image } from "@imagekit/react";
import type { MouseEventHandler } from "react";
import { IMAGE_KIT_ENDPOINT } from "../constants";

type Props = {
  src: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
};

export default function GiftImage({ src, alt, onClick }: Props) {
  const style = {
    display: "block",
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "var(--gift-image-max-height, 80vh)",
    objectFit: "contain" as const,
    margin: "auto",
  };

  if (src.startsWith(`${IMAGE_KIT_ENDPOINT}/`)) {
    return (
      <Image
        urlEndpoint={IMAGE_KIT_ENDPOINT}
        src={src.slice(IMAGE_KIT_ENDPOINT.length)}
        alt={alt}
        onClick={onClick}
        style={style}
      />
    );
  }

  return <img src={src} alt={alt} onClick={onClick} style={style} />;
}
