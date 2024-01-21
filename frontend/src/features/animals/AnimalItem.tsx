import React from "react";
import type { Animal, AnimalId } from "./types/Animal";

export default function AnimalItem({
  animal,
  onHandleRemove,
}: {
  animal: Animal;
  onHandleRemove: (value: AnimalId) => void;
}): JSX.Element {
  return (
    <div className="animal__item">
      <h2>{animal.name}</h2>
      <img src={animal.image} alt="animal" />
      <button onClick={() => onHandleRemove(animal.id)} type="button">
        Удалить
      </button>
    </div>
  );
}
