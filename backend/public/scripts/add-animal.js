const animalAdd = document.querySelector("#add-animal");

if (animalAdd) {
  animalAdd.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const { name, image, type } = event.target;
      const res = await fetch("/api/animals", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          image: image.value,
          type: type.value,
        }),
      });
      const data = await res.json();
      if (data.message === "Success") {
        document
          .querySelector(".animals__list")
          .insertAdjacentHTML("afterbegin", data.html);
        event.target.reset();
      }
    } catch ({ message }) {
      res.json({ message });
    }
  });
}
