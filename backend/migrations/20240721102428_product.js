/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema
    .createTable('product', (table) => {
      table.bigIncrements("id").primary();
      table.string("name", 50).nullable();
      table.string("job", 50).nullable();
      table.string("company", 50).nullable();
      table.string("location", 50).nullable();
      table.timestamp("lastLogin").defaultTo(knex.fn.now());
      table.string("favoriteColor", 50).nullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").defaultTo(null);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('product');
};
