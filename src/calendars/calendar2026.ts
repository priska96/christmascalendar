import type { Gifts } from "../types/gifts";
import Intro from "../static/2026/Intro.txt?raw";
import PrayerGodEnterLife from "../static/2026/prayer-godEnterLife.png";
import SermonWhoRulesYou from "../static/2026/sermon-WhoRulesYou.txt?raw";
import Letters from "../static/2026/letters.JPG";
import Letters2 from "../static/2026/letters2.jpeg";
import Letters3 from "../static/2026/letters3.JPG";
import Letters4 from "../static/2026/letters4.JPG";
import Letters5 from "../static/2026/letters5.JPG";
import FirstCandle from "../static/2026/1st-candle.png";
import SecondCandle from "../static/2026/2nd-candle.png";
import ThirdCandle from "../static/2026/3rd-candle.png";
import FourthCandle from "../static/2026/4th-candle.png";
import Picnic from "../static/2026/picnic.JPG";
import OurTrips2026 from "../static/2026/our-trips-2026-compr.mp4";
import PriskaHike from "../static/2026/priskaHike.jpg";
import PriskaEating from "../static/2026/priskaEating.JPG";
import PriskaEating2 from "../static/2026/priskaEating2.JPG";
import PriskaEating3 from "../static/2026/priskaEating3.JPG";
import PriskaEating4 from "../static/2026/priskaEating4.JPG";
import PriskaEating5 from "../static/2026/priskaEating5.JPG";
import PriskaEating6 from "../static/2026/priskaEating6.JPG";
import MovieCoupon from "../static/2026/24-movie-coupon.png";
import ThePowerOfYourThoughts from "../static/2026/thePowerOfYourThoughts.txt?raw";
import PowerOfThoughts from "../static/2026/powerOfThoughts-web.mp4";
import YouAreNotYourMistakes from "../static/2026/youAreNotYourMistakes.txt?raw";
import PrayerWhenIFeelNotGoodEnough from "../static/2026/prayerWhenIFeelNotGoodEnough.png";
import LearningToForgive from "../static/2026/LearningToForgive.mp3";
import LearningToForgiveTxt from "../static/2026/LearningToForgive.txt?raw";
import LearningToForgiveImg from "../static/2026/LearningToForgive.JPG";
import Wedding from "../static/2026/wedding.JPG";
import Wedding2 from "../static/2026/wedding2.JPG";
import Wedding3 from "../static/2026/wedding3.JPG";
import Wedding4 from "../static/2026/wedding4.jpeg";
import Wedding5 from "../static/2026/wedding5.jpeg";
import Wedding6 from "../static/2026/wedding6.JPG";
import PrayerForFuture from "../static/2026/prayerForFuture.png";
import TrustGod from "../static/2026/TrustGod.mp3";
import TrustGodTxt from "../static/2026/WhatDoesItMeanToTrustGod.txt?raw";
import TrustGodImg from "../static/2026/WhatDoesItMeanToTrustGod.jpg";
import TheGreatestGift from "../static/2026/TheGreatestGift.txt?raw";
import Xmas2026 from "../static/2026/xmas2026-web.mp4";

const assets: Record<string, string> = {
  Intro,
  PrayerGodEnterLife,
  SermonWhoRulesYou,
  Letters,
  Letters2,
  Letters3,
  Letters4,
  Letters5,
  FirstCandle,
  SecondCandle,
  ThirdCandle,
  FourthCandle,
  Picnic,
  OurTrips2026,
  MovieCoupon,
  PriskaHike,
  PriskaEating,
  PriskaEating2,
  PriskaEating3,
  PriskaEating4,
  PriskaEating5,
  PriskaEating6,
  ThePowerOfYourThoughts,
  PowerOfThoughts,
  YouAreNotYourMistakes,
  PrayerWhenIFeelNotGoodEnough,
  LearningToForgive,
  LearningToForgiveTxt,
  LearningToForgiveImg,
  Wedding,
  Wedding2,
  Wedding3,
  Wedding4,
  Wedding5,
  Wedding6,
  PrayerForFuture,
  TrustGod,
  TrustGodTxt,
  TrustGodImg,
  TheGreatestGift,
  Xmas2026,
};

export const gifts: Gifts = {
  0: { title: "야! 멈춰!", content: "조금만 기다려~~", type: "text" },
  1: {
    title: "Intro - Just something to read",
    content: assets.Intro,
    type: "text",
  },
  2: {
    title: "A Prayer to Invite God Into My Life - Just something to read",
    content: assets.PrayerGodEnterLife,
    type: "img",
  },
  3: {
    title: "Sermon: Who Rules You? - Just something to read",
    content: assets.SermonWhoRulesYou,
    type: "text",
  },
  4: {
    title: "Thank you for the picnics this year!  ",
    content: assets.Picnic,
    type: "img",
  },
  5: {
    title: "A New Beginning With God",
    type: "repentance",
  },
  6: {
    title: "2nd Advent",
    content: "Click to light the candle",
    candle: 2,
    before: assets.FirstCandle,
    after: assets.SecondCandle,
    backdropBefore: "rgba(0,0,0,0.6)",
    backdropAfter: "rgba(0,0,0,0.3)",
    type: "advent",
  },
  7: {
    title: "잘 먹는 프리스카 ^^",
    content: [
      assets.PriskaEating,
      assets.PriskaEating2,
      assets.PriskaEating3,
      assets.PriskaEating4,
      assets.PriskaEating5,
      assets.PriskaEating6,
    ],
    type: "img",
  },
  8: {
    title: "Sermon: The Power of Your Thoughts",
    content: assets.PowerOfThoughts,
    transcript: assets.ThePowerOfYourThoughts,
    id: 8,
    type: "mp4",
  },
  9: {
    title: "God's Promises Jar",
    type: "promises-jar",
  },
  10: {
    title: "Sermon: You Are Not Your Mistakes - Just something to read",
    content: assets.YouAreNotYourMistakes,
    type: "text",
  },
  11: {
    title: "Our future letters will arrive in 1 month!",
    content: [
      assets.Letters,
      assets.Letters2,
      assets.Letters3,
      assets.Letters4,
      assets.Letters5,
    ],
    type: "img",
  },
  12: {
    title: "Jihoon, thank you for travelling with me!",
    content: assets.OurTrips2026,
    id: 12,
    type: "mp4",
  },
  13: {
    title: "3rd Advent",
    content: "Click to light the candle",
    candle: 3,
    before: assets.SecondCandle,
    after: assets.ThirdCandle,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  14: {
    title: "Give Your Worries to God",
    type: "give-your-worries",
  },
  15: {
    title: "A Prayer for When I Feel Not Good Enough  - Just something to read",
    content: assets.PrayerWhenIFeelNotGoodEnough,
    type: "coupon",
  },
  16: {
    title: "Coupon - Avengers: Doomsday is in theaters now!",
    content: assets.MovieCoupon,
    type: "coupon",
  },
  17: {
    title: "Sermon: Learning To Forgive",
    subtitle: "",
    content: assets.LearningToForgive,
    img: assets.LearningToForgiveImg,
    transcript: assets.LearningToForgiveTxt,
    id: 17,
    type: "mp3",
  },
  18: {
    title: "Changing Negative Thoughts",
    type: "changing-thoughts",
  },
  19: {
    title: "Thank you, that I'm part of your family!",
    content: [
      assets.Wedding,
      assets.Wedding2,
      assets.Wedding3,
      assets.Wedding4,
      assets.Wedding5,
      assets.Wedding6,
    ],
    type: "img",
  },
  20: {
    title: "4th Advent",
    content: "Click to light the candle",
    candle: 4,
    before: assets.ThirdCandle,
    after: assets.FourthCandle,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  21: {
    title: "Sermon: What Does It Mean To Trust God?",
    subtitle: "",
    content: assets.TrustGod,
    img: assets.TrustGodImg,
    transcript: assets.TrustGodTxt,
    id: 21,
    type: "mp3",
  },
  22: {
    title: "One Small Step of Change",
    type: "small-step-of-change",
  },
  23: {
    title: "A Prayer For Future - Just something to read",
    content: assets.PrayerForFuture,
    type: "img",
  },
  24: {
    title: "Sermon: The Greatest Gift",
    content: assets.Xmas2026,
    transcript: assets.TheGreatestGift,
    id: 24,
    type: "mp4",
  },
};
