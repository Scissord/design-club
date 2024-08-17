/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema
    .createTable('card', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.decimal('price', 15, 2).notNullable();
      table.bigInteger('client_id').notNullable();
      table.bigInteger('source_id').notNullable();
      table.uuid('column_id').notNullable();

      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').defaultTo(null);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('card');
};
