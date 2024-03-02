import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Link = {
  name: string;
  hash: string;
};

export type Skill = {
  name: string;
  icon: string;
};