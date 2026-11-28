import Typography from "@mui/material/Typography";
import type { EmbedGift } from "../types/gifts";

export default function EmbedGiftContent({ gift }: { gift: EmbedGift }) {
  return (
    <>
      {gift.subtitle && <Typography sx={{ mb: 2 }}>{gift.subtitle}</Typography>}
      <div dangerouslySetInnerHTML={{ __html: gift.content }} />
    </>
  );
}
