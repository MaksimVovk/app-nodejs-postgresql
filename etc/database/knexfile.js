const {
  DB: database,
  DB_HOST: host,
  DB_USER: user,
  DB_PASSWORD: password,
} = process.env

const connection = { user, password, host, database }

module.exports = {

  development: {
    connection: 'postgres://postgres:postgres@157.230.111.165/fias',
    client: 'pg',
    pool: {
      min: 2,
      max: 50,
    },
  },
  production: {
    client: 'pg',
    connection,
    migrations: {
      directory: __dirname + '/migrations',
    }
  }

};
