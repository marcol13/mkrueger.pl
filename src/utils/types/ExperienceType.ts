export type ExperienceItemType = {
  name: string;
  location: string;
  position: string;
  dates: string;
  description?: string;
};

export type ExperienceType = {
  name: string;
  items: ExperienceItemType[];
};
