import type { Gifts } from "../types/gifts";
import Intro from "../static/2025/Intro.txt?raw";
import Day12 from "../static/2025/Day12.txt?raw";
import Day17 from "../static/2025/Day17.txt?raw";
import Day24 from "../static/2025/Day24.txt?raw";

const assets: Record<string, string> = {
  Intro,
  Woosung:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/woosung.m4a",
  WoosungImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/woosungImg.jpeg",
  PrayerCourageJob:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/prayerCourageJob.png",
  PrayerLostLove:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/prayerLostLove.png",
  FirstCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/1st-candle.png",
  OurTrips2025:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/our%20trips%202025.mp4",
  CoffeeCoupon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/coffee-coupon.png",
  SecondCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/2nd-candle.png",
  PrayerForgiveMyself:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/prayerForgiveMyself.png",
  Day12,
  PhilCollins:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/philCollins.m4a",
  PhilCollinsImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/philCollinsImg.jpeg",
  SnacksCoupon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/snacks-coupon.png",
  ThirdCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/3rd-candle.png",
  IceCreamCoupon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/ice-cream-coupon.png",
  Day17,
  Jangbeomjoon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/Jangbeomjoon.m4a",
  JangbeomjoonImg:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/jangbeomjoonImg.jpeg",
  FourthCandle:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/4th-candle.png",
  PrayerForgiveParents:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2025/prayerForgiveParents.png",
  DinnerCoupon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/dinner-coupon.png",
  Day24,
};
export const gifts: Gifts = {
  0: { title: "야! 멈춰!", content: "조금만 기다려~~", type: "text" },
  1: {
    title: "Intro - Just something to read",
    content: assets.Intro,
    type: "text",
  },
  2: {
    title: "ILYSB (I love you so bad)",
    subtitle: "© Woosung",
    content: assets.Woosung,
    img: assets.WoosungImg,
    id: 2,
    type: "mp3",
  },
  3: {
    title: "A Prayer for Courage, Faith and Trust - Just something to read",
    content: assets.PrayerCourageJob,
    type: "img",
  },
  4: {
    title: "A Prayer for Trust and Peace in Lost Love - Just something to read",
    content: assets.PrayerLostLove,
    type: "img",
  },
  5: {
    title: "Jihoon, thank you for travelling with me!",
    content: assets.OurTrips2025,
    id: 5,
    type: "mp4",
  },
  6: { title: "Coupon", content: assets.Day6, type: "coupon" },
  7: {
    title: "2nd Advent",
    content: "Click to light the candle",
    candle: 2,
    before: assets.FirstCandle,
    after: assets.SecondCandle,
    backdropBefore: "rgba(0,0,0,0.6)",
    backdropAfter: "rgba(0,0,0,0.3)",
    type: "advent",
  },
  8: {
    title: "Fill in the missing word: What I love about you",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/de/embed/cd1e6032ca0b48f2a16e2de226c8febd?themeId=46&templateId=36&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  9: {
    title: "A Prayer to Forgive Myself - Just something to read",
    content: assets.PrayerForgiveMyself,
    type: "img",
  },
  10: {
    title: "You'll be in my Heart",
    subtitle: "© Phil Collins",
    content: assets.PhilCollins,
    img: assets.PhilCollinsImg,
    id: 10,
    type: "mp3",
  },
  11: { title: "Coupon", content: assets.SnacksCoupon, type: "coupon" },
  12: {
    title: "Halftime - Just something to read",
    content: assets.Day12,
    type: "text",
  },
  13: {
    title: "Memory Game: Our Memories from 2025",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/de/embed/36a01359f2344b39bdeedc30b3a45c07?themeId=57&templateId=25&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  14: {
    title: "3rd Advent",
    content: "Click to light the candle",
    candle: 3,
    before: assets.SecondCandle,
    after: assets.ThirdCandle,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  15: { title: "Coupon", content: assets.IceCreamCoupon, type: "coupon" },
  16: {
    title: "Word Search: Long Distance Christmas Love",
    subtitle:
      "Baby, since you love games so much, enjoy this game! Also I'm sorry for the ads :(",
    content:
      '<iframe allow="fullscreen; autoplay;" allowfullscreen width="600" height="500" frameborder="0" src="https://www.educaplay.com/game/26335451-love_across_distance_christmas_hope_word_search.html"></iframe>',
    type: "embed",
  },
  17: {
    title: "웃지마 - Just something to read",
    content: assets.Day17,
    type: "text",
  },
  18: {
    title: "Your Shampoo Scent in the Flowers",
    subtitle: "© 장범준",
    content: assets.Jangbeomjoon,
    img: assets.JangbeomjoonImg,
    id: 18,
    type: "mp3",
  },
  19: {
    title: "Quiz: Basketball Trivia Fun",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/de/embed/c1fc96c9b6eb4857ac30cf7d745aa9e7?themeId=66&templateId=5&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  20: {
    title: "A Prayer for Peace within the Family - Just something to read",
    content: assets.PrayerForgiveParents,
    type: "img",
  },
  21: {
    title: "4th Advent",
    content: "Click to light the candle",
    candle: 4,
    before: assets.ThirdCandle,
    after: assets.FourthCandle,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  22: {
    title: "Reasons Why you should date me",
    subtitle:
      "Baby,it's not really a game but I hope you have some good laughs with it!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/de/embed/4e15706bcd8c47d996777cdaee0951e4?themeId=59&templateId=70&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  23: { title: "Coupon", content: assets.DinnerCoupon, type: "coupon" },
  24: {
    title: "The Final - Just something to read",
    content: assets.Day24,
    type: "question",
  },
};
