/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('card').del()
  // Вставка данных
  await knex('card').insert([
    {
      id: '9440f80a-90a5-411e-83d1-d4794ddbdd8b',
      price: 5000,
      client_id: 1,
      source_id: 1,
      column_id: '27725dd5-60cd-4bd7-b419-2bec43e0c922',
    },
    {
      id: '348ab5ce-6313-4065-a0c1-3f659cc5d76d',
      price: 20.52,
      client_id: 2,
      source_id: 1,
      column_id: '27725dd5-60cd-4bd7-b419-2bec43e0c922',
    },
    {
      id: 'b57c02ff-1af9-4b0c-837e-ff7a7bd279a9',
      price: 6000,
      client_id: 3,
      source_id: 2,
      column_id: '6030aa47-2ca3-471c-8f30-a823fa8f3720',
    },
    {
      id: '193f217d-6761-47d5-b684-120082d64281',
      price: Number(65,84),
      client_id: 2,
      source_id: 1,
      column_id: '6030aa47-2ca3-471c-8f30-a823fa8f3720',
    },
  ]);
};
