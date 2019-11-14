const {
  DB: database,
  DB_HOST: host,
  DB_USER: user,
  DB_PASSWORD: password,
} = process.env

const connection = { user, password, host, database }

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://app:app@localhost/node',
    migrations: {
      directory: __dirname + '/migrations',
    }
  },
  production: {
    client: 'pg',
    connection: 'postgres://root:root@localhost/testdb',
    migrations: {
      directory: __dirname + '/migrations',
    }
  }

};
