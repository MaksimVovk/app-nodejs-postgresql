
exports.up = function(knex, Promise) {
  return knex.raw(`
    insert into users (name) values ('vasya');
  `)
};

exports.down = function(knex, Promise) {
  return knex.raw(`
    delete from users where name = 'vasya';
  `)
};
