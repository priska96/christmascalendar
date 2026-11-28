import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export default function GiftStepProgress({
  step,
  total,
  label,
  color,
}: {
  step: number;
  total: number;
  label: string;
  color: string;
}) {
  return (
    <>
      <LinearProgress
        aria-label="Activity progress"
        variant="determinate"
        value={(step / total) * 100}
        sx={{
          width: "100%",
          height: 6,
          borderRadius: 3,
          bgcolor: "#E5EAE3",
          "& .MuiLinearProgress-bar": { bgcolor: color, borderRadius: 3 },
        }}
      />
      <Typography variant="caption" color="text.secondary">
        Step {step} of {total} · {label}
      </Typography>
    </>
  );
}
