import React, { useEffect, useState } from "react";
import "./Animals.css";
import AnimalsList from "./animalsList/AnimalsList";
import type { Animal, AnimalId } from "../types/Animal";

export type UpdateData = {
  name: string;
  description: string;
};


function Animals(): JSX.Element {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/animals");
        if (!res.ok) {
          throw new Error(`Failed to fetch animals: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching animal data:", error);
      }
    };

    fetchData();
  }, []);

  const onHandleRemove = async (value: AnimalId): Promise<void> => {
    try {
      const res = await fetch(`http://localhost:3000/api/animals/${value}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setAnimals((prevAnimals) => prevAnimals.filter((animal) => animal.id !== value));
      } else {
        throw new Error(`Failed to delete animal: ${res.status} ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error removing animal:", error);
    }
  };

// ... (ваш импорт и другой код)

const onHandleUpdate = async (value: AnimalId, updateData: UpdateData): Promise<void> => {
  try {
    const animalToUpdate = animals.find((animal) => animal.id === value);

    if (!animalToUpdate) {
      console.error("Animal not found for update");
      return;
    }

    const res = await fetch(`http://localhost:3000/api/animals/${value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (res.ok) {
      const updatedAnimal = await res.json(); // Используйте await здесь
      setAnimals((prevAnimals) =>
        prevAnimals.map((animal) =>
          animal.id === value ? { ...animal, ...updatedAnimal } : animal
        )
      );
    } else {
      throw new Error(`Failed to update animal: ${res.status} ${res.statusText}`);
    }
  } catch (error) {
    console.error("Error updating animal:", error);
  }
};


  return (
    <div className="animals-container">
      <AnimalsList
        animals={animals}
        onHandleUpdate={onHandleUpdate}
        onHandleRemove={onHandleRemove}
        setAnimals={setAnimals}
      />
    </div>
  );
}

export default Animals;
