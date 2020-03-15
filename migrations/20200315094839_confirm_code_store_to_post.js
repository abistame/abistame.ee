
exports.up = function(knex) {
      let raw = `
ALTER TABLE public.posts ADD COLUMN confirm_code character varying(6);
COMMENT ON COLUMN public.posts.confirm_code IS 'Confirm code to user';

ALTER TABLE public.posts ADD COLUMN confirmed timestamp with time zone;
      `

  return knex.schema.raw(raw)  
};

exports.down = function(knex) {
        let raw = `
ALTER TABLE public.posts DROP COLUMN confirm_code;
ALTER TABLE public.posts DROP COLUMN confirmed;
      `

  return knex.schema.raw(raw)  
};
