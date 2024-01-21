/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "./AnimalItem.css";
import type { Animal, AnimalId } from "../../types/Animal";
import { YourUserType } from "../animalAdd/FormAddAnimal";

export default function AnimalItem({
  user,
  itemKey,
  animal,
  onHandleRemove,
  onHandleUpdate,
  setAnimals,
}: {
  itemKey: any,
  user: YourUserType
  animal: Animal;
  onHandleUpdate: (id: AnimalId, data: { name: string; description: string }) => void;
  onHandleRemove: (id: AnimalId) => void;
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
}): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: animal.name,
    images: animal.image.split(","),
    description: animal.description,
  });

  const [images] = useState(updateData.images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const backgroundStyle = {
    backgroundImage: `url('${images[currentIndex]}')`,
  };

  const handleUpdateClick = (): void => {
    setIsEditing(true);
  };

  const handleCancelClick = (): void => {
    setIsEditing(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (): Promise<void> => {
    try {
      const updatedData = { ...updateData };
      await onHandleUpdate(animal.id, updatedData);

      setAnimals((prevAnimals) =>
        prevAnimals.map((prevAnimal) =>
          prevAnimal.id === animal.id ? { ...prevAnimal, ...updatedData } : prevAnimal,
        ),
      );

      setIsEditing(false);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <div className="animal-card-flex">
      <div className="animal-card-wrapper">
        <button id="previous" type="button" onClick={prevSlide}>
          ❬
        </button>
        <div key={itemKey} className="animal-card-container" style={backgroundStyle}>
          {user.admin ? (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {isEditing ? (
                <div>
                  <label>
                    <input
                      type="text"
                      name="name"
                      value={updateData.name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <br />
                  <label>
                    <textarea
                      name="description"
                      value={updateData.description}
                      onChange={handleInputChange}
                    />
                  </label>
                  <br />
                  <div className="btn-wrapper">
                    <button onClick={handleUpdate} type="button">
                      Обновить
                    </button>
                    <button onClick={handleCancelClick} type="button">
                      Отмена
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="animal-name">
                    <span className="animal-card-text-h2">{animal.name}</span>
                  </div>
                  <div className="btn-wrapper">
                    <button onClick={handleUpdateClick} type="button">
                      Редактировать
                    </button>
                    <button onClick={() => onHandleRemove(animal.id)} type="button">
                      Удалить
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="animal-name">
              <span className="animal-card-text-h2">{animal.name}</span>
            </div>
          )}
        </div>
        <button id="next" type="button" onClick={nextSlide}>
          ❭
        </button>
      </div>
      <p>{animal.description}</p>
    </div>
  );
}
