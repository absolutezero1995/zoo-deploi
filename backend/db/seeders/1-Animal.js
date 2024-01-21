"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Animals",
      [
        {
          name: "Aardvark",
          image:
            "https://www.chesterzoo.org/app/uploads/2019/04/2016-Aardvark-2-in-the-zoo-square-500x500.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2016-Ardvark-in-the-zoo-square.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2016-Ardvark-1-in-the-zoo-square.jpg",
          description:
            "Вид млекопитающих, единственный современный представитель отряда трубкозубых",
        },
        {
          name: "Andean Bear",
          image:
            "https://www.chesterzoo.org/app/uploads/2019/04/2019-Andean-bear-at-the-zoo-square-500x500.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2019-Andean-bear-4-at-the-zoo-square.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2019-Andean-bear-3-at-the-zoo-square.jpg",
          description: "Самый растительноядный медведь во всем семействе",
        },
        {
          name: "Black lemur",
          image:
            "https://www.chesterzoo.org/app/uploads/2019/04/black-lemur-madagascar-at-the-zoo-2019-square-500x500.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2019-Black-lemur-4-in-the-zoo-square.jpg,https://www.chesterzoo.org/app/uploads/2019/04/Black-lemur-in-the-zoo-square.jpg",
          description:
            "Питается преимущественно спелыми плодами, а также цветками, листьями и грибами",
        },
        {
          name: "Caribian flamingos",
          image:
            "https://www.chesterzoo.org/app/uploads/2019/04/2017-Caribbean-flamingo-2-in-the-zoo-square-500x500.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2015-Caribbean-flamingo-in-the-zoo-square.jpg,https://www.marylandzoo.org/wp-content/uploads/2017/10/flamingo-1024x683.jpg",
          description:
            "Является самым крупным и ярким представителем семейства",
        },
        {
          name: "Cheetah",
          image:
            "https://www.chesterzoo.org/app/uploads/2019/04/2016-Cheetah-4-at-the-zoo-square-500x500.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2014-Cheetah-3-at-the-zoo-square.jpg,https://www.chesterzoo.org/app/uploads/2019/04/2014-Cheetah-2-at-the-zoo-square.jpg",
          description:
            "Быстрейшее из всех наземных млекопитающих: за 3 секунды может развивать скорость до 110 км/ч",
        },
        {
          name: "Congo buffalo",
          image:
            "https://www.chesterzoo.org/app/uploads/2019/04/Congo-buffalo-in-the-zoo-square-500x500.jpg,https://www.chesterzoo.org/app/uploads/2019/04/Congo-buffalo-calf-in-the-zoo-square.jpg,https://www.chesterzoo.org/app/uploads/2019/04/Congo-buffalo-in-the-zoo-square-2.jpg",
          description:
            "Самый маленький из всех подвидов африканского буйвола. Рога направлены вверх и назад",
        },
        {
          name: "Cotton-top tamarin",
          image:
            "https://www.chesterzoo.org/app/uploads/2022/04/Cotton-top-tamarin-sqaure-5.jpg,https://www.chesterzoo.org/app/uploads/2022/04/Cotton-top-tamarin-square-6-500x500.jpg,https://www.zoonewengland.org/media/51699/cottontoptamarin1.jpg",
          description:
            "Эдипов тамарин ведёт дневной, древесный образ жизни. В кроне деревьев животные либо ползают, либо прыгают",
        },
        {
          name: "Витя",
          image:
            "https://cs9.pikabu.ru/post_img/2020/08/23/3/1598152155129195003.jpg,https://bigpicture.ru/wp-content/uploads/2019/01/promo-kostyum-dlya-akcii_trumpmast.ru_.jpg,https://gazetasochi.ru/sites/default/files/c7c39392e15df197b1c7fc5304c4560f.jpg",
          description:
            "На подстраховке, работает за еду и бесконечное уважение от руководства",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Animals", null, {});
  },
};
