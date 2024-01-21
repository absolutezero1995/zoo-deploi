const React = require("react");

module.exports = function Navbar({ user }) {
  console.log({ user });
  return (
    <nav
      className="navbar bg-body-tertiary"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <div>
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            <a className="link" href="/">
              Главная
            </a>
          </button>
        </form>
      </div>

      <div>
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            <a className="link" href="/animals">
              Лента
            </a>
          </button>
        </form>
      </div>

      {user ? (
        <>
          <div>
            <form className="container-fluid justify-content-start">
              <button className="btn btn-outline-success me-2" type="button">
                <span>{`Привет, ${user.login}!`}</span>
              </button>
            </form>
          </div>

          <div>
            <form className="container-fluid justify-content-start">
              <button className="btn btn-outline-success me-2" type="button">
                <a className="link" href="/api/logout">
                  Выход
                </a>
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div>
            <form className="container-fluid justify-content-start">
              <button className="btn btn-outline-success me-2" type="button">
                <a className="link" href="/signup">
                  Регистрация
                </a>
              </button>
            </form>
          </div>

          <div>
            <form className="container-fluid justify-content-start">
              <button className="btn btn-outline-success me-2" type="button">
                <a className="link" href="/login">
                  Вход
                </a>
              </button>
            </form>
          </div>
        </>
      )}
    </nav>
  );
};
