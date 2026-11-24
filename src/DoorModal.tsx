import * as React from "react";
import isEqual from "lodash/isEqual";
import { Image, Video } from "@imagekit/react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";

import { closeDoorModal, lightCandle } from "./redux/doorsSlice";
import { gifts as gifts2021 } from "./calendars/calendar2021";
import { gifts as gifts2022 } from "./calendars/calendar2022";
import { gifts as gifts2023 } from "./calendars/calendar2023";
import { gifts as gifts2025 } from "./calendars/calendar2025";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { type Gift, type Gifts } from "./types/gifts";
import { IMAGE_KIT_ENDPOINT } from "./constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  maxWidth: 800,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  color: "black",
};

const styleMedia = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "transparent",
  p: 0,
  color: "black",
};
const styleEmbed = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  color: "black",
};
const styleAdvent = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  p: 0,
  color: "white",
};

function DoorModal({ id }: { id: number }) {
  const [open, setOpen] = React.useState(false);
  const [gifts, setGifts] = React.useState<Gifts>({ ...gifts2021 });

  emailjs.init("K-X0LQmIbtD_F4JRM");
  // Get the actual `dispatch` function with `useDispatch`
  const dispatch = useAppDispatch();

  // Use prop in scope to select a specific value
  const doors = useAppSelector((state) => state.doors);

  React.useEffect(() => {
    const today = new Date();
    switch (today.getFullYear()) {
      case 2025:
        if (!isEqual(gifts, gifts2025)) {
          setGifts({ ...gifts2025 });
        }
        break;
      case 2023:
        if (!isEqual(gifts, gifts2023)) {
          setGifts({ ...gifts2023 });
        }
        break;
      case 2022:
        if (!isEqual(gifts, gifts2022)) {
          setGifts({ ...gifts2022 });
        }
        break;
      default:
        setGifts({ ...gifts2025 });
    }
  }, []);
  React.useEffect(() => {
    setOpen(doors.doorModal);
  }, [doors.doorModal, open]);

  const update = (
    e: React.MouseEvent<HTMLElement, MouseEvent> | React.TouchEvent<HTMLElement>
  ) => {
    if (!e) return;
    const x =
      (e as React.MouseEvent<HTMLElement, MouseEvent>).clientX ||
      (e as React.TouchEvent<HTMLElement>).touches[0].clientX;
    const y =
      (e as React.MouseEvent<HTMLElement, MouseEvent>).clientY ||
      (e as React.TouchEvent<HTMLElement>).touches[0].clientY;
    document
      .getElementById("darkFun")
      ?.style.setProperty("--cursorX", x + "px");
    document
      .getElementById("darkFun")
      ?.style.setProperty("--cursorY", y + "px");
  };
  const sendEmail = (emailTemplate: string) => {
    emailjs
      .send("service_gqhyzpk", emailTemplate)
      .then(() => alert("Thanks. An email was sent :)"))
      .catch((err) => console.log("Email failed:", err));
  };
  function content(gift: Gift) {
    if (gift.type === "text") {
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Box
            sx={{
              maxHeight: "70vh",
              overflowY: "scroll",
              whiteSpace: "pre-line",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2, mr: 2 }}>
              {gift.content}
            </Typography>
          </Box>
        </Box>
      );
    } else if (gift.type === "embed") {
      return (
        <Box sx={styleEmbed}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {gift.subtitle}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: gift.content }}></div>
        </Box>
      );
    } else if (gift.type === "game") {
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {gift.content}
            <br />
            <a href={gift.link} target="_blank" rel="noreferrer">
              {gift.linkName}
            </a>
          </Typography>
        </Box>
      );
    } else if (gift.type === "coupon") {
      return (
        <Box sx={styleMedia}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              id="modal-modal-description"
              urlEndpoint={IMAGE_KIT_ENDPOINT}
              src={gift.content.split(IMAGE_KIT_ENDPOINT)[1]}
              width={500}
              alt={gift.title}
            />
          </Box>
        </Box>
      );
    } else if (gift.type === "img") {
      return (
        <Box
          sx={{
            ...styleMedia,
            width: "auto",
          }}
        >
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                paddingX: 2,
                paddingY: 1,
              }}
            >
              <Typography component="div" variant="h5">
                {gift.title}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "1 0 auto",
                alignItems: "center",
                height: 600,
                paddingBottom: 0.3,
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  id="modal-modal-description"
                  urlEndpoint={IMAGE_KIT_ENDPOINT}
                  src={gift.content.split(IMAGE_KIT_ENDPOINT)[1]}
                  alt={gift.title}
                />
              </CardMedia>
            </Box>
          </Card>
        </Box>
      );
    } else if (gift.type === "advent") {
      return (
        <React.Fragment>
          <Box sx={styleAdvent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {gift.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {gift.content}
            </Typography>

            {doors.candles.includes(gift.candle) ? (
              <Image
                urlEndpoint={IMAGE_KIT_ENDPOINT}
                src={gift.after.split(IMAGE_KIT_ENDPOINT)[1]}
                width={500}
                height={500}
                alt={gift.title}
              />
            ) : (
              <Image
                className="advent"
                urlEndpoint={IMAGE_KIT_ENDPOINT}
                src={gift.before.split(IMAGE_KIT_ENDPOINT)[1]}
                width={500}
                height={500}
                alt={gift.title}
                onClick={() => {
                  dispatch(lightCandle(gift.candle));
                }}
              />
            )}
          </Box>
          {doors.candles.includes(gift.candle) ? (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: gift.backdropAfter,
              }}
              open={open}
              onClick={() => dispatch(closeDoorModal())}
            ></Backdrop>
          ) : (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: gift.backdropBefore,
              }}
              open={open}
              onClick={() => {
                dispatch(lightCandle(gift.candle));
              }}
            ></Backdrop>
          )}
        </React.Fragment>
      );
    } else if (gift.type === "mp3") {
      return (
        <Box sx={styleMedia}>
          <Card sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {gift.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {gift.subtitle}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pr: 1,
                  pb: 1,
                }}
              >
                <audio id={"audio-" + gift.id} controls>
                  <source src={gift.content} type="audio/mp4" />
                </audio>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "1 0 auto",
                alignItems: "center",
                width: 350,
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  id="modal-modal-description"
                  urlEndpoint={IMAGE_KIT_ENDPOINT}
                  src={gift.img.split(IMAGE_KIT_ENDPOINT)[1]}
                  alt={gift.title}
                />
              </CardMedia>
            </Box>
          </Card>
        </Box>
      );
    } else if (gift.type === "spice") {
      return (
        <React.Fragment>
          <Box sx={styleMedia}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ backgroundColor: "white" }}
            >
              {gift.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 600,
              }}
            >
              <Image
                id="modal-modal-description"
                urlEndpoint={IMAGE_KIT_ENDPOINT}
                src={gift.content.split(IMAGE_KIT_ENDPOINT)[1]}
                alt={gift.title}
              />
            </Box>
          </Box>
          <Backdrop
            id="darkFun"
            open={open}
            onMouseMove={(e) => update(e)}
            onTouchMove={(e) => update(e)}
            onClick={() => dispatch(closeDoorModal())}
          ></Backdrop>
        </React.Fragment>
      );
    } else if (gift.type === "mp4") {
      return (
        <Box
          sx={{
            ...styleMedia,
            width: "auto",
          }}
        >
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                paddingX: 2,
                paddingY: 1,
              }}
            >
              <Typography component="div" variant="h5">
                {gift.title}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flex: "1 0 auto",
                alignItems: "center",
                height: "auto",
                paddingBottom: 0.3,
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Video
                  id="modal-modal-description"
                  urlEndpoint={IMAGE_KIT_ENDPOINT}
                  src={gift.content.split(IMAGE_KIT_ENDPOINT)[1]}
                  controls
                  height={500}
                />
              </CardMedia>
            </Box>
          </Card>
        </Box>
      );
    }
    if (gift.type === "question") {
      return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {gift.title}
          </Typography>
          <Box
            sx={{
              maxHeight: "70vh",
              overflowY: "scroll",
              whiteSpace: "pre-line",
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2, mr: 2 }}>
              {gift.content}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              columnGap: 4,
              mt: 2,
            }}
          >
            <Button
              sx={{
                backgroundColor: "#6c9449",
              }}
              variant="contained"
              onClick={() => {
                sendEmail("template_fiy1kea");
                dispatch(closeDoorModal());
              }}
            >
              Yes
            </Button>
            <Button
              sx={{
                backgroundColor: "#d0cbaf",
              }}
              variant="contained"
              onClick={() => {
                sendEmail("template_c1mtyso");
                dispatch(closeDoorModal());
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      );
    }
    return <div>Unknown gift type</div>;
  }

  return (
    <Modal
      open={open}
      onClose={() => dispatch(closeDoorModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {Object.keys(gifts).includes(id.toString()) ? (
        content(gifts[id])
      ) : (
        <div>Unknown gift type</div>
      )}
    </Modal>
  );
}

export default DoorModal;
