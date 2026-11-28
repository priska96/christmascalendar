import type { MouseEvent, TouchEvent } from "react";
import Backdrop from "@mui/material/Backdrop";
import { closeDoorModal } from "../redux/doorsSlice";
import { useAppDispatch } from "../redux/store";
import type { SpiceGift } from "../types/gifts";
import GiftImage from "./GiftImage";

export default function SpiceGiftContent({ gift }: { gift: SpiceGift }) {
  const dispatch = useAppDispatch();
  const update = (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    const point = "touches" in event ? event.touches[0] : event;
    if (point) {
      document.getElementById("darkFun")?.style.setProperty("--cursorX", `${point.clientX}px`);
      document.getElementById("darkFun")?.style.setProperty("--cursorY", `${point.clientY}px`);
    }
  };

  return (
    <>
      <GiftImage src={gift.content} alt={gift.title} />
      <Backdrop
        id="darkFun"
        open
        onMouseMove={update}
        onTouchMove={update}
        onClick={() => dispatch(closeDoorModal())}
      />
    </>
  );
}
