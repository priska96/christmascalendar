import { primaryButtonSx, secondaryButtonSx } from "./interactiveButtonStyles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import { closeDoorModal } from "../redux/doorsSlice";
import { useAppDispatch } from "../redux/store";
import type { QuestionGift } from "../types/gifts";

export default function QuestionGiftContent({ gift }: { gift: QuestionGift }) {
  const dispatch = useAppDispatch();
  const sendEmail = (template: string) => {
    emailjs.init("K-X0LQmIbtD_F4JRM");
    emailjs
      .send("service_gqhyzpk", template)
      .then(() => alert("Thanks. An email was sent :)"))
      .catch((error) => console.log("Email failed:", error));
    dispatch(closeDoorModal());
  };

  return (
    <>
      <Typography sx={{ whiteSpace: "pre-line" }}>{gift.content}</Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", columnGap: 4, mt: 2 }}>
        <Button sx={primaryButtonSx} variant="contained" onClick={() => sendEmail("template_fiy1kea")}>
          Yes
        </Button>
        <Button sx={secondaryButtonSx} variant="outlined" onClick={() => sendEmail("template_c1mtyso")}>
          No
        </Button>
      </Box>
    </>
  );
}
