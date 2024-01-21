const React = require("react");
const Layout = require("./Layout");

module.exports = function SignupPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <form name="signup-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Логин:</label>
          <input
            type="text"
            className="form-control"
            id="login"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Адрес электронной почты:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Пароль:</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <input type="submit" value="Отправить" />
      </form>

      {/* <form name="signup-form">
        <h1>Signup</h1>

        <label>
          Login:
          <input type="text" name="login" />
        </label>

        <br />

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <br />

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <br />

        <input type="submit" value="Signup" />
      </form> */}
    </Layout>
  );
};
