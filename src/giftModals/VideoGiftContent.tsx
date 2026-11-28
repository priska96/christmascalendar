import { Video } from "@imagekit/react";
import { IMAGE_KIT_ENDPOINT } from "../constants";
import type { Mp4Gift } from "../types/gifts";
import GiftTranscript from "./GiftTranscript";

export default function VideoGiftContent({ gift }: { gift: Mp4Gift }) {
  const style = {
    display: "block",
    width: "auto",
    height: "auto",
    maxWidth: "calc(100vw - 36px)",
    maxHeight: "75vh",
    margin: "auto",
  };

  return (
    <>
      <GiftTranscript transcript={gift.transcript} />
      {gift.content.startsWith(`${IMAGE_KIT_ENDPOINT}/`) ? (
        <Video
          urlEndpoint={IMAGE_KIT_ENDPOINT}
          src={gift.content.slice(IMAGE_KIT_ENDPOINT.length)}
          controls
          preload="metadata"
          style={style}
        />
      ) : (
        <video src={gift.content} controls preload="metadata" style={style} />
      )}
    </>
  );
}
