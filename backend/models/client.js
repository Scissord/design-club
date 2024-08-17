import knex from './knex.js';

const db = knex();

export const getAll = async function () {
  return await db('client')
    .select('client.id as value', 'client.name as label')
    .where('deleted_at', null)
    .orderBy('id', 'asc');
};

export const get = async function (limit, page, search) {
  const result = await db('client')
    .select('*')
    .where((q) => {
      search && q.where('name', 'ilike', `%${search}%`);
    })
    .where('deleted_at', null)
    .paginate({
      perPage: limit,
      currentPage: page,
      isLengthAware: true
    });

  return {
    clients: result.data,
    lastPage: result.pagination.lastPage
  }
};

export const create = async function (data) {
  const [client] = await db("client")
    .insert(data)
    .returning("id");

  data.id = client.id;
  return data;
};

export const softDelete = async function (id) {
  return await db("client").update('deleted_at', new Date()).where('id', id)
};

export const findWhere = async function (condition) {
  return await db("client")
    .select('*')
    .where(condition);
};

export const find = async function (id) {
  return await db("client")
    .select('*')
    .where("id", id)
    .first();
};
