import { GenreType } from "src/app/shared/enums/GenreType";
import { Movie } from "src/app/shared/interfaces/Movie.model";


export const movieListTestData: Movie[] = [
  {
    id: 1,
    key: "deadpool",
    name: "Deadpool",
    description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
    genres: [
      GenreType.action,
      GenreType.adventure,
      GenreType.comedy
    ],
    rate: "8.6",
    length: "1hr 48mins",
    img: "deadpool.jpg"
  },
  {
    id: 2,
    key: "we-are-the-millers",
    name: "We're the Millers",
    description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    genres: [
      GenreType.adventure,
      GenreType.comedy,
      GenreType.crime
    ],
    rate: "7.0",
    length: "1hr 50mins",
    img: "we-are-the-millers.jpg"
  },
  {
    id: 3,
    key: "straight-outta-compton",
    name: "Straight Outta Compton",
    description: "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
    genres: [
      GenreType.biography,
      GenreType.drama,
      GenreType.history
    ],
    rate: "8.0",
    length: "2hr 27mins",
    img: "straight-outta-compton.jpg"
  }
];

export const movieTestData = {
  id: 1,
  key: "deadpool",
  name: "Deadpool",
  description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
  genres: [
    GenreType.action,
    GenreType.adventure,
    GenreType.comedy
  ],
  rate: "8.6",
  length: "1hr 48mins",
  img: "deadpool.jpg"
}
