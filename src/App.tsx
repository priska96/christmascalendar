import * as React from "react";
import "./styles.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DoorModal from "./DoorModal";

import persistentStore, { useAppDispatch, useAppSelector } from "./redux/store";
import { closeDoor, openDoor, setYear } from "./redux/doorsSlice";

const TitleContainer = styled(Container)`
  width: 70%;
`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DoorItem = styled(Item)`
  height: 130px;
  perspective: 1000px;
  transformstyle: preserve-3d;
  cursor: pointer;
  display: flex;
  min-height: 100%;
  width: 100%;
  background-color: transparent !important;
  padding: 0 !important;
  &:hover .door: {
    border-color: #385052;
  }
`;

function App() {
  const [opened, setOpened] = React.useState(0);

  // Get the actual `dispatch` function with `useDispatch`
  const dispatch = useAppDispatch();

  // Use prop in scope to select a specific value
  const doorState = useAppSelector((state) => state.doors);
  console.log(doorState);
  console.log("Year:", doorState.year);

  React.useEffect(() => {
    if (
      !doorState.year ||
      (doorState.year && doorState.year !== new Date().getFullYear())
    ) {
      // Purge the persisted state when year changes
      persistentStore.persistor.purge().then(() => {
        // Optionally reload the page to reset the app
        console.log("Year changed, purged persisted state.");
        dispatch(setYear(new Date().getFullYear()));
        window.location.reload();
      });
    }
  }, [doorState.year]);

  return (
    <Container
      className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 4,
        pb: 4,
      }}
    >
      <TitleContainer>
        <h1>메리 크리스마스 자기야</h1>
        <h3>
          I hope you enjoy Christmas Season with this Advent Calendar {"<"}3
        </h3>
      </TitleContainer>
      <Box sx={{ flexGrow: 1, width: "80%" }}>
        <Grid container spacing={2}>
          {doorState.numbers.map((day) => {
            return (
              <Grid key={day} size={4}>
                <DoorItem
                  onClick={() => {
                    const today = new Date();
                    console.log(today.getMonth());
                    // if (today.getMonth() !== 11) {
                    //   dispatch(openDoor(0));
                    //   setOpened(0);
                    //   return;
                    // }
                    // if (today.getDate() < day) {
                    //   if (doorState.doors.includes(day)) {
                    //     dispatch(closeDoor(day));
                    //   }
                    //   dispatch(openDoor(0));
                    //   setOpened(0);
                    //   return;
                    // }
                    if (doorState.doors.includes(day)) {
                      dispatch(closeDoor(day));
                    } else {
                      dispatch(openDoor(day));
                      setOpened(day);
                    }
                  }}
                >
                  <div
                    className={
                      doorState.doors && doorState.doors.includes(day)
                        ? "door opened"
                        : "door"
                    }
                  >
                    <div className="front">{day}</div>
                    <div className="back"></div>
                  </div>
                </DoorItem>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <DoorModal id={opened} />
    </Container>
  );
}

export default App;
