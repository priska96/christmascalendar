export type TextGift = {
  title: string;
  content: string;
  type: "text";
};

export type Mp3Gift = {
  title: string;
  subtitle: string;
  content: string; // imported mp3 file
  transcript?: string;
  img: string;
  id: number;
  type: "mp3";
};

export type Mp4Gift = {
  title: string;
  content: string; // imported mp4 file
  transcript?: string;
  id: number;
  type: "mp4";
};

export type EmbedGift = {
  title: string;
  subtitle?: string;
  content: string; // iframe HTML
  type: "embed";
};

export type ImgGift = {
  title: string;
  content: string | readonly string[];
  type: "img";
};

export type AdventGift = {
  title: string;
  content: string;
  candle: number;
  before: string; // imported image file
  after: string; // imported image file
  backdropBefore: string;
  backdropAfter: string;
  type: "advent";
};

export type GameGift = {
  title: string;
  content: string;
  link: string;
  linkName: string;
  type: "game";
};

export type CouponGift = {
  title: string;
  content: string; // imported image file
  type: "coupon";
};

export type SpiceGift = {
  title: string;
  content: string; // imported image file
  type: "spice";
};
export type QuestionGift = {
  title: string;
  content: string;
  type: "question";
};

export type RepentanceGift = {
  title: string;
  type: "repentance";
};

// Union type for all gifts
export type Gift =
  | TextGift
  | Mp3Gift
  | Mp4Gift
  | EmbedGift
  | ImgGift
  | AdventGift
  | GameGift
  | CouponGift
  | SpiceGift
  | QuestionGift
  | RepentanceGift
  | { title: string; type: "promises-jar" }
  | { title: string; type: "give-your-worries" }
  | { title: string; type: "changing-thoughts" }
  | { title: string; type: "small-step-of-change" };

export type Gifts = {
  [key: number]: Gift;
};
