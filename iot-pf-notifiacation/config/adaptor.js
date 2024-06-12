/*jshint esversion: 8 */
const { setEngine } = require('crypto');
const path = require('path');
//Get all the settings
const setting = require('./settings');

module.exports = {
  appName: 'SP Notification Handler',
  env: setting.appEnv,
  port: setting.appPort,
  logs: setting.appLog,
  //ip:'localhost',
  ip: setting.appHost,

  root: path.normalize(`${__dirname}/../..`), // root
  base: path.normalize(`${__dirname}/..`), // base

  logFileName: {
    info: 'info.log',
    error: 'exceptions.log',
  },
  spdb: {
    pg: {
      // PGSQL - Sample URI
      // uri: 'postgres://user:pass@example.com:5432/dbname'
      uri: (() => {
        //If Username Password is set
        if (setting.pgdbIsAuth === 'true') {
          return `postgres://${setting.pgdbUsername}:${setting.pgdbPassword}@${setting.pgdbHost}:${setting.pgdbPort}/${setting.pgDbName}`;
        }
        //Without auth
        return `postgres://${setting.pgdbHost}:${setting.pgdbPort}/${setting.pgDbName}`;
      })(),

      masterDb: `${setting.pgDbName}`,
      options: {},
      host: setting.pgdbHost,
      port: setting.pgdbPort,
      username: setting.pgdbUsername,
      password: setting.pgdbPassword,
    },
  },
  entryControllerIP: setting.entryControllerIP,
  exitControllerIP: setting.exitControllerIP,

  deewan: {
    token: setting.token,
    token_one: setting.token_one,
    apiKey: setting.apiKey,
    url: setting.url,
    senderName: setting.senderName,
  },

  mail: {
    mailFrom: setting.from,
    mailService: setting.mailService,
    mailHost: setting.mailHost,
    mailPort: setting.mailPort,
    mailSecure: setting.mailSecure,
    mailUser: setting.mailUser,
    mailPassword: setting.mailPassword,
    mailUnauthorized: setting.mailUnauthorized,
    mailSubject: setting.mailSubject,
  },
  verifyUrl: setting.verifyUrl
};
