require('dotenv').config()

module.exports =
{
  "development": {
    "database": "port_dev_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "define": {
      "underscored": true
    }
  },
  "test": {
    "database": "port_dev_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "port_dev_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}