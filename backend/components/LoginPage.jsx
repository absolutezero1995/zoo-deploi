const React = require("react");
const Layout = require("./Layout");

module.exports = function LoginPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <form name="login-form">
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
        <input type="submit" value="Войти" />
      </form>
    </Layout>
  );
};
