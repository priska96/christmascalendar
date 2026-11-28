import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { ImgGift } from "../types/gifts";
import GiftImage from "./GiftImage";

export default function ImageGiftContent({ gift }: { gift: ImgGift }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { content, title } = gift;

  if (typeof content === "string") {
    return <GiftImage src={content} alt={title} />;
  }

  if (content.length === 0) {
    return <Typography>No images available.</Typography>;
  }

  if (content.length === 1) {
    return <GiftImage src={content[0]} alt={title} />;
  }

  const index = Math.min(selectedIndex, content.length - 1);

  return (
    <Box sx={{ maxWidth: "calc(100vw - 32px)" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
        <IconButton
          aria-label="Previous image"
          onClick={() => setSelectedIndex((index + content.length - 1) % content.length)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Typography aria-live="polite">
          {index + 1} / {content.length}
        </Typography>
        <IconButton
          aria-label="Next image"
          onClick={() => setSelectedIndex((index + 1) % content.length)}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <GiftImage src={content[index]} alt={`${title} (${index + 1} of ${content.length})`} />
    </Box>
  );
}
