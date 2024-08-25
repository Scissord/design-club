/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('column').del()
  await knex('column').insert([
    {
      id: 1,
      title: 'Новая',
      cards_ids: ["1", "2"],
      position: 1,
    },
    {
      id: 2,
      title: 'Заполнение брифа',
      cards_ids: ["3", "4"],
      position: 2,
    },
    {
      id: 3,
      // title: 'Подготовка счета на оплату',
      title: 'Подготовка со',
      cards_ids: [''],
      position: 3,
    },
    {
      id: 4,
      title: 'В работе',
      cards_ids: [''],
      position: 4,
    },
    {
      id: 5,
      title: 'Ожидание оплаты',
      cards_ids: [''],
      position: 5,
    },
  ]);
};
