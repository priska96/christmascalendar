import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { gifts as gifts2026 } from "./calendars/calendar2026";
import AdventGiftContent from "./giftModals/AdventGiftContent";
import AudioGiftContent from "./giftModals/AudioGiftContent";
import ChangingThoughtsGiftContent from "./giftModals/ChangingThoughtsGiftContent";
import SmallStepGiftContent from "./giftModals/SmallStepGiftContent";
import CouponGiftContent from "./giftModals/CouponGiftContent";
import EmbedGiftContent from "./giftModals/EmbedGiftContent";
import GameGiftContent from "./giftModals/GameGiftContent";
import GiveYourWorriesGiftContent from "./giftModals/GiveYourWorriesGiftContent";
import ImageGiftContent from "./giftModals/ImageGiftContent";
import PromisesJarGiftContent from "./giftModals/PromisesJarGiftContent";
import QuestionGiftContent from "./giftModals/QuestionGiftContent";
import SpiceGiftContent from "./giftModals/SpiceGiftContent";
import TextGiftContent from "./giftModals/TextGiftContent";
import VideoGiftContent from "./giftModals/VideoGiftContent";
import RepentanceGiftContent from "./giftModals/RepentanceGiftContent";
import { closeDoorModal } from "./redux/doorsSlice";
import { useAppDispatch, useAppSelector } from "./redux/store";
import type { Gift, Gifts } from "./types/gifts";

const calendars: Record<number, Gifts> = {
  2026: gifts2026,
};

function GiftContent({ gift, onClose }: { gift: Gift; onClose: () => void }) {
  switch (gift.type) {
    case "text":
      return <TextGiftContent gift={gift} />;
    case "embed":
      return <EmbedGiftContent gift={gift} />;
    case "game":
      return <GameGiftContent gift={gift} />;
    case "coupon":
      return <CouponGiftContent gift={gift} />;
    case "img":
      return <ImageGiftContent gift={gift} />;
    case "advent":
      return <AdventGiftContent gift={gift} />;
    case "mp3":
      return <AudioGiftContent gift={gift} />;
    case "spice":
      return <SpiceGiftContent gift={gift} />;
    case "mp4":
      return <VideoGiftContent gift={gift} />;
    case "question":
      return <QuestionGiftContent gift={gift} />;
    case "repentance":
      return <RepentanceGiftContent gift={gift} onClose={onClose} />;
    case "promises-jar":
      return <PromisesJarGiftContent />;
    case "give-your-worries":
      return <GiveYourWorriesGiftContent />;
    case "changing-thoughts":
      return <ChangingThoughtsGiftContent />;
    case "small-step-of-change":
      return <SmallStepGiftContent />;
  }
}

export default function DoorModal({ id }: { id: number }) {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.doors.doorModal);
  const year = new Date().getFullYear();
  const gift = (calendars[year] ?? gifts2026)[id];
  const onClose = () => dispatch(closeDoorModal());
  const fitsMedia =
    gift && ["img", "mp4", "coupon", "advent", "spice"].includes(gift.type);
  const isAdvent = gift?.type === "advent";

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: fitsMedia ? "max-content" : "85%",
          height: "max-content",
          maxWidth: fitsMedia ? "calc(100vw - 16px)" : 800,
          maxHeight: "95vh",
          boxSizing: "border-box",
          overflowY: "auto",
          overscrollBehaviorY: "contain",
          bgcolor: isAdvent ? "transparent" : "white",
          //border: isAdvent ? 0 : "2px solid #000",
          boxShadow: isAdvent ? 0 : 24,
          p: fitsMedia ? 1 : 3,
          pb: fitsMedia ? 0.5 : 3,
          color: isAdvent ? "white" : "black",
          "&:focus-visible": { outline: "none" },
          "@media (width < 780px)": {
            "--gift-image-max-height": "85vh",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            boxShadow: "none",
            ...(isAdvent && {
              pointerEvents: "none",
              "& button, & img": { pointerEvents: "auto" },
            }),
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift?.title ?? "Unknown gift type"}
          </Typography>
          <IconButton aria-label="Close" onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          id="modal-modal-description"
          sx={{
            mt: fitsMedia ? 0.5 : 2,
            typography: "body1",
          }}
        >
          {gift && (
            <GiftContent key={`${year}-${id}`} gift={gift} onClose={onClose} />
          )}
        </Box>
      </Box>
    </Modal>
  );
}
