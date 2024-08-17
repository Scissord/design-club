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
      cards_ids: ['9440f80a-90a5-411e-83d1-d4794ddbdd8b', '348ab5ce-6313-4065-a0c1-3f659cc5d76d'],
      position: 1,
    },
    {
      id: '6030aa47-2ca3-471c-8f30-a823fa8f3720',
      title: 'Заполнение брифа',
      cards_ids: ['b57c02ff-1af9-4b0c-837e-ff7a7bd279a9', '193f217d-6761-47d5-b684-120082d64281'],
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
