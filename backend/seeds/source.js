/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('source').del()
  await knex('source').insert([
    { id: 1, name: 'Холодный звонок' },
    { id: 2, name: 'Ещё' },
  ]);
};
