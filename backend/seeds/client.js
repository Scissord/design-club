/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('client').del()
  await knex('client').insert([
    {
      id: 1,
      name: 'ИП Ульянов'
    },
    {
      id: 2,
      name: "BI GROUP",
    },
    {
      id: 3,
      name: "ТОО ТРАХ",
    },
  ]);
};
