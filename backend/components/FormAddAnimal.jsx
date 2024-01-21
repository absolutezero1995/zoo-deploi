const React = require("react");

function FormAddAnimal() {
  return (
    <form id="add-animal" action="/api/animals" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Кличка животного:
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Вставьте изображение:
        </label>
        <input
          name="image"
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Вид животного:
        </label>
        <input
          name="type"
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Добавить
      </button>
    </form>
  );
}

module.exports = FormAddAnimal;
