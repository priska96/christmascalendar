import { primaryButtonSx, secondaryButtonSx } from "./interactiveButtonStyles";
import { useState } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GiftStepProgress from "./GiftStepProgress";

const steps = ["Recognize", "Question", "Replace"];
const thoughts = [
  {
    old: "I'm worthless.",
    perspective: "I feel low right now, but this feeling doesn't tell me what I'm worth.",
    verse: "Psalm 139:14 · God made me with care.",
  },
  {
    old: "I'll never change.",
    perspective: "Change takes time, but I can start with one small step today.",
    verse: "2 Corinthians 5:17 · New life in Christ.",
  },
  {
    old: "I always fail.",
    perspective: "I've failed at some things. I can learn from one setback and decide what to try next.",
    verse: "Proverbs 24:16 · Even people who fall can get back up.",
  },
];

export default function ChangingThoughtsGiftContent() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState("");
  const thought = thoughts.find((option) => option.old === selected);

  return (
    <Stack spacing={2.5} sx={{ mx: "auto", maxWidth: 520 }}>
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <GiftStepProgress step={step + 1} total={steps.length} label={steps[step]} color="#527458" />
        <Typography component="h3" variant="h5" aria-live="polite">
          {steps[step]}
        </Typography>
      </Stack>

      {step === 0 && (
        <>
          <Typography id="thought-choice">Choose a thought you recognize.</Typography>
          <RadioGroup aria-labelledby="thought-choice" value={selected} onChange={(_, value) => setSelected(value)}>
            {thoughts.map(({ old }) => (
              <FormControlLabel key={old} value={old} control={<Radio />} label={old} />
            ))}
          </RadioGroup>
        </>
      )}

      {step === 1 && (
        <>
          <Typography sx={{ fontWeight: 700 }}>{thought?.old}</Typography>
          <Typography>Is this thought a fact, or is it a harsh judgment about yourself?</Typography>
          <Typography color="text.secondary">
            Think of one example that supports it and one it leaves out. What would you say to a friend in the same situation?
          </Typography>
        </>
      )}

      {step === 2 && thought && (
        <>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 3, bgcolor: "#f4f8f1" }}>
            <Typography variant="overline" color="text.secondary">Old thought</Typography>
            <Typography>{thought.old}</Typography>
            <Typography variant="overline" color="text.secondary" sx={{ display: "block", mt: 1.5 }}>
              New perspective
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>{thought.perspective}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{thought.verse}</Typography>
          </Paper>
          <Typography color="text.secondary">
            Try a perspective that acknowledges what happened and feels believable to you. You can change these words to fit your situation.
          </Typography>
        </>
      )}

      <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between" }}>
        <Button variant="outlined" sx={secondaryButtonSx} disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
        <Button
          variant="contained"
          sx={primaryButtonSx}
          disabled={!thought}
          onClick={() => {
            if (step === steps.length - 1) {
              setSelected("");
              setStep(0);
            } else {
              setStep(step + 1);
            }
          }}
        >
          {["Continue", "Reveal a new perspective", "Start again"][step]}
        </Button>
      </Stack>
    </Stack>
  );
}
