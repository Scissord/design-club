/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('keys').del()
  await knex('keys').insert([
    {
      id: 1, 
      block_id: 1, 
      type: 0,
      key: 'header_img',
      value: '/header-bg.jpg'
    },
    {
      id: 2, 
      block_id: 2, 
      type: 1,
      key: 'logo_img',
      value: '/img/logo.svg'
    },
    {
      id: 3, 
      block_id: 3, 
      type: 0,
      key: 'map_img',
      value: '/img/map.svg'
    },
    {
      id: 4, 
      block_id: 4, 
      type: 0,
      key: 'activity_img',
      value: '/img/activity.svg'
    },
    {
      id: 5, 
      block_id: 5, 
      type: 0,
      key: 'guests_img',
      value: '/img/guests.svg'
    },
    {
      id: 6, 
      block_id: 6, 
      type: 0,
      key: 'calendar_img',
      value: '/img/calendar.svg'
    },
    {
      id: 7, 
      block_id: 7, 
      type: 1,
      key: 'user_img',
      value: '/img/user.jpg'
    },
    {
      id: 8, 
      block_id: 8, 
      type: 1,
      key: 'global_img',
      value: '/img/global.jpg'
    },
    {
      id: 9,
      block_id: 9, 
      type: 1,
      key: 'search_img',
      value: '/img/search.svg'
    },
    {
      id: 10,
      block_id: 10, 
      type: 3,
      key: 'first_link_href',
      value: '/home'
    },
    {
      id: 11,
      block_id: 10, 
      type: 2,
      key: 'first_link_text',
      value: 'HOME'
    },
  ]);
};
