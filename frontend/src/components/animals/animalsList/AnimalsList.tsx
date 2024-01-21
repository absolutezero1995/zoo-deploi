import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import AnimalItem from "../animalsItem/AnimalItem";
import "./AnimalsList.css";
import type { Animal, AnimalId } from "../../types/Animal";
import type { YourUserType } from "../animalAdd/FormAddAnimal";
import FormAddAnimal from "../animalAdd/FormAddAnimal";
import { UpdateData } from "../Animals";

type AnimalsListProps = {
  animals: Animal[];
  onHandleUpdate: (value: number, updateData: UpdateData) => Promise<void>
  onHandleRemove: (value: AnimalId) => void;
  setAnimals: Dispatch<SetStateAction<Animal[]>>;
};

function AnimalsList({
  animals,
  onHandleUpdate,
  onHandleRemove,
  setAnimals,
}: AnimalsListProps): JSX.Element {

  const [user, setUser] = useState<YourUserType>(null!);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/check", { credentials: "include" });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей, чтобы использовать useEffect только при монтировании компонента

  return (
    <div className="animals-list-container">
      <FormAddAnimal animals={animals} user={user} setAnimals={setAnimals} />
      {animals.length > 0 &&
        animals.map((animal) => (
          <AnimalItem
            user={user}
            itemKey={animal.id}
            onHandleUpdate={onHandleUpdate}
            onHandleRemove={onHandleRemove}
            setAnimals={setAnimals}
            animal={animal}
          />
        ))}
    </div>
  );
}

export default AnimalsList;
