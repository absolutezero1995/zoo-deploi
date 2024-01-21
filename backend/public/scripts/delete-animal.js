const deleteAnimal = document.querySelector(".animals__list");

if (deleteAnimal) {
  deleteAnimal.addEventListener("click", async (event) => {
    if (event.target.classList.contains("btn-delete")) {
      const card = event.target.closest(".card");
      const { id } = card.dataset;
      const res = await fetch(`/api/animals/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.message === "Success") {
        card.remove();
      }
    }
    if (event.target.classList.contains("like")) {
      const card = event.target.closest(".card");
      const { id } = card.dataset;
      const res = await fetch(`/api/likes/${id}`, {
        method: "PUT",
      });
      const data = await res.json();
      console.log(data);
      if ((data.message = "Like")) {
        event.target.setAttribute("src", "like_full.png");
      } else {
        event.target.setAttribute("src", "like_empty.png");
      }
    }
  });
}
