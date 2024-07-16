/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  await knex('block').del()
  await knex('block').insert([
    // first
      //images
    {
      id: 1,
      html_id: "header",
      template_id: 1,
    },
    {
      id: 2,
      html_id: "logo_img",
      template_id: 1,
    },
    {
      id: 3,
      html_id: "map_img",
      template_id: 1,
    },
    {
      id: 4,
      html_id: "activity_img",
      template_id: 1,
    },
    {
      id: 5,
      html_id: "guests_img",
      template_id: 1,
    },
    {
      id: 6,
      html_id: "calendar_img",
      template_id: 1,
    },
    {
      id: 7,
      html_id: "user_img",
      template_id: 1,
    },
    {
      id: 8,
      html_id: "global_img",
      template_id: 1,
    },
    {
      id: 9,
      html_id: "search_img",
      template_id: 1,
    },
      // text
    {
      id: 10,
      html_id: "first_link",
      template_id: 1,
    },
    // second
    // {
    //   id: 12,
    //   html_id: "title",
    //   template_id: 2,
    // },
    // {
    //   id: 13,
    //   html_id: "placeholder",
    //   template_id: 2,
    // },
    // {
    //   id: 14,
    //   html_id: "button_text",
    //   template_id: 2,
    // },
  ]);
};
