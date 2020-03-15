
exports.up = function(knex) {
  
	console.log('Core tables!')
      let raw = `
--Drop table posts;
CREATE TABLE IF NOT EXISTS posts(
			id serial,
			enterprise_key int, -- if filled, enterprise post.
			phonenumber varchar(20), -- dont want to think about country code - its validated with sms anyway
			need text,
			location geometry,
			location_tag varchar(400),
                        created timestamp,
                        expires timestamp,
                        last_view timestamp,
                        last_contact_fail timestamp,
                        last_helper_assign timestamp,
                        last_helper_mismatch timestamp,
                        assignment_confirm timestamp,
                        view_count int,
                        contact_count int,
                        assinged_helper_key int,
			PRIMARY KEY( id )
		);
--DROP TABLE helper;
CREATE TABLE IF NOT EXISTS helper(
			id serial,
			helpler_name varchar(20),
			phonenumber varchar(20), -- dont want to think about country code - its validated with sms anyway
			location geometry,
			radius int,
                        created timestamp,
                        last_login timestamp,
                        last_contact_fail timestamp,
                        last_helper_assign timestamp,
                        last_helper_mismatch timestamp,
                        last_assignment_confirm timestamp,
			PRIMARY KEY( id )
		);

CREATE TABLE IF NOT EXISTS enterprise(
			id serial,
			enterprise_name varchar(200),
			logoUrl varchar(600),
			PRIMARY KEY( id )
		);

CREATE TABLE IF NOT EXISTS enterprise_user(
			id serial,
			person_name varchar(200),
			email varchar(200), 
			password varchar(200), 
			salt varchar(200), 
                        created timestamp,
                        last_login timestamp,
			PRIMARY KEY( id )
		);
      `

  return knex.schema.raw(raw)
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('helper')
    .dropTableIfExists('enterprise')
    .dropTableIfExists('enterprise_user')
};
