import knex from './knex.js';

const db = knex();

export const getAll = async function () {
  return await db('source')
    .select('source.id as value', 'source.name as label')
    .where('deleted_at', null)
    .orderBy('id', 'asc');
};

export const get = async function (limit, page, search) {
  const result = await db('source')
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
    sources: result.data,
    lastPage: result.pagination.lastPage
  }
};

export const create = async function (data) {
  const [source] = await db("source")
    .insert(data)
    .returning("id");

  data.id = source.id;
  return data;
};

export const softDelete = async function (id) {
  return await db("source").update('deleted_at', new Date()).where('id', id)
};

export const findWhere = async function (condition) {
  return await db("source")
    .select('*')
    .where(condition);
};

export const find = async function (id) {
  return await db("source")
    .select('*')
    .where("id", id)
    .first();
};
