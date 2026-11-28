import { primaryButtonSx, secondaryButtonSx } from "./interactiveButtonStyles";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import GiftStepProgress from "./GiftStepProgress";

const screens = [
  { title: "Change starts with one step", icon: "🌱" },
  { title: "A different perspective", icon: "💭" },
  { title: "Your small step", icon: "🌿" },
  { title: "Ask God for help", icon: "🙏" },
];

const paths = {
  kindness: {
    label: "Seeing Myself Through God's Eyes",
    thought:
      "I keep thinking I'm a terrible person. I only see my failures and start believing I will never change.",
    perspective:
      "A painful thought can feel convincing. But is it the truth, or just a story my mind is telling me?",
    action:
      "The next time you think “I'm a terrible person“ pause and remember Romans 5:8. Instead of condemning yourself, remind yourself that you are loved and can grow from your mistakes.”...And maybe my dear change your passwords and user infos that have negative meaning to something positive.",
    prayer:
      "Dear God, help me see myself with kindness. Teach me to take responsibility for my mistakes without believing that I am worthless. Amen.",
    reference:
      "Romans 5:8 “But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.“",
  },
  anger: {
    label: "Responding calmly when I'm angry",
    thought: "Sometimes my anger controls my reactions.",
    perspective:
      "The Bible doesn't say that feeling angry is always wrong. Even Jesus experienced anger.",
    action:
      "The next time you feel anger rising, remember James 1:19. Stop speaking for a moment, take a few breaths, and ask God for patience before responding. ",
    prayer:
      "Dear God, help me notice when I am getting angry. Give me patience to pause and choose words that are honest and kind. Amen.",
    reference:
      "James 1:19 “My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry,”",
  },
  forgiveness: {
    label: "Learning to Accept God's Forgiveness",
    thought: "What I did will always define me.",
    perspective:
      "You can take responsibility for a mistake and still give yourself room to change.",
    action:
      "Think about one mistake you keep holding against yourself. Instead of replaying it over and over, bring it to God in prayer. If you need to apologize or make something right, take that step too.",
    prayer:
      "Dear God, I know I've made mistakes, and sometimes I find it difficult to forgive myself. Please forgive me and help me truly accept Your forgiveness. Amen.",
    reference:
      "1 John 1:9 “If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.”",
  },
  courage: {
    label: "Finding Courage to Start Something New",
    thought: "I feel afraid to take the first step.",
    perspective:
      "Sometimes we become so afraid of what could go wrong that we never give ourselves the chance to discover what could go right.",
    action:
      "Identify one small action you can take today towards your goal, no matter how minor it seems.",
    prayer:
      "Dear God, Sometimes I'm afraid to try new things because I worry about failing or making mistakes. Please give me courage to step outside my comfort zone and wisdom to make good decisions. Help me trust You even when I don't know what the future holds. Amen.",
    reference:
      "Joshua 1:9 “Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.”",
  },
};

const pathOptions = Object.keys(paths) as (keyof typeof paths)[];

export default function SmallStepGiftContent() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<keyof typeof paths | null>(null);
  const [willTry, setWillTry] = useState(false);
  const path = choice ? paths[choice] : null;
  const screen = screens[step];
  const isLast = step === screens.length - 1;

  function advance() {
    if (isLast) {
      setStep(0);
      setChoice(null);
      setWillTry(false);
      return;
    }
    setStep(step + 1);
  }

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4 }}>
      <Stack spacing={2.5}>
        <GiftStepProgress
          step={step + 1}
          total={screens.length}
          label={screen.title}
          color="#527458"
        />

        <Stack spacing={1} sx={{ textAlign: "center" }}>
          <Typography aria-hidden="true" sx={{ fontSize: 36 }}>
            {screen.icon}
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            aria-live="polite"
            sx={{ fontWeight: 700 }}
          >
            {screen.title}
          </Typography>
        </Stack>

        {step === 0 && (
          <>
            <Typography
              id="small-step-choice"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              You don't need to become a completely different person overnight.
              Choose one thing you'd like to work on today. Your choice stays in
              this activity.
            </Typography>
            <RadioGroup
              aria-labelledby="small-step-choice"
              value={choice ?? ""}
            >
              {pathOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={paths[option].label}
                  onChange={() => {
                    setChoice(option);
                    setWillTry(false);
                  }}
                />
              ))}
            </RadioGroup>
          </>
        )}

        {step === 1 && path && (
          <Stack spacing={2} sx={{ textAlign: "center" }}>
            <Typography color="text.secondary">
              Maybe this sounds familiar.
            </Typography>
            <Typography
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "action.hover",
                fontStyle: "italic",
              }}
            >
              “{path.thought}”
            </Typography>
            <Typography>{path.perspective}</Typography>
          </Stack>
        )}

        {step === 2 && path && (
          <>
            <Typography sx={{ p: 2, borderRadius: 2, bgcolor: "action.hover" }}>
              {path.action}
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={willTry}
                  onChange={(_, checked) => setWillTry(checked)}
                />
              }
              label="I'll try one small step."
            />
          </>
        )}

        {isLast && path && (
          <Stack spacing={2} sx={{ textAlign: "center" }}>
            <Typography>{path.prayer}</Typography>
            <Typography sx={{ fontWeight: 600 }} color="text.secondary">
              {path.reference}
            </Typography>
          </Stack>
        )}

        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            sx={secondaryButtonSx}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disabled={!path}
            endIcon={isLast ? undefined : <ArrowForwardIcon />}
            onClick={advance}
            sx={primaryButtonSx}
          >
            {isLast ? "Start again" : "Continue"}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
