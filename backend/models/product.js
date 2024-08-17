import knex from './knex.js';

const db = knex();

export const getAll = async function () {
  return await db('product')
    .select('product.id as value', 'product.name as label')
    .where('deleted_at', null)
    .orderBy('id', 'desc');
};

export const get = async function (limit, page, search) {
  const result = await db('product')
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
    products: result.data,
    lastPage: result.pagination.lastPage
  }
};

export const create = async function (data) {
  const [product] = await db("product")
    .insert(data)
    .returning("id");

  data.id = product.id;
  return data;
};

export const softDelete = async function (id) {
  return await db("product").update('deleted_at', new Date()).where('id', id)
};

export const findWhere = async function (condition) {
  return await db("product")
    .select('*')
    .where(condition);
};

export const find = async function (id) {
  return await db("product")
    .select('*')
    .where("id", id)
    .first();
};
