import Knex from 'knex';


export async function up(Knex: Knex) {
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('suject').notNullable();
        table.decimal('cost').notNullable();

        //relacionando materia com o professor
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('classes');
}