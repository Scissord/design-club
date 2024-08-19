import knex from './knex.js';

const db = knex();

export const get = async function () {
  return await db('card as ca')
    .select('ca.*', 'cl.name as client_name', 's.name as source_name')
    .leftJoin('client as cl', 'cl.id', 'ca.client_id')
    .leftJoin('source as s', 's.id', 'ca.source_id')
    .where('ca.deleted_at', null);
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
  return await db("card as ca")
    .select('ca.*', 'ci.name as client_name')
    .leftJoin('client as ci', 'ci.id', 'ca.client_id')
    .leftJoin('source as s', 's.id', 'ca.source_id')
    .where("ca.id", id)
    .first();
};

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

export const softDelete = async function (id) {
  await db("card")
    .update('deleted_at', new Date())
    .where('id', id)

  return id
};
