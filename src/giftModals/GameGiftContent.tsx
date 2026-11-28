import Typography from "@mui/material/Typography";
import type { GameGift } from "../types/gifts";

export default function GameGiftContent({ gift }: { gift: GameGift }) {
  return (
    <Typography>
      {gift.content}
      <br />
      <a href={gift.link} target="_blank" rel="noreferrer">
        {gift.linkName}
      </a>
    </Typography>
  );
}
