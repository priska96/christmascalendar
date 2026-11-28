import { interactiveGreen, primaryButtonSx, secondaryButtonSx } from "./interactiveButtonStyles";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { RepentanceGift } from "../types/gifts";
import GiftStepProgress from "./GiftStepProgress";

interface RepentanceGiftContentProps {
  gift: RepentanceGift;
  onClose: () => void;
}

const steps = [
  {
    title: "Look Into Your Heart",
    subtitle: "Reflect",
    emoji: "🤍",
  },
  {
    title: "Bring It to God",
    subtitle: "Pray",
    emoji: "🙏",
  },
  {
    title: "Take a Small Step",
    subtitle: "Grow",
    emoji: "🌱",
  },
];

const colors = {
  primary: interactiveGreen,
  paper: "#F2F5ED",
  text: "#354E3C",
  secondary: "#657568",
};

export default function RepentanceGiftContent({
  onClose,
}: RepentanceGiftContentProps) {
  const [step, setStep] = useState(0);
  const [reflection, setReflection] = useState("");
  const [prayed, setPrayed] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep((previous) => previous + 1);
    } else {
      setCompleted(true);
      setReflection("");
    }
  };

  const handleBack = () => {
    setStep((previous) => Math.max(previous - 1, 0));
  };

  const handleClose = () => {
    setStep(0);
    setReflection("");
    setPrayed(false);
    setCompleted(false);
    onClose();
  };

  const currentStep = steps[step];

  return (
    <Box>
      {completed ? (
        <Stack spacing={3} sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography sx={{ fontSize: 58 }}>🌿</Typography>

          <Typography color={colors.secondary} sx={{ lineHeight: 1.8 }}>
            Every step toward God matters, even the smallest one. So my dear
            Jihoon, you don't have to be perfect to walk with Him. Come as you
            are and let the Holy Spirit change you from within.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              bgcolor: colors.paper,
              borderRadius: 3,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography sx={{ fontStyle: "italic" }} color={colors.text}>
              "Therefore, there is now no condemnation for those who are in
              Christ Jesus."
            </Typography>

            <Typography
              variant="caption"
              sx={{ display: "block", mt: 1 }}
              color={colors.secondary}
            >
              Romans 8:1
            </Typography>
          </Paper>

          <Button
            variant="contained"
            fullWidth
            onClick={handleClose}
            sx={primaryButtonSx}
          >
            Amen ❤️
          </Button>
        </Stack>
      ) : (
        <Stack spacing={3}>
          {/* Header */}
          <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
            <GiftStepProgress
              step={step + 1}
              total={steps.length}
              label={currentStep.subtitle}
              color={colors.primary}
            />

            <Typography sx={{ fontSize: 32 }}>{currentStep.emoji}</Typography>

            <Typography
              id="repentance-title"
              variant="h5"
              sx={{ fontWeight: 700 }}
              color={colors.text}
            >
              {currentStep.title}
            </Typography>
          </Stack>

          {/* Step content */}
          <Box>
            {step === 0 && (
              <Stack spacing={2.5}>
                <Typography
                  color={colors.secondary}
                  sx={{ textAlign: "center", lineHeight: 1.8 }}
                >
                  Repentance starts with being honest with God. Is there
                  something in your life you want to change or ask Him to help
                  you with?
                </Typography>

                <TextField
                  multiline
                  minRows={3}
                  maxRows={6}
                  fullWidth
                  value={reflection}
                  onChange={(event) => setReflection(event.target.value)}
                  placeholder="Something I want to bring to God..."
                  aria-label="Private reflection"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#F8FAF6",
                      borderRadius: 2,
                      "&.Mui-focused fieldset": {
                        borderColor: colors.primary,
                      },
                    },
                  }}
                />

                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  This is just between you and God. You can also leave it empty
                  and reflect quietly. Don't worry, nothing is submitted or
                  saved my dear. This is simply for you.
                </Typography>
              </Stack>
            )}

            {step === 1 && (
              <Stack spacing={2.5}>
                <Typography
                  color={colors.secondary}
                  sx={{ textAlign: "center", lineHeight: 1.8 }}
                >
                  You don't need perfect words. God already knows your heart.
                  Take a moment to pray.
                </Typography>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    bgcolor: colors.paper,
                    borderRadius: 3,
                  }}
                >
                  <Stack spacing={2}>
                    <Typography color={colors.text}>Dear God,</Typography>

                    <Typography color={colors.text} sx={{ lineHeight: 1.8 }}>
                      I know I don't always make the right choices. Please
                      forgive me for the things I've done wrong.
                    </Typography>

                    <Typography color={colors.text} sx={{ lineHeight: 1.8 }}>
                      Help me turn away from sin and walk closer to You. Give me
                      strength to change, even when it's difficult.
                    </Typography>

                    <Typography color={colors.text} sx={{ lineHeight: 1.8 }}>
                      Thank You for loving me and giving me a new beginning.
                    </Typography>

                    <Typography color={colors.text}>Amen. ❤️</Typography>
                  </Stack>
                </Paper>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={prayed}
                      onChange={(event) => setPrayed(event.target.checked)}
                      sx={{
                        color: colors.primary,
                        "&.Mui-checked": {
                          color: colors.primary,
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" color={colors.secondary}>
                      I've taken a moment to pray or reflect.
                    </Typography>
                  }
                />
              </Stack>
            )}

            {step === 2 && (
              <Stack spacing={2.5}>
                <Typography
                  color={colors.secondary}
                  sx={{ textAlign: "center", lineHeight: 1.8 }}
                >
                  Repentance isn't just about saying sorry. It's about choosing
                  a new direction.
                </Typography>

                <Typography
                  sx={{ fontWeight: 600, textAlign: "center" }}
                  color={colors.text}
                >
                  What's one small thing you can do differently today?
                </Typography>

                <Stack spacing={1}>
                  {[
                    "💛 Forgive someone",
                    "🤝 Apologize sincerely",
                    "🌿 Let go of a harmful habit",
                    "🙏 Spend time with God",
                  ].map((suggestion) => (
                    <Paper
                      key={suggestion}
                      variant="outlined"
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        bgcolor: "#F8FAF6",
                        borderColor: "#E2E9DD",
                      }}
                    >
                      <Typography variant="body2" color={colors.text}>
                        {suggestion}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>

                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    bgcolor: colors.paper,
                    borderLeft: `3px solid ${colors.primary}`,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{ fontStyle: "italic" }}
                    color={colors.text}
                    variant="body2"
                  >
                    "God's kindness is intended to lead you to repentance."
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 1 }}
                    color={colors.secondary}
                  >
                    Romans 2:4
                  </Typography>
                </Paper>
              </Stack>
            )}
          </Box>

          {/* Navigation */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between" }}
          >
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              disabled={step === 0}
              sx={secondaryButtonSx}
            >
              Back
            </Button>

            <Button
              variant="contained"
              endIcon={step < 2 ? <ArrowForwardIcon /> : undefined}
              onClick={handleNext}
              sx={primaryButtonSx}
            >
              {step === 2 ? "Finish ❤️" : "Continue"}
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

