import { type Gifts } from "../types/gifts";

const assets: Record<string, string> = {
  Leah: "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/Beginning-Middle-End.mp3",
  LeahImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/beginning-middle-end.jpeg",
  Tangled:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/Now-I-see-the-Light.mp3",
  TangledImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/now-i-see-the-light.JPG",
  Better:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/Better.mp3",
  BetterImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/better.jpeg",
  Eric: "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/Howm-I-Doing.mp3",
  EricImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/howm-i-doing.JPG",
  Grease:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/You_re-the-One-that-I-Want.mp3",
  ZeroCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/0-candle.png",
  FirstCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/1st-candle.png",
  SecondCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/2nd-candle.png",
  PrayerLoveConquers:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/prayer-love-conquer-all2.png",
  DontForgetMe:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/dontforgetme.mp4",
  GreaseImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/grease.jpeg",
  ThirdCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/3rd-candle.png",
  PrayerFuture:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/prayer-future2.png",
  PrayerProtectionLust:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/prayer-protection-lust.png",
  PrayerMiracleFromHeaven:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/prayer-miracle-to-happen.png",
  Img22:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/xxx.jpeg",
  Img23:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2023/xxx2.jpeg",
  FourthCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/4th-candle.png",
  Img21:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/dinner-coupon.png",
};

export const gifts: Gifts = {
  0: { title: "야! 멈춰!", content: "조금만 기다려~~", type: "text" },
  1: {
    title: "Better",
    subtitle: "© JJ Heller",
    content: assets.Better,
    img: assets.BetterImg,
    id: 1,
    type: "mp3",
  },
  2: {
    title: "Crossword Puzzle",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/c423168ebe424a8d9194e2d82765271a?themeId=54&templateId=10&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  3: {
    title: "1st Advent",
    content: "Click to light the candle",
    candle: 1,
    before: assets.ZeroCandle,
    after: assets.FirstCandle,
    backdropBefore: "rgba(0,0,0,0.8)",
    backdropAfter: "rgba(0,0,0,0.6)",
    type: "advent",
  },
  4: {
    title: "A Prayer to Protect from Lust - Just something to read",
    content: assets.PrayerProtectionLust,
    type: "img",
  },
  5: {
    title: "A Prayer for Long Distance - Just something to read",
    content: assets.PrayerLoveConquers,
    type: "img",
  },
  6: {
    title: "Jihoon, please never forget about me again...",
    content: assets.DontForgetMe,
    id: 6,
    type: "mp4",
  },
  7: {
    title: "Beginning Middle End",
    subtitle: "© Leah Nobel",
    content: assets.Leah,
    img: assets.LeahImg,
    id: 7,
    type: "mp3",
  },
  8: {
    title: "Meet Teenage Priska",
    subtitle:
      "Baby, I want you to know me more. So here is how I spent my free time when I was younger.",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/f0e720b2a546473a93fa6048efc25c9d?themeId=49&templateId=75&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  9: {
    title: "A Prayer for a Miracle to Happen - Just something to read",
    content: assets.PrayerMiracleFromHeaven,
    type: "img",
  },
  10: {
    title: "2nd Advent",
    content: "Click to light the candle",
    candle: 2,
    before: assets.FirstCandle,
    after: assets.SecondCandle,
    backdropBefore: "rgba(0,0,0,0.6)",
    backdropAfter: "rgba(0,0,0,0.3)",
    type: "advent",
  },
  11: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/a2413b6da47349f992a68af639193408?themeId=54&templateId=25&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  12: {
    title: "How'm I Doing?",
    subtitle: "© Eric Nam",
    content: assets.Eric,
    img: assets.EricImg,
    id: 12,
    type: "mp3",
  },
  13: {
    title: "A Prayer for Future - Just something to read",
    content: assets.PrayerFuture,
    type: "img",
  },
  14: {
    title: "Now I see the Light",
    subtitle: "© Tangled",
    content: assets.Tangled,
    img: assets.TangledImg,
    id: 14,
    type: "mp3",
  },
  15: {
    title: "'Korea Trivia Fun: Do you know your Country?' Game",
    content: "Baby, since you love games so much, enjoy this game!",
    link: "https://gamilab.com/play/kz6bm8",
    linkName: "Korea Trivia Fun",
    type: "game",
  },
  16: { title: "Coupon", content: assets.Img22, type: "coupon" },
  17: {
    title: "3rd Advent",
    content: "Click to light the candle",
    candle: 3,
    before: assets.SecondCandle,
    after: assets.ThirdCandle,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  18: {
    title: "Open the Box: Explore our Memories 2023",
    subtitle: "Baby,it's not really a game but I hope you enjoy it still!!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/16c4f42cbab24fb2bc19389e104970cb?themeId=57&templateId=30&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  19: {
    title: "You're the One that I want",
    subtitle: "© Grease",
    content: assets.Grease,
    img: assets.GreaseImg,
    id: 19,
    type: "mp3",
  },
  20: {
    title: "League of Legends Trivia Fun",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/51a6b3899cfb44b3a814a1e10fb59c6d?themeId=6&templateId=5&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  22: { title: "안녕", content: assets.Img22, type: "spice" },
  21: { title: "Coupon", content: assets.Img21, type: "coupon" },
  23: { title: "사랑해", content: assets.Img23, type: "spice" },
  24: {
    title: "4th Advent",
    content: "Click to light the candle",
    candle: 4,
    before: assets.ThirdCandle,
    after: assets.FourthCandle,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
};
