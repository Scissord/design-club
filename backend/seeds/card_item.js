/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('card_item').del()
  // Вставка данных
  await knex('card_item').insert([
    {
      id: 1,
      card_id: 1,
      product_id: 1,
    },
    {
      id: 2,
      card_id: 2,
      product_id: 2,
    },
    {
      id: 3,
      card_id: 3,
      product_id: 1,
    },
    {
      id: 4,
      card_id: 4,
      product_id: 2,
    },
  ]);
};
