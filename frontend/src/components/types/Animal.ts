export type Animal = {
  id: number;
  image: string;
  name: string;
  description: string;
};

export type AnimalId = Animal["id"];
