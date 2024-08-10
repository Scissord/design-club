import knex from './knex.js';
import countPagination from '../helpers/countPagination.js';

const db = knex();

export const get = async function (limit, page, search) {
  const { offset, lastPage } = await countPagination('product', limit, page, search);

  const products = await db('product')
    .select('*')
    .where((q) => {
      search && q.where('name', 'ilike', `%${search}%`);
    })
    .where('deleted_at', null)
    .limit(limit)
    .offset(offset)
    .orderBy('id', 'desc');

  return {
    products,
    lastPage
  }
};

export const create = async function (data) {
  const [id] = await db("product")
    .insert(data)
    .returning("id");

  data.id = id;
  return data;
};

export const softDelete = async function (id) {
  return await db("product").update('deleted_at', new Date()).where('id', id)
};

export const update = async function (data) {

  return data
};
