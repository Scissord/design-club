/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {
      id: 1,
      name: "Cy Ganderton",
      job: "Quality Control Specialist",
      company: "Littel, Schaden and Vandervort",
      location: "Canada",
      lastLogin: new Date(),
      favoriteColor: "Blue"
    },
    {
      id: 2,
      name: "Hart Hagerty",
      job: "Desktop Support Technician",
      company: "Zemlak, Daniel and Leannon",
      location: "United States",
      lastLogin: new Date(),
      favoriteColor: "Purple"
    },
    {
      id: 3,
      name: "Brice Swyre",
      job: "Tax Accountant",
      company: "Carroll Group",
      location: "China",
      lastLogin: new Date(),
      favoriteColor: "Red"
    },
    {
      id: 4,
      name: "Marjy Ferencz",
      job: "Office Assistant I",
      company: "Rowe-Schoen",
      location: "Russia",
      lastLogin: new Date(),
      favoriteColor: "Crimson"
    },
    {
      id: 5,
      name: "Yancy Tear",
      job: "Community Outreach Specialist",
      company: "Wyman-Ledner",
      location: "Brazil",
      lastLogin: new Date(),
      favoriteColor: "Indigo"
    },
    {
      id: 6,
      name: "Irma Vasilik",
      job: "Editor",
      company: "Wiza, Bins and Emard",
      location: "Venezuela",
      lastLogin: new Date(),
      favoriteColor: "Purple"
    },
    {
      id: 7,
      name: "Meghann Durtnal",
      job: "Staff Accountant IV",
      company: "Schuster-Schimmel",
      location: "Philippines",
      lastLogin: new Date(),
      favoriteColor: "Yellow"
    },
    {
      id: 8,
      name: "Sammy Seston",
      job: "Accountant I",
      company: "O'Hara, Welch and Keebler",
      location: "Indonesia",
      lastLogin: new Date(),
      favoriteColor: "Crimson"
    },
    {
      id: 9,
      name: "Lesya Tinham",
      job: "Safety Technician IV",
      company: "Turner-Kuhlman",
      location: "Philippines",
      lastLogin: new Date(),
      favoriteColor: "Maroon"
    },
    {
      id: 10,
      name: "Zaneta Tewkesbury",
      job: "VP Marketing",
      company: "Sauer LLC",
      location: "Chad",
      lastLogin: new Date(),
      favoriteColor: "Green"
    },
    {
      id: 11,
      name: "Andy Tipple",
      job: "Librarian",
      company: "Hilpert Group",
      location: "Poland",
      lastLogin: new Date(),
      favoriteColor: "Indigo"
    },
    {
      id: 12,
      name: "Sophi Biles",
      job: "Recruiting Manager",
      company: "Gutmann Inc",
      location: "Indonesia",
      lastLogin: new Date(),
      favoriteColor: "Maroon"
    },
    {
      id: 13,
      name: "Florida Garces",
      job: "Web Developer IV",
      company: "Gaylord, Pacocha and Baumbach",
      location: "Poland",
      lastLogin: new Date(),
      favoriteColor: "Purple"
    },
    {
      id: 14,
      name: "Maribeth Popping",
      job: "Analyst Programmer",
      company: "Deckow-Pouros",
      location: "Portugal",
      lastLogin: new Date(),
      favoriteColor: "Aquamarine"
    },
    {
      id: 15,
      name: "Moritz Dryburgh",
      job: "Dental Hygienist",
      company: "Schiller, Cole and Hackett",
      location: "Sri Lanka",
      lastLogin: new Date(),
      favoriteColor: "Crimson"
    },
    {
      id: 16,
      name: "Reid Semiras",
      job: "Teacher",
      company: "Sporer, Sipes and Rogahn",
      location: "Poland",
      lastLogin: new Date(),
      favoriteColor: "Green"
    },
    {
      id: 17,
      name: "Alec Lethby",
      job: "Teacher",
      company: "Reichel, Glover and Hamill",
      location: "China",
      lastLogin: new Date(),
      favoriteColor: "Khaki"
    },
    {
      id: 18,
      name: "Aland Wilber",
      job: "Quality Control Specialist",
      company: "Kshlerin, Rogahn and Swaniawski",
      location: "Czech Republic",
      lastLogin: new Date(),
      favoriteColor: "Purple"
    },
    {
      id: 19,
      name: "Teddie Duerden",
      job: "Staff Accountant III",
      company: "Pouros, Ullrich and Windler",
      location: "France",
      lastLogin: new Date(),
      favoriteColor: "Aquamarine"
    },
    {
      id: 20,
      name: "Lorelei Blackstone",
      job: "Data Coordinator",
      company: "Witting, Kutch and Greenfelder",
      location: "Kazakhstan",
      lastLogin: new Date(),
      favoriteColor: "Red"
    }
  ]);
};
