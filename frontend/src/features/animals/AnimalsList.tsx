import React from "react";
import type { Animal, AnimalId } from "./types/Animal";
import AnimalItem from "./AnimalItem";
import "./styles/Animal.css";

export default function AnimalsList({
  animals,
  onHandleRemove,
}: {
  animals: Animal[];
  onHandleRemove: (value: AnimalId) => void;
}): JSX.Element {
  return (
    <div>
      {animals.map((animal) => (
        <AnimalItem onHandleRemove={onHandleRemove} key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
