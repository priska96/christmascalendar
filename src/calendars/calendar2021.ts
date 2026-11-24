import { type Gifts } from "../types/gifts";

const assets = {
  Britney:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/My-Only-Wish-This-Year.m4a",
  Img1: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/IMG_7006.jpg",
  Img2: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/crossword1.png",
  Img3: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/snack-coupon.png",
  Img4: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/bible-verses-red.png",
  Img51:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/1st-candle.png",
  Img52:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/2nd-candle.png",
  Img7: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/thank-you.png",
  Brandon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/Long-Distance-Love.m4a",
  Img8: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/IMG_1162.JPG",
  Img9: "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/coffee-coupon.png",
  Jason:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/Im-Yours.m4a",
  Img11:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/IMG_4077.JPG",
  Img122:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/3rd-candle.png",
  Img13:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/bible-verses-blue.png",
  Christina:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/A-Thousand-Years.m4a",
  Img14:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/IMG_0838.jpg",
  Mariah:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/All-I-Want-For-Christmas-Is-You.m4a",
  Img16:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/IMG_7006.jpg",
  Img17:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/bible-verses-red-2.png",
  Unknown:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/In-My-Eyes.m4a",
  Img18:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/IMG_0384.jpg",
  Img192:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/4th-candle.png",
  Img21:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/crossword2.png",
  Img22:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/coffee-coupon.png",
  Img23:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/snack-coupon.png",
  Img24:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/24-movie-coupon.png",
};

export const gifts: Gifts = {
  0: { title: "야! 멈춰!", content: "조금만 기다려~~", type: "text" },
  1: {
    title: "My Only Wish This Year",
    subtitle: "© Britney Spears",
    content: assets.Britney,
    img: assets.Img1,
    id: 1,
    type: "mp3",
  },
  2: { title: "Crosword Puzzle", content: assets.Img2, type: "img" },
  3: { title: "Coupon", content: assets.Img3, type: "coupon" },
  4: {
    title: "Bible Verses - Just something to read",
    content: assets.Img4,
    type: "img",
  },
  5: {
    title: "2nd Advent",
    content: "Click to light the candle",
    candle: 2,
    before: assets.Img51,
    after: assets.Img52,
    backdropBefore: "rgba(0,0,0,0.8)",
    backdropAfter: "rgba(0,0,0,0.6)",
    type: "advent",
  },
  6: {
    title: "Christmas Game",
    content: "Baby, since you love games so much, enjoy this game!",
    link: "https://gamilab.com/play/8ec45ee1-dbb5-436d-926d-b5e2af7097a6",
    linkName: "Christmas in Germany",
    type: "game",
  },
  7: {
    title: "Thank You!",
    content: assets.Img7,
    type: "img",
  },
  8: {
    title: "Long Distance Love",
    subtitle: "© Brandon",
    content: assets.Brandon,
    img: assets.Img8,
    id: 8,
    type: "mp3",
  },
  9: { title: "Coupon", content: assets.Img9, type: "coupon" },
  10: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe src="https://wordwall.net/embed/ed1d34b450764ff99c87c1e6e7c0c846?themeId=2&templateId=25" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  11: {
    title: "I'm Yours",
    subtitle: "© Jason Mraz",
    content: assets.Jason,
    img: assets.Img11,
    id: 11,
    type: "mp3",
  },
  12: {
    title: "3rd Advent",
    content: "Click to light the candle",
    candle: 3,
    before: assets.Img52,
    after: assets.Img122,
    backdropBefore: "rgba(0,0,0,0.6)",
    backdropAfter: "rgba(0,0,0,0.3)",
    type: "advent",
  },
  13: {
    title: "Bible Verses - Just something to read",
    content: assets.Img13,
    type: "img",
  },
  14: {
    title: "A Thousand Years",
    subtitle: "© Christina Perri",
    content: assets.Christina,
    img: assets.Img14,
    id: 14,
    type: "mp3",
  },
  15: {
    title: "Christmas Game",
    content: "Baby, since you love games so much, enjoy this game!",
    link: "https://gamilab.com/play/78b5d5e3-245a-42f4-a9b5-a74a85a33927",
    linkName: "Dating in Seoul",
    type: "game",
  },
  16: {
    title: "All I Want For Christmas Is You",
    subtitle: "© Mariah Carey",
    content: assets.Mariah,
    img: assets.Img16,
    id: 16,
    type: "mp3",
  },
  17: {
    title: "Bible Verses - Just something to read",
    content: assets.Img17,
    type: "img",
  },
  18: {
    title: "내 눈엔",
    subtitle: "Unknown",
    content: assets.Unknown,
    img: assets.Img18,
    id: 18,
    type: "mp3",
  },
  19: {
    title: "4th Advent",
    content: "Click to light the candle",
    candle: 4,
    before: assets.Img122,
    after: assets.Img192,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  20: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe src="https://wordwall.net/embed/bd4a91466be04ff1a1c300668d714ad6?themeId=2&templateId=25" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  21: { title: "Crossword Puzzle", content: assets.Img21, type: "img" },
  22: { title: "Coupon", content: assets.Img22, type: "coupon" },
  23: { title: "Coupon", content: assets.Img23, type: "coupon" },
  24: { title: "Movie Coupon", content: assets.Img24, type: "coupon" },
};
