import spacedRepetition from "./index.mjs";

let quality; // A number between 0 and 5 that indicate the quality of review. 0 is the worse while 5 is the best.
let lastSchedule; // The duration of last review space.
let lastFactor; // The factor that was used to caculate last schedule.
let repetition; // The total number of past repetition of the card, gets reset to 0 if quality under 3
let result = spacedRepetition(quality, lastSchedule, lastFactor, repetition);

console.log(result);
