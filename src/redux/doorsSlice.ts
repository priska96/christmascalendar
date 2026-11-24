import { createSlice } from "@reduxjs/toolkit";

function shuffle(doors: number[]) {
  let currentIndex = doors.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [doors[currentIndex], doors[randomIndex]] = [
      doors[randomIndex],
      doors[currentIndex],
    ];
  }

  return doors;
}
export type DoorState = {
  doors: number[];
  doorModal: boolean;
  candles: number[];
  numbers: number[];
  year?: number;
};
const INITIAL_STATE: DoorState = {
  doors: [],
  doorModal: false,
  candles: [],
  numbers: shuffle([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]),
  year: new Date().getFullYear(),
};

const doorSlice = createSlice({
  name: "doors",
  initialState: INITIAL_STATE,
  reducers: {
    openDoor(state, action) {
      const day = action.payload;
      console.log("Opening door for day:", day);
      state.doors.push(day);
      state.doorModal = true;
    },
    closeDoor(state, action) {
      const day = action.payload;
      state.doors = state.doors.filter((doorDay) => doorDay !== day);
      state.doorModal = false;
    },
    closeDoorModal(state) {
      state.doorModal = false;
    },
    lightCandle(state, action) {
      const light = action.payload;
      state.candles.push(light);
    },
    setYear(state, action) {
      const year = action.payload;
      state.year = year;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { openDoor, closeDoor, closeDoorModal, lightCandle, setYear } =
  doorSlice.actions;

// Export the slice reducer as the default export
export default doorSlice.reducer;
