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
      id: 1,
      price: 5000,
      client_id: 1,
      source_id: 1,
      column_id: '27725dd5-60cd-4bd7-b419-2bec43e0c922',
    },
    {
      id: 2,
      price: 20.52,
      client_id: 2,
      source_id: 1,
      column_id: '27725dd5-60cd-4bd7-b419-2bec43e0c922',
    },
    {
      id: 3,
      price: 6000,
      client_id: 3,
      source_id: 2,
      column_id: '6030aa47-2ca3-471c-8f30-a823fa8f3720',
    },
    {
      id: 4,
      price: Number(65,84),
      client_id: 2,
      source_id: 1,
      column_id: '6030aa47-2ca3-471c-8f30-a823fa8f3720',
    },
  ]);
};
