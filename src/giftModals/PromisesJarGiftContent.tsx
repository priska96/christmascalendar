import { interactiveGreenDark, primaryButtonSx } from "./interactiveButtonStyles";
import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const promises = [
  {
    reference: "Isaiah 41:10",
    verse: "Have no fear, for I am with you; do not be looking about in trouble, for I am your God; I will give you strength, yes, I will be your helper; yes, my true right hand will be your support.",
    message: "You don't have to face everything alone.",
  },
  {
    reference: "Psalm 34:18",
    verse: "The Lord is near the broken-hearted; he is the saviour of those whose spirits are crushed down.",
    message: "God is close to the brokenhearted.",
  },
  {
    reference: "Matthew 11:28",
    verse: "Come to me, all you who are troubled and weighted down with care, and I will give you rest.",
    message: "Jesus invites the tired and overwhelmed to find rest.",
  },
  {
    reference: "Romans 5:8",
    verse: "But God has made clear his love to us, in that, when we were still sinners, Christ gave his life for us.",
    message: "God's love isn't something you have to earn.",
  },
  {
    reference: "1 Peter 5:7",
    verse: "Putting all your troubles on him, for he takes care of you.",
    message: "You can bring your worries to God.",
  },
  {
    reference: "Lamentations 3:22–23",
    verse: "It is through the Lord's love that we have not come to destruction, because his mercies have no limit. They are new every morning; great is your good faith.",
    message: "Every morning is a new opportunity to begin again.",
  },
];

const slips = [
  { left: 10, bottom: 15, angle: -13, color: "#f8db9f" },
  { left: 52, bottom: 13, angle: 12, color: "#f4c6b8" },
  { left: 97, bottom: 17, angle: -9, color: "#e8d4f2" },
  { left: 22, bottom: 44, angle: 18, color: "#f7e7b8" },
  { left: 78, bottom: 43, angle: -19, color: "#cce4c9" },
  { left: 50, bottom: 67, angle: 8, color: "#f5d1c8" },
];

export default function PromisesJarGiftContent() {
  const [drawn, setDrawn] = useState(0);
  const promise = promises[drawn - 1];
  const remaining = promises.length - drawn;

  return (
    <Stack spacing={2} sx={{ mx: "auto", maxWidth: 520, textAlign: "center", color: "#273d32" }}>
      <ButtonBase
        onClick={() => setDrawn((count) => (count === promises.length ? 0 : count + 1))}
        sx={{
          alignSelf: "center",
          flexDirection: "column",
          gap: 1,
          p: 1,
          borderRadius: 2,
          "&:focus-visible": { outline: "2px solid", outlineOffset: 2 },
          "&:hover .promise-jar": { borderColor: interactiveGreenDark },
          "&:hover .promise-jar-action": { bgcolor: interactiveGreenDark },
        }}
      >
        <Box component="span" aria-hidden="true" sx={{ display: "block" }}>
          <Box
            component="span"
            sx={{
              display: "block",
              width: 116,
              height: 17,
              mx: "auto",
              bgcolor: "#416751",
              backgroundImage: "repeating-linear-gradient(90deg, transparent 0 5px, #ffffff25 5px 7px)",
              borderRadius: "7px 7px 3px 3px",
            }}
          />
          <Box
            component="span"
            className="promise-jar"
            sx={{
              display: "block",
              position: "relative",
              width: 164,
              height: 124,
              boxSizing: "border-box",
              border: "2px solid #789d89",
              borderRadius: "29px 29px 22px 22px",
              background: "linear-gradient(105deg, #d6efe6, #f4faf5 42%, #c7e4d8)",
              boxShadow: "inset 5px 0 0 #ffffff80, inset -5px -5px 0 #789d892a",
            }}
          >
            {slips.slice(0, remaining).map(({ left, bottom, angle, color }) => (
              <Box
                component="span"
                key={left}
                sx={{
                  position: "absolute",
                  left,
                  bottom,
                  width: 49,
                  height: 28,
                  border: "1px solid #8c684c55",
                  borderRadius: "3px 3px 7px 3px",
                  bgcolor: color,
                  backgroundImage: "linear-gradient(155deg, #fff5 49%, #57392335 50%, transparent 54%)",
                  boxShadow: "0 2px 3px #31453730",
                  transform: `rotate(${angle}deg)`,
                }}
              />
            ))}
          </Box>
        </Box>
        <Typography component="span" className="promise-jar-action" sx={{ ...primaryButtonSx, color: "#fff" }}>
          {remaining > 0 ? "Draw a promise" : "Refill the jar"}
        </Typography>
      </ButtonBase>
      <Box aria-live="polite" aria-atomic="true">
        {promise ? (
          <Paper
            elevation={0}
            sx={{ p: 2.5, bgcolor: "#fff6e4", border: "1px solid #ead9b7", borderRadius: 2, color: "inherit" }}
          >
            <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700 }}>
              {promise.reference}
            </Typography>
            <Typography component="blockquote" sx={{ mx: 0, my: 1, fontStyle: "italic" }}>
              {promise.verse}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Bible in Basic English
            </Typography>
            <Typography sx={{ mt: 1.5, fontWeight: 600 }}>{promise.message}</Typography>
          </Paper>
        ) : (
          <Typography color="text.secondary">Open a folded paper from the jar.</Typography>
        )}
      </Box>
      <Typography color="text.secondary">
        You don't have to believe all of this immediately. Maybe just keep one promise in your heart today.
      </Typography>
    </Stack>
  );
}
