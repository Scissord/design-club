/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('column').del()
  await knex('column').insert([
    {
      id: '27725dd5-60cd-4bd7-b419-2bec43e0c922',
      title: 'Новая',
      cards_ids: ["1", "2"],
      position: 1,
    },
    {
      id: '6030aa47-2ca3-471c-8f30-a823fa8f3720',
      title: 'Заполнение брифа',
      cards_ids: ["3", "4"],
      position: 2,
    },
    {
      id: 'ad133072-4936-449c-9cf2-8e811c496e43',
      // title: 'Подготовка счета на оплату',
      title: 'Подготовка со',
      cards_ids: [''],
      position: 3,
    },
    {
      id: '3bc40a59-a534-4a23-80e7-2c0cfa077dfb',
      title: 'В работе',
      cards_ids: [''],
      position: 4,
    },
    {
      id: 'cedb0901-871c-4440-a3d2-0ec4e1fe5f1d',
      title: 'Ожидание оплаты',
      cards_ids: [''],
      position: 5,
    },
  ]);
};
