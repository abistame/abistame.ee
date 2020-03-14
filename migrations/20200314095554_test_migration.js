
exports.up = function(knex) {
  console.log('migrating, migrating, migrating!')

  return knex.schema.createTable('requests', function (table) {
    table.increments('id').primary()
    table.string('phone_number').notNullable()
    table.string('description').notNullable()
    table.string('location_description').notNullable()
    table.specificType('point', 'geometry(point, 4326)').notNullable()
    table.timestamps()

    // table.index(['point'], 'requests_point_index', 'gist( (point::geography) )')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('requests')
};
