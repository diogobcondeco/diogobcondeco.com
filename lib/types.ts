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

export type Experience = {
  readonly title?: string;
  readonly location?: string;
  readonly project?: string;
  readonly description?: string;
  readonly icon?: JSX.Element;
  readonly date?: string;
  readonly type?: string;
};
