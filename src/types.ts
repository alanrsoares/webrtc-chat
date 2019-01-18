export interface Message {
  id: string;
  text: string;
  senderId: string;
  createdAt: Date;
}

export const enum BalloonDirections {
  left = "left",
  right = "right"
}

export type BalloonDirection = keyof typeof BalloonDirections;

export interface User {
  id: string;
  name: string;
  avatar: "octocat" | "bcrikko";
}

export enum Screen {
  LANDING,
  JOIN_CHAT,
  CREATE_CHAT
}
