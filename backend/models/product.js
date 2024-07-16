import knex from './knex.js';

const db = knex();

export const create = async function (data) {
  const [id] = await db("product")
    .insert(data)
    .returning("id");

  data.id = id;
  return data;
};

export const get = async function () {
  return await db('product').select('*');
};
