import { type Gifts } from "../types/gifts";

const assets = {
  Taylor:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/Hey-Jihoon.mp3",
  heyJihoon:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/hey-jihoon.JPG",
  Taylor2:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/Lover.mp3",
  lover:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/lover.JPG",
  Justin:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/Christmas-Love.mp3",
  christmasLove:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/christmas-love.JPG",
  Bruno:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/Just-the-Way-You-are.mp3",
  justTheWayYouAre:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/just-the-way-you-are.jpeg",
  Img3: "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/xxx1.jpeg",
  Img41:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/1st-candle.png",
  Img42:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/2nd-candle.png",
  Img5: "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/bible-verses-hope.png",
  Img9: "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/xxx2.jpeg",
  Img122:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/3rd-candle.png",
  Img13:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/prayer-friendship.png",
  Img16:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/xxx3.jpeg",
  Img19:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/prayer-love.png",
  Gomawo:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/IMG_9071.mp4",
  Img192:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2021/4th-candle.png",
  Img22:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/coffee-coupon.png",
  Img21:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/dinner-coupon.png",
  Img24:
    "https://ik.imagekit.io/priska96/christmas_calendar_content/2022/xxx4.jpeg",
};

export const gifts: Gifts = {
  0: { title: "야! 멈춰!", content: "조금만 기다려~~", type: "text" },
  1: {
    title: "Christmas Love",
    subtitle: "© Justin Bieber",
    content: assets.Justin,
    img: assets.christmasLove,
    id: 1,
    type: "mp3",
  },
  2: {
    title: "Crossword Puzzle",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/70a169636a49423689fc152ea83ad262?themeId=45&templateId=10&fontStackId=0" width="550" height="420" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  3: { title: "Surprise ;)", content: assets.Img3, type: "spice" },
  4: {
    title: "2nd Advent",
    content: "Click to light the candle",
    candle: 2,
    before: assets.Img41,
    after: assets.Img42,
    backdropBefore: "rgba(0,0,0,0.8)",
    backdropAfter: "rgba(0,0,0,0.6)",
    type: "advent",
  },
  5: {
    title: "Bible Verses about Hope and Encouragement - Just something to read",
    content: assets.Img5,
    type: "img",
  },
  6: {
    title: "'Test your German' Game",
    content: "Baby, since you love games so much, enjoy this game!",
    link: "https://gamilab.com/play/1fff5600-85b8-499d-bb62-8c69bdc5f8c2",
    linkName: "Guess the German words",
    type: "game",
  },
  7: {
    title: "Maze Chase",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/c69016f4d5a340d9bced4cb6fc8f14a0?themeId=23&templateId=49&fontStackId=0" width="550" height="420" frameBorder="0" allowFullScreen></iframe>',
    type: "embed",
  },
  8: {
    title: "Hey Jihoon",
    subtitle: "© Taylor Swift",
    content: assets.Taylor,
    img: assets.heyJihoon,
    id: 8,
    type: "mp3",
  },
  9: { title: "Spicing it up ;)", content: assets.Img9, type: "spice" },
  10: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/8e896838edd34a268157b9800875e215?themeId=22&templateId=25&fontStackId=0" width="550" height="420" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  11: {
    title: "3rd Advent",
    content: "Click to light the candle",
    candle: 3,
    before: assets.Img42,
    after: assets.Img122,
    backdropBefore: "rgba(0,0,0,0.6)",
    backdropAfter: "rgba(0,0,0,0.3)",
    type: "advent",
  },
  12: {
    title: "Just the Way You are",
    subtitle: "© Bruno Mars",
    content: assets.Bruno,
    img: assets.justTheWayYouAre,
    id: 12,
    type: "mp3",
  },
  13: {
    title: "A Prayer for Friendship - Just something to read",
    content: assets.Img13,
    type: "img",
  },
  14: {
    title: "Lover",
    subtitle: "© Taylor Swift",
    content: assets.Taylor2,
    img: assets.lover,
    id: 14,
    type: "mp3",
  },
  15: {
    title: "German Vocab Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/1dcff72cfc9241df8a6b57544aa5eee1?themeId=48&templateId=70&fontStackId=0" width="550" height="420" frameBorder="0" allowFullScreen></iframe>',
    type: "embed",
  },
  16: { title: "I'm waiting ;)", content: assets.Img16, type: "spice" },
  17: {
    title: "고마워~~",
    content: assets.Gomawo,
    id: 17,
    type: "mp4",
  },
  18: {
    title: "4th Advent",
    content: "Click to light the candle",
    candle: 4,
    before: assets.Img122,
    after: assets.Img192,
    backdropBefore: "rgba(0,0,0,0.3)",
    backdropAfter: "rgba(0,0,0,0)",
    type: "advent",
  },
  19: {
    title: "A Prayer to Love - Just something to read",
    content: assets.Img19,
    type: "img",
  },
  20: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/99f0933d8a1e4ba3bdaec7b9f77334f7?themeId=41&templateId=25&fontStackId=0" width="550" height="420" frameborder="0" allowfullscreen></iframe>',
    type: "embed",
  },
  21: { title: "Coupon", content: assets.Img21, type: "coupon" },
  22: { title: "Coupon", content: assets.Img22, type: "coupon" },
  23: {
    title: "Memory Game",
    subtitle: "Baby, since you love games so much, enjoy this game!",
    content:
      '<iframe style="max-width:100%" src="https://wordwall.net/embed/f882755b51654d6c94a8b69ce6ef52d7?themeId=21&templateId=69&fontStackId=0" width="550" height="420" frameBorder="0" allowFullScreen></iframe>',
    type: "embed",
  },
  24: {
    title: "Merry Christmas. I love Jihoon xxx ",
    content: assets.Img24,
    type: "spice",
  },
};
