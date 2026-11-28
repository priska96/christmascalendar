import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import { closeDoorModal, lightCandle } from "../redux/doorsSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import type { AdventGift } from "../types/gifts";
import GiftImage from "./GiftImage";

export default function AdventGiftContent({ gift }: { gift: AdventGift }) {
  const dispatch = useAppDispatch();
  const lit = useAppSelector((state) => state.doors.candles.includes(gift.candle));

  return (
    <>
      <Typography>{gift.content}</Typography>
      <GiftImage
        src={lit ? gift.after : gift.before}
        alt={gift.title}
        onClick={lit ? undefined : () => dispatch(lightCandle(gift.candle))}
      />
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: -1,
          bgcolor: lit ? gift.backdropAfter : gift.backdropBefore,
        }}
        open
        onClick={() => dispatch(lit ? closeDoorModal() : lightCandle(gift.candle))}
      />
    </>
  );
}
