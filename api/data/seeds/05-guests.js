exports.seed = async function(knex) {
  await knex('guests').insert([
    {
      event_id: 1,
      user_id: 1,
    },
    {
      event_id: 2,
      user_id: 2,
    },
    {
      event_id: 3,
      user_id: 3,
    }
  ])
}
