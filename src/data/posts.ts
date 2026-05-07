import recurrexLogo from "@/assets/recurrex-logo.jpg";
import aritraaPhoto from "@/assets/crew/aritraa-chakraborty.jpg";
import code2console1 from "@/assets/posts/code2console-1.jpg";
import code2console2 from "@/assets/posts/code2console-2.jpg";

export type Post = {
  id: string;
  author: string;
  authorPhoto: string;
  title: string;
  caption: string;
  date: string;
  dateLabel: string;
  images: string[];
  galleryCaption?: string;
  projectLink?: { label: string; to: string };
};

export const RECURREX_LOGO = recurrexLogo;

export const POSTS: Post[] = [
  {
    id: "ieee-code2console-2026",
    author: "Aritraa Chakraborty",
    authorPhoto: aritraaPhoto,
    title: "🥈 2nd Place at IEEE Code2Console 2026 !",
    caption:
      "On February 20th, 2026, Team Recurrex took on the IEEE EDS Code2Console Game Development Competition. Despite a tight schedule that kept some of our members away, the trio of Abir Banik, Mainak Saha, and Aritraa Chakraborty stepped up to represent. This was Recurrex's First Win In a Competition/Hackathon 🏆.\n\nThe result? Silence: Demon Realm. We challenged ourselves to build a high-stakes survival experience using nothing but Vanilla JavaScript and CSS3. No engines, no frameworks—just pure logic and math. In this realm, movement is your enemy. You have 90 seconds to survive the shadows, balancing your \"Chaos Bar\" while hunting for safe zones.\n\nHuge shoutout to the team for grinding through the time constraints to bring this \"Faux-3D\" nightmare to life!\n\n#TeamRecurrex #GameDev #IEEE #VanillaJS #IndieGames #WebDev",
    date: "2026-05-07T12:00:00",
    dateLabel: "May 7, 2026 • 12:00 PM",
    images: [code2console1, code2console2],
    galleryCaption: "IEEE Code2Console Win 2K26",
    projectLink: { label: "View project: Silence Game", to: "/projects/silence-game" },
  },
];

export type GalleryItem = { src: string; title: string; postId: string };

// Gallery shows one cover (first image) per post
export const GALLERY: GalleryItem[] = POSTS.map((p) => ({
  src: p.images[0],
  title: p.galleryCaption ?? p.title,
  postId: p.id,
}));
