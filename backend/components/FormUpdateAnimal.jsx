const React = require("react");
const Layout = require("./Layout");

module.exports = function FormUpdateAnimal({ title, user, animal }) {
  return (
    <Layout title={title} user={user}>
      <form
        data-id={animal.id}
        id="update-animal"
        action="/api/animals"
        method="PUT"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          Кличка животного:
          </label>
          <input
            value={animal.name}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
          Измените изображение:
          </label>
          <input
            value={animal.image}
            name="image"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Укажите тип:
          </label>
          <input
            value={animal.type_id}
            name="type"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Обновить
        </button>
      </form>
    </Layout>
  );
};
