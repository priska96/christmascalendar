import type { CouponGift } from "../types/gifts";
import GiftImage from "./GiftImage";

export default function CouponGiftContent({ gift }: { gift: CouponGift }) {
  return <GiftImage src={gift.content} alt={gift.title} />;
}
