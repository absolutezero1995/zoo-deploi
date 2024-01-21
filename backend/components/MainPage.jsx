const React = require("react");
const Layout = require("./Layout");

module.exports = function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div style={{ textAlign: "center" }}>
        <h1>Добро пожаловать в социальную сеть «Show your pet»</h1>
        <p>
          Здесь вы можете делиться фотографиями и историями о своих питомцах.
        </p>

        <div style={{ margin: "20px" }}>
          <img
            src="/Hello.webp"
            alt="Приветствие от котика"
            style={{ maxWidth: "55%" }}
          />
        </div>

        <p>
          Присоединяйтесь к сообществу, где можно увидеть милых пушистиков,
          пернатых друзей и много других веселых историй!
        </p>
      </div>
    </Layout>
  );
};
