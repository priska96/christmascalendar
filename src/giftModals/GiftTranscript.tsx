import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useId, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function GiftTranscript({ transcript }: { transcript?: string }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const transcriptId = useId();

  if (!transcript?.trim()) return null;

  return (
    <>
      <Button
        aria-controls={transcriptId}
        aria-expanded={showTranscript}
        onClick={() => setShowTranscript((visible) => !visible)}
      >
        {showTranscript ? "Hide transcript" : "Show transcript"}
      </Button>
      <Box
        id={transcriptId}
        hidden={!showTranscript}
        sx={{ mb: 1, maxWidth: "60ch", overflowWrap: "anywhere" }}
      >
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{transcript}</ReactMarkdown>
      </Box>
    </>
  );
}
