export type Genre =
  | "comedy"
  | "drama"
  | "action"
  | "horror"
  | "sci-fi"
  | "fantasy"
  | "romance"
  | "thriller"
  | "documentary"
  | "animation"
  | "mystery"
  | "adventure"
  // loose autocompletion for any string that matches the pattern
  | (string & {});
