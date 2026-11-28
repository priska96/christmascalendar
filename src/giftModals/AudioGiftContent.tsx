import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Mp3Gift } from "../types/gifts";
import GiftImage from "./GiftImage";
import GiftTranscript from "./GiftTranscript";

export default function AudioGiftContent({ gift }: { gift: Mp3Gift }) {
  return (
    <>
      <GiftTranscript transcript={gift.transcript} />
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
        <Box>
          <Typography variant="subtitle1" color="text.secondary">
            {gift.subtitle}
          </Typography>
          <audio id={"audio-" + gift.id} controls>
            <source src={gift.content} type="audio/mp4" />
          </audio>
        </Box>
        <Box sx={{ flex: "1 1 250px", minWidth: 0 }}>
          <GiftImage src={gift.img} alt={gift.title} />
        </Box>
      </Box>
    </>
  );
}
