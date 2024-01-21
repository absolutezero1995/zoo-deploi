const updateAnimal = document.querySelector("#update-animal");

if (updateAnimal) {
  updateAnimal.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, image, type } = event.target;
    const { id } = event.target.dataset;
    const res = await fetch(`/api/animals/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        type: type.value,
      }),
    });
    const data = await res.json();
    if (data.length > 0) {
      window.location.assign("/animals");
    }
  });
}
