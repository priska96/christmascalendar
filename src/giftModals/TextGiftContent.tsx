import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import type { TextGift } from "../types/gifts";

export default function TextGiftContent({ gift }: { gift: TextGift }) {
  return <ReactMarkdown remarkPlugins={[remarkBreaks]}>{gift.content}</ReactMarkdown>;
}
