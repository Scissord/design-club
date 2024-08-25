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
      column_id: 1,
      creator_id: 33
    },
    {
      id: 2,
      price: 20.52,
      client_id: 2,
      source_id: 1,
      column_id: 1,
      creator_id: 33
    },
    {
      id: 3,
      price: 6000,
      client_id: 3,
      source_id: 2,
      column_id: 2,
      creator_id: 33
    },
    {
      id: 4,
      price: Number(65,84),
      client_id: 2,
      source_id: 1,
      column_id: 2,
      creator_id: 33
    },
  ]);
};
