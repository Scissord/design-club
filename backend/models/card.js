import knex from './knex.js';

const db = knex();

export const get = async function () {
  return await db('card').select('*');
};

export const create = async function (data) {
  const [card] = await db("card")
    .insert(data)
    .returning("id");

  data.id = card.id;
  return data;
};

export const findWhere = async function (condition) {
  return await db("card")
    .select('*')
    .where(condition);
};

export const find = async function (id) {
  return await db("card")
    .select('*')
    .where("id", id)
    .first();
}

export const update = async function (id, data) {
  await db("card")
    .update(data)
    .where("id", id);

  return data;
};

export const updateWhereIn = async function (ids, data) {
  await db("card")
    .update(data)
    .whereIn("id", ids);

  return data;
};
