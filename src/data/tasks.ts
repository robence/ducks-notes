import { ICard, IIterable } from "../types";

const tasks: (ICard & IIterable)[] = [
  { id: 0, title: 'Study' },
  { id: 1, title: 'Read' },
  { id: 2, title: 'Work' },
  { id: 3, title: 'Research' },
  { id: 4, title: 'Youtube' },
  { id: 5, title: 'Spotify' },
  { id: 6, title: 'Exercise' },
]

export default tasks;