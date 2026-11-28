import { primaryButtonSx, secondaryButtonSx } from "./interactiveButtonStyles";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function GiveYourWorriesGiftContent() {
  const [reflection, setReflection] = useState("");
  const [released, setReleased] = useState(false);

  const advance = () => {
    setReflection("");
    setReleased(!released);
  };

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4 }}>
      <Stack spacing={2.5}>
        <Stack spacing={1.5} sx={{ textAlign: "center" }}>
          <Typography aria-hidden="true" sx={{ fontSize: 38 }}>
            {released ? "☀️" : "☁️"}
          </Typography>
          <Typography
            component="h3"
            variant="h5"
            aria-live="polite"
            sx={{ fontWeight: 700 }}
          >
            {released
              ? "You don't have to carry it alone."
              : "What's on your heart?"}
          </Typography>
          {released ? (
            <>
              <Typography
                component="blockquote"
                sx={{ mx: 0, lineHeight: 1.7 }}
              >
                “Dear God, You know what's weighing on my heart. Please help me
                find peace, courage, and wisdom to face what I cannot control.
                Amen.”
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1 Peter 5:7
              </Typography>
              <Typography color="text.secondary">
                Giving a worry to God doesn't mean pretending the problem has
                disappeared. It means inviting Him into the situation while
                still taking practical steps.
              </Typography>
            </>
          ) : (
            <Typography color="text.secondary">
              Sometimes our worries become so heavy that we forget we don't have
              to carry them alone.
            </Typography>
          )}
        </Stack>

        {!released && (
          <TextField
            multiline
            minRows={3}
            maxRows={6}
            fullWidth
            value={reflection}
            onChange={(event) => setReflection(event.target.value)}
            placeholder="Something that's been worrying me..."
            helperText="Don't worry no one will see this. Your reflection is optional and stays in this activity."
            slotProps={{ htmlInput: { "aria-label": "Private reflection" } }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
          />
        )}

        <Button
          fullWidth
          variant={released ? "outlined" : "contained"}
          endIcon={released ? undefined : <ArrowForwardIcon />}
          onClick={advance}
          sx={released ? { ...secondaryButtonSx, py: 1.2 } : primaryButtonSx}
        >
          {released ? "Start again" : "Give it to God"}
        </Button>
      </Stack>
    </Paper>
  );
}
