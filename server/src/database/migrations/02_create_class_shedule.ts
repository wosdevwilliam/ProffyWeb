import Knex from 'knex';


export async function up(Knex: Knex) {
    return Knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        //relacionando materia com o professor
        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('class_schedule');
}