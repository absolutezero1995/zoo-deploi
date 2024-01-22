import React, { useState } from "react";
import type { Animal } from "../../types/Animal";


export type YourUserType = {
  id: number;
  username: string;
  admin: boolean;
};

export default function FormAddAnimal({
  user,
  setAnimals,
}: {
  user: YourUserType;
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
  animals: Animal[];
}): JSX.Element | null {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image, description }),
      });

      if (!res.ok) {
        throw new Error(`Failed to add animal: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      setAnimals((prevAnimals) => [...prevAnimals, data]);
      setName("");
      setImage("");
      setDescription("");
    } catch (error) {
      console.error("Error adding animal:", error);
    }
  };

  return user.admin ? (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Название животного"
        />
        <br />
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="text"
          placeholder="Изображение животного"
        />
        <br />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Описание животного"
        />
        <br />
        <button type="submit">Добавить</button>
      </form>
    </div>
  ) : null;
}
