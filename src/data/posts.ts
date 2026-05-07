import recurrexLogo from "@/assets/recurrex-logo.jpg";
import aritraaPhoto from "@/assets/crew/aritraa-chakraborty.jpg";

export type Post = {
  id: string;
  author: string;
  authorPhoto: string;
  title: string;
  caption: string;
  date: string; // ISO
  dateLabel: string; // formatted
  images: string[]; // first is featured
};

export const RECURREX_LOGO = recurrexLogo;

export const POSTS: Post[] = [
  {
    id: "ieee-code2console-win",
    author: "Aritraa Chakraborty",
    authorPhoto: aritraaPhoto,
    title: "IEEE Code2Console Win",
    caption:
      "Recurrex secured 1st Runner-Up at the IEEE EDS Code2Console Game Development Competition 2026 — a milestone built on long nights, bold ideas, and a crew that refused to settle.",
    date: "2026-05-07T12:00:00",
    dateLabel: "May 7, 2026 • 12:00 PM",
    images: [recurrexLogo],
  },
];

export type GalleryItem = { src: string; title: string; postId: string };

export const GALLERY: GalleryItem[] = POSTS.flatMap((p) =>
  p.images.map((src) => ({ src, title: p.title, postId: p.id })),
);