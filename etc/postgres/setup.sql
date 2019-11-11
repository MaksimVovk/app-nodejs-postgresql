create user root with password 'root';
create user app with password 'app';

create database node template template0 owner root
  encoding 'utf8'
  lc_collate = 'en_US.UTF-8'
  lc_ctype = 'en_US.UTF-8';

\connect node

set role root;

grant connect on database node to app;
alter default privileges in schema public grant all on sequences to app;
alter default privileges in schema public grant select, insert, update, delete on tables to app;

create table users (
  id bigserial primary key,
  name text NOT NULL,
  created_at timestamp default current_timestamp
);