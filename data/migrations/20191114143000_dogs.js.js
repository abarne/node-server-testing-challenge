exports.up = function(knex, promise) {
	return knex.schema.createTable('dogs', (tbl) => {
		tbl.increments();

		tbl.string('name', 255).notNullable();
		tbl.string('breed', 255).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('dogs');
};
