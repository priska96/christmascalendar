export const interactiveGreen = "#779C81";
export const interactiveGreenDark = "#60866A";

export const primaryButtonSx = {
  bgcolor: interactiveGreen,
  borderRadius: 2,
  px: 3,
  py: 1.2,
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "none",
  "&:hover": {
    bgcolor: interactiveGreenDark,
    boxShadow: "none",
  },
};

export const secondaryButtonSx = {
  borderRadius: 2,
  borderColor: "#DCE5DA",
  color: interactiveGreenDark,
  textTransform: "none",
  "&:hover": { borderColor: interactiveGreenDark },
};
