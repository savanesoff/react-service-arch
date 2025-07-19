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
    id: "8",
    title: "Underwater Wonders",
    description: "A documentary exploring ocean life.",
    thumbnailUrl:
      "https://cdn.pixabay.com/video/2022/10/11/136453-749527838_large.jpg",
    duration: 80,
    publishedAt: "2023-08-30T00:00:00Z",
    genre: ["Documentary", "Nature"],
    sourceUrl: "https://pixabay.com/videos/id-136453/",
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
];
