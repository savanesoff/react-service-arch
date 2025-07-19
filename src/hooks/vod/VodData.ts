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
    thumbnailUrl: "https://example.com/thumbnails/great-adventure.jpg",
    duration: 120,
    publishedAt: "2023-01-15T00:00:00Z",
    genre: ["Adventure", "Action"],
    sourceUrl: "https://example.com/videos/great-adventure.mp4",
  },
  {
    id: "2",
    title: "Mystery of the Lost Artifact",
    description: "A thrilling mystery set in ancient ruins.",
    thumbnailUrl: "https://example.com/thumbnails/lost-artifact.jpg",
    duration: 90,
    publishedAt: "2023-02-20T00:00:00Z",
    genre: ["Mystery", "Thriller"],
    sourceUrl: "https://example.com/videos/lost-artifact.mp4",
  },
  {
    id: "3",
    title: "Romantic Getaway",
    description: "A heartwarming love story in a picturesque setting.",
    thumbnailUrl: "https://example.com/thumbnails/romantic-getaway.jpg",
    duration: 105,
    publishedAt: "2023-03-10T00:00:00Z",
    genre: ["Romance", "Drama"],
    sourceUrl: "https://example.com/videos/romantic-getaway.mp4",
  },
  {
    id: "4",
    title: "Space Explorers",
    description: "A sci-fi adventure with a team of astronauts.",
    thumbnailUrl: "https://example.com/thumbnails/space-explorers.jpg",
    duration: 130,
    publishedAt: "2023-04-05T00:00:00Z",
    genre: ["Science Fiction", "Adventure"],
    sourceUrl: "https://example.com/videos/space-explorers.mp4",
  },
  {
    id: "5",
    title: "Laugh Out Loud",
    description: "A hilarious comedy with unexpected twists.",
    thumbnailUrl: "https://example.com/thumbnails/laugh-out-loud.jpg",
    duration: 95,
    publishedAt: "2023-05-12T00:00:00Z",
    genre: ["Comedy"],
    sourceUrl: "https://example.com/videos/laugh-out-loud.mp4",
  },
  {
    id: "6",
    title: "The Detective's Dilemma",
    description: "A crime drama with suspense and intrigue.",
    thumbnailUrl: "https://example.com/thumbnails/detectives-dilemma.jpg",
    duration: 110,
    publishedAt: "2023-06-18T00:00:00Z",
    genre: ["Drama", "Crime", "Mystery"],
    sourceUrl: "https://example.com/videos/detectives-dilemma.mp4",
  },
  {
    id: "7",
    title: "Family Reunion",
    description: "A touching story about family and forgiveness.",
    thumbnailUrl: "https://example.com/thumbnails/family-reunion.jpg",
    duration: 100,
    publishedAt: "2023-07-22T00:00:00Z",
    genre: ["Drama", "Family"],
    sourceUrl: "https://example.com/videos/family-reunion.mp4",
  },
  {
    id: "8",
    title: "Underwater Wonders",
    description: "A documentary exploring ocean life.",
    thumbnailUrl: "https://example.com/thumbnails/underwater-wonders.jpg",
    duration: 80,
    publishedAt: "2023-08-30T00:00:00Z",
    genre: ["Documentary", "Nature"],
    sourceUrl: "https://example.com/videos/underwater-wonders.mp4",
  },
  {
    id: "9",
    title: "Haunted Manor",
    description: "A horror thriller set in a mysterious mansion.",
    thumbnailUrl: "https://example.com/thumbnails/haunted-manor.jpg",
    duration: 102,
    publishedAt: "2023-09-14T00:00:00Z",
    genre: ["Horror", "Thriller", "Mystery"],
    sourceUrl: "https://example.com/videos/haunted-manor.mp4",
  },
  {
    id: "10",
    title: "Epic Sports Showdown",
    description: "An action-packed sports competition.",
    thumbnailUrl: "https://example.com/thumbnails/epic-sports-showdown.jpg",
    duration: 115,
    publishedAt: "2023-10-01T00:00:00Z",
    genre: ["Sports", "Action"],
    sourceUrl: "https://example.com/videos/epic-sports-showdown.mp4",
  },
];
