import type { Genre } from "../../types/Genres";
import type { ProfileData } from "./AccountContext";

const generateAvatarUrl = ({ gender }: { gender: string }): string => {
  const randomId = Math.floor(Math.random() * 100);
  return `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;
};

export const generateProfile = ({ id }: { id: string }): ProfileData => {
  const gender = Math.random() > 0.5 ? "men" : "women";
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

  const preferences: Genre[] = [
    "comedy",
    "drama",
    "action",
    "horror",
    "sci-fi",
    "fantasy",
    "documentary",
    "romance",
    "thriller",
    "animation",
    "mystery",
    "adventure",
    "crime",
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * 3) + 1); // random preferences

  const avatarUrl = generateAvatarUrl({ gender });
  console.log(`Generated avatar URL: ${avatarUrl}`);
  return {
    id,
    name: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * 50) + 18, // random age between 18 and 67
    gender,
    preferences, // random preferences
    avatarUrl, // random avatar URL
    primary: false,
  };
};
