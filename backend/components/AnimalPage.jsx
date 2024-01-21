const React = require("react");
const Layout = require("./Layout");
const FormAddAnimal = require("./FormAddAnimal");
const AnimalItem = require("./AnimalItem");

module.exports = function AnimalPage({ title, user, animals = [] }) {
  return (
    <Layout title={title} user={user}>
      <h1>Show your pet</h1>
      <FormAddAnimal />
      <div className="animals__list">
        {animals.map((animal) => (
          <AnimalItem key={animal.id} animal={animal} user={user} />
        ))}
      </div>
    </Layout>
  );
};
