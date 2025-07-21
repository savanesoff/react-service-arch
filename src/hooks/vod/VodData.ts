export type VodAsset = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: number; // in seconds
  publishedAt: string; // ISO date string
  genre?: string[]; // optional genre field
  sourceUrl?: string; // optional source URL for the video
};

export type VodData = { vod: VodAsset[] };
export const VodMockData: VodAsset[] = [
  {
    id: "1",
    title: "The Great Adventure",
    description: "An epic journey through the mountains.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857195/free-video-857195.jpg",
    duration: 120,
    publishedAt: "2023-01-15T00:00:00Z",
    genre: ["Adventure", "Action"],
    sourceUrl: "https://www.pexels.com/video/aerial-view-of-mountains-857195/",
  },
  {
    id: "2",
    title: "Mystery of the Lost Artifact",
    description: "A thrilling mystery set in ancient ruins.",
    thumbnailUrl:
      "https://cdn.pixabay.com/video/2022/10/11/136453-749527838_large.jpg",
    duration: 90,
    publishedAt: "2023-02-20T00:00:00Z",
    genre: ["Mystery", "Thriller"],
    sourceUrl: "https://pixabay.com/videos/id-136453/",
  },
  {
    id: "3",
    title: "Romantic Getaway",
    description: "A heartwarming love story in a picturesque setting.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857194/free-video-857194.jpg",
    duration: 105,
    publishedAt: "2023-03-10T00:00:00Z",
    genre: ["Romance", "Drama"],
    sourceUrl: "https://www.pexels.com/video/aerial-view-of-a-beach-857194/",
  },
  {
    id: "4",
    title: "Space Explorers",
    description: "A sci-fi adventure with a team of astronauts.",
    thumbnailUrl:
      "https://cdn.pixabay.com/video/2023/01/10/148217-797214232_large.jpg",
    duration: 130,
    publishedAt: "2023-04-05T00:00:00Z",
    genre: ["Science Fiction", "Adventure"],
    sourceUrl: "https://pixabay.com/videos/id-148217/",
  },
  {
    id: "5",
    title: "Laugh Out Loud",
    description: "A hilarious comedy with unexpected twists.",
    thumbnailUrl:
      "https://images.pexels.com/videos/856993/free-video-856993.jpg",
    duration: 95,
    publishedAt: "2023-05-12T00:00:00Z",
    genre: ["Comedy"],
    sourceUrl: "https://www.pexels.com/video/people-laughing-856993/",
  },
  {
    id: "6",
    title: "The Detective's Dilemma",
    description: "A crime drama with suspense and intrigue.",
    thumbnailUrl:
      "https://cdn.pixabay.com/video/2022/10/11/136453-749527838_large.jpg",
    duration: 110,
    publishedAt: "2023-06-18T00:00:00Z",
    genre: ["Drama", "Crime", "Mystery"],
    sourceUrl: "https://pixabay.com/videos/id-136453/",
  },
  {
    id: "7",
    title: "Family Reunion",
    description: "A touching story about family and forgiveness.",
    thumbnailUrl:
      "https://images.pexels.com/videos/856993/free-video-856993.jpg",
    duration: 100,
    publishedAt: "2023-07-22T00:00:00Z",
    genre: ["Drama", "Family"],
    sourceUrl: "https://www.pexels.com/video/people-laughing-856993/",
  },
  {
    id: "9",
    title: "Haunted Manor",
    description: "A horror thriller set in a mysterious mansion.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857195/free-video-857195.jpg",
    duration: 102,
    publishedAt: "2023-09-14T00:00:00Z",
    genre: ["Horror", "Thriller", "Mystery"],
    sourceUrl: "https://www.pexels.com/video/aerial-view-of-mountains-857195/",
  },
  {
    id: "10",
    title: "Epic Sports Showdown",
    description: "An action-packed sports competition.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857194/free-video-857194.jpg",
    duration: 115,
    publishedAt: "2023-10-01T00:00:00Z",
    genre: ["Sports", "Action"],
    sourceUrl: "https://www.pexels.com/video/aerial-view-of-a-beach-857194/",
  },
  // --- 20 more entries below ---
  {
    id: "11",
    title: "Underwater Wonders",
    description: "Explore the mysteries of the deep blue sea.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857196/free-video-857196.jpg",
    duration: 98,
    publishedAt: "2023-11-05T00:00:00Z",
    genre: ["Documentary", "Nature"],
    sourceUrl: "https://www.pexels.com/video/underwater-footage-857196/",
  },
  {
    id: "12",
    title: "City Lights",
    description: "A drama set in the bustling city nightlife.",
    thumbnailUrl:
      "https://images.pexels.com/videos/854652/free-video-854652.jpg",
    duration: 112,
    publishedAt: "2023-12-12T00:00:00Z",
    genre: ["Drama"],
    sourceUrl: "https://www.pexels.com/video/city-lights-at-night-854652/",
  },
  {
    id: "13",
    title: "Wildlife Safari",
    description: "A breathtaking journey through the savannah.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857197/free-video-857197.jpg",
    duration: 125,
    publishedAt: "2024-01-08T00:00:00Z",
    genre: ["Documentary", "Adventure"],
    sourceUrl: "https://www.pexels.com/video/wildlife-safari-857197/",
  },
  {
    id: "14",
    title: "Cooking with Passion",
    description: "A culinary show featuring world-class chefs.",
    thumbnailUrl:
      "https://images.pexels.com/videos/3184193/free-video-3184193.jpg",
    duration: 60,
    publishedAt: "2024-02-14T00:00:00Z",
    genre: ["Reality", "Cooking"],
    sourceUrl: "https://www.pexels.com/video/cooking-show-3184193/",
  },
  {
    id: "15",
    title: "The Last Stand",
    description: "A war drama about courage and sacrifice.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857198/free-video-857198.jpg",
    duration: 140,
    publishedAt: "2024-03-20T00:00:00Z",
    genre: ["Drama", "War"],
    sourceUrl: "https://www.pexels.com/video/war-drama-857198/",
  },
  {
    id: "16",
    title: "Tech Revolution",
    description: "A documentary on the rise of technology.",
    thumbnailUrl:
      "https://images.pexels.com/videos/856998/free-video-856998.jpg",
    duration: 80,
    publishedAt: "2024-04-18T00:00:00Z",
    genre: ["Documentary", "Technology"],
    sourceUrl: "https://www.pexels.com/video/technology-documentary-856998/",
  },
  {
    id: "17",
    title: "Desert Mirage",
    description: "A survival story set in the harsh desert.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857199/free-video-857199.jpg",
    duration: 110,
    publishedAt: "2024-05-22T00:00:00Z",
    genre: ["Adventure", "Drama"],
    sourceUrl: "https://www.pexels.com/video/desert-mirage-857199/",
  },
  {
    id: "18",
    title: "The Magician's Secret",
    description: "A fantasy tale of magic and mystery.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857200/free-video-857200.jpg",
    duration: 102,
    publishedAt: "2024-06-10T00:00:00Z",
    genre: ["Fantasy", "Mystery"],
    sourceUrl: "https://www.pexels.com/video/magic-show-857200/",
  },
  {
    id: "19",
    title: "Race to the Finish",
    description: "A high-speed racing competition.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857201/free-video-857201.jpg",
    duration: 95,
    publishedAt: "2024-07-15T00:00:00Z",
    genre: ["Sports", "Action"],
    sourceUrl: "https://www.pexels.com/video/car-race-857201/",
  },
  {
    id: "20",
    title: "Lost in the Woods",
    description: "A suspenseful survival thriller.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857202/free-video-857202.jpg",
    duration: 108,
    publishedAt: "2024-08-19T00:00:00Z",
    genre: ["Thriller", "Adventure"],
    sourceUrl: "https://www.pexels.com/video/forest-thriller-857202/",
  },
  {
    id: "21",
    title: "The Art of Dance",
    description: "A documentary about dance from around the world.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857203/free-video-857203.jpg",
    duration: 75,
    publishedAt: "2024-09-23T00:00:00Z",
    genre: ["Documentary", "Art"],
    sourceUrl: "https://www.pexels.com/video/dance-documentary-857203/",
  },
  {
    id: "22",
    title: "Comedy Night Live",
    description: "Stand-up comedians deliver non-stop laughs.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857204/free-video-857204.jpg",
    duration: 90,
    publishedAt: "2024-10-27T00:00:00Z",
    genre: ["Comedy"],
    sourceUrl: "https://www.pexels.com/video/comedy-night-857204/",
  },
  {
    id: "23",
    title: "Into the Volcano",
    description: "A daring expedition into an active volcano.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857205/free-video-857205.jpg",
    duration: 120,
    publishedAt: "2024-11-30T00:00:00Z",
    genre: ["Documentary", "Adventure"],
    sourceUrl: "https://www.pexels.com/video/volcano-expedition-857205/",
  },
  {
    id: "24",
    title: "Winter Wonderland",
    description: "A family film set in a snowy village.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857206/free-video-857206.jpg",
    duration: 85,
    publishedAt: "2025-01-03T00:00:00Z",
    genre: ["Family", "Drama"],
    sourceUrl: "https://www.pexels.com/video/winter-wonderland-857206/",
  },
  {
    id: "25",
    title: "The Hacker",
    description: "A cyber-thriller about a notorious hacker.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857207/free-video-857207.jpg",
    duration: 105,
    publishedAt: "2025-02-07T00:00:00Z",
    genre: ["Thriller", "Technology"],
    sourceUrl: "https://www.pexels.com/video/hacker-thriller-857207/",
  },
  {
    id: "26",
    title: "Jungle Quest",
    description: "An adventure deep in the Amazon rainforest.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857208/free-video-857208.jpg",
    duration: 115,
    publishedAt: "2025-03-11T00:00:00Z",
    genre: ["Adventure", "Nature"],
    sourceUrl: "https://www.pexels.com/video/jungle-quest-857208/",
  },
  {
    id: "27",
    title: "The Painter",
    description: "A biopic about a famous artist's life.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857209/free-video-857209.jpg",
    duration: 100,
    publishedAt: "2025-04-15T00:00:00Z",
    genre: ["Drama", "Art"],
    sourceUrl: "https://www.pexels.com/video/painter-biopic-857209/",
  },
  {
    id: "28",
    title: "Alien Encounter",
    description: "A sci-fi thriller about first contact.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857210/free-video-857210.jpg",
    duration: 128,
    publishedAt: "2025-05-19T00:00:00Z",
    genre: ["Science Fiction", "Thriller"],
    sourceUrl: "https://www.pexels.com/video/alien-encounter-857210/",
  },
  {
    id: "29",
    title: "The Chef's Table",
    description: "A reality show featuring top chefs.",
    thumbnailUrl:
      "https://images.pexels.com/videos/3184194/free-video-3184194.jpg",
    duration: 70,
    publishedAt: "2025-06-23T00:00:00Z",
    genre: ["Reality", "Cooking"],
    sourceUrl: "https://www.pexels.com/video/chefs-table-3184194/",
  },
  {
    id: "30",
    title: "Mountain High",
    description: "A documentary about mountain climbers.",
    thumbnailUrl:
      "https://images.pexels.com/videos/857211/free-video-857211.jpg",
    duration: 110,
    publishedAt: "2025-07-27T00:00:00Z",
    genre: ["Documentary", "Adventure"],
    sourceUrl: "https://www.pexels.com/video/mountain-high-857211/",
  },
];
