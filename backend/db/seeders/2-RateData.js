'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const ratesData = [
      {
        name: 'Adult weekday',
        price: 450,
      },
      {
        name: 'Children weekday',
        price: 300,
      },
      {
        name: 'Adult weekend',
        price: 650,
      },
      {
        name: 'Children weekend',
        price: 500,
      },
    ];
    const rates = ratesData.map((rate) => ({
      ...rate,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Rates', rates);
  },

  async down(queryInterface, Sequelize) {},
};