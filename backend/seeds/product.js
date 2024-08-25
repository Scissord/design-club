/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {
      id: 1,
      name: "Визитка",
      price: 200
    },
    {
      id: 2,
      name: "Каталог",
      price: 600
    },
  ]);
};
