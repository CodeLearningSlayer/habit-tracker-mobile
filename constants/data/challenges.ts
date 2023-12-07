import firstChallenge from "@/assets/images/challenges/1.png";
import secondChallenge from "@/assets/images/challenges/2.png";
import thirdChallenge from "@/assets/images/challenges/3.png";
import fourthChallenge from "@/assets/images/challenges/4.png";
import fifthChallenge from "@/assets/images/challenges/5.png";
import sixthChallenge from "@/assets/images/challenges/6.png";

export interface IChallenge {
  name: string;
  img: string;
  sub: string;
}

export const challenges: IChallenge[] = [
  {
    name: "First challenge",
    sub: "Just click it",
    img: firstChallenge,
  },
  {
    name: "Push up challenge",
    sub: "Take 5 in a row",
    img: secondChallenge,
  },
  {
    name: "Keep calm",
    sub: "Meditate 10 minutes straight 5 times",
    img: thirdChallenge,
  },
  {
    name: "God is watching you",
    sub: "Pray everyday for 10 days",
    img: fourthChallenge,
  },
  {
    name: "Stay focused",
    sub: "Complete your first to-do list",
    img: fifthChallenge,
  },
  {
    name: "Money time",
    sub: "Develop business in one week",
    img: sixthChallenge,
  },
];
