const React = require("react");

function AnimalItem({ animal, user = {} }) {
  const likes = animal.Likes;
  const result =
    likes && likes.find((like) => like.dataValues.user_id === user.id);
  // console.log(user.id);
  return (
    <div
      data-id={animal.id}
      className="card"
      children="animal-card"
      style={{ width: "18rem" }}
    >
      <img
        src={animal.image}
        className="card-img-top"
        alt="animal_img"
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>
        {/* <p className="card-text">Описание картинки</p> */}
        <a href={`/animals/${animal.id}`} className="btn btn-primary">
          Комментировать
        </a>

        {user.id === animal.user_id && (
          <>
            <a
              href={`/animals/${animal.id}`}
              className="btn btn-warning btn-update"
            >
              Редактировать
            </a>

            <button
              type="button"
              href={`/animals/${animal.id}`}
              className="btn btn-danger btn-delete"
            >
              Удалить
            </button>
          </>
        )}

        <div className="like__container">
          <img
            className="like"
            src={!result ? "like_empty.png" : "like_full.png"}
            alt="like"
          />
        </div>
      </div>
    </div>
  );
}

module.exports = AnimalItem;
