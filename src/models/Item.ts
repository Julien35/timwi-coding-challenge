import { CommonObject } from "@/models/CommonObject";

export interface Item extends CommonObject {
  title: string;
  artist: string;
  image: string;
  date: Date;
  length: number;
}
