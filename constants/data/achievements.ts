//@ts-ignore
import firstChallenge from "@/assets/images/achievements/1.png";
//@ts-ignore
import secondChallenge from "@/assets/images/achievements/2.png";
//@ts-ignore
import thirdChallenge from "@/assets/images/achievements/3.png";
//@ts-ignore
import fourthChallenge from "@/assets/images/achievements/4.png";
//@ts-ignore
import fifthChallenge from "@/assets/images/achievements/5.png";
//@ts-ignore
import sixthChallenge from "@/assets/images/achievements/6.png";

export interface IAchievement {
  name: string;
  img: string;
  sub: string;
}

export const achievements: IAchievement[] = [
  {
    name: "First step to bright future",
    sub: "Complete 10 habits",
    img: firstChallenge,
  },
  {
    name: "Most productive user",
    sub: "Take the largest streak",
    img: secondChallenge,
  },
  {
    name: "Mission impossible",
    sub: "Wake up early 10 times",
    img: thirdChallenge,
  },
  {
    name: "See the horizon",
    sub: "Get the 100 streak in a row",
    img: fourthChallenge,
  },
  {
    name: "Go hard",
    sub: "Finish your first challenge",
    img: fifthChallenge,
  },
  {
    name: "Conqueror",
    sub: "Get first attention",
    img: sixthChallenge,
  },
];
