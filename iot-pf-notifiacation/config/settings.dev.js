module.exports = {
  appEnv: process.env.NODE_ENV || 'dev',
  appLog: process.env.APP_LOG || 'dev',
  appPort: process.env.SP_EDGE_TCP_HANDLER || 9000,
  appHost: '0.0.0.0',
  pgdbHost: process.env.BTS_PGDB_HOST || process.env.PGDB_HOST || 'localhost',
  // "192.168.1.91",
  pgdbPort: process.env.BTS_PGDB_PORT || process.env.PGDB_PORT || '54325',
  // "5432",
  pgdbIsAuth:
    process.env.BTS_PGDB_IS_AUTH || process.env.PGDB_IS_AUTH || 'true',
  pgdbUsername:
    process.env.BTS_PGDB_USERNAME || process.env.PGDB_USERNAME || 'superuser',
  pgdbPassword:
    process.env.BTS_PGDB_PASSWORD ||
    process.env.PGDB_PASSWORD ||
    'XHB6j3HPDW3Ftn',
  pgDbName: process.env.PGDB_NAME_VIG || 'sp-demo-v3',

  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImRlZDRhYzg4ZDhmNjk0MWM4ZDcxNjNiNjJhOGRmZGJhOWMyYzc4Yzk4MzNiYjBmNTRkNTllMjdkNzQ1OTQ3Y2E0MWViOWJkMTdiNmRhNjg1NWMyYzJmYzg2Nzk5MzYzZjdlMmY4YTMyZjUzNzNjZmY1YjVjZWE4YmM1NDlhMjRjYTI3ZjQ1OWUyM2YxNDBmZTRjMTZhOWU3YjllNTJmOGYiLCJpYXQiOjE2NjUwNDc3NzAsImV4cCI6MzI0MjkyNzc3MH0.PVOubiinMgno9AkPEw4lIdhK_B87Lbd1oe4kTjwgsrA',
  token_one:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImE3N2I5ZmYwZDY1ZWZlOWZkMGE5NWE0YjU2ZDI5OWI0NDI3NWU0MWUyODEwZTQ5OTc3ZjYwOWUwMDEzMWYxMTU5MTQ1ODRjMTcxMTM3ZGFhZGQ3MmMzZDcyNmQ3NzdiZWEzMTYxZmM5NDE3OGU5YTZmYzJmNmM1NzVmMWUxYTI2MmM4ZTFiNmRkNTA1MGEzYzc5MzEzMjRmODZmOWMwNmQiLCJpYXQiOjE2NjUwNDg1ODEsImV4cCI6MzI0MjkyODU4MX0.GnYzlVAkK8-t6VpC16uOJJyiPvVjV_DdUqeL_r5MEuk',
  apiKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImE3N2I5ZmYwZDY1ZWZlOWZkMGE5NWE0YjU2ZDI5OWI0NDI3NWU0MWUyODEwZTQ5OTc3ZjYwOWUwMDEzMWYxMTU0OTYzNWRhMTc4YTNmNTg4Y2QzOWViZmExYjVhMzY3ZjM5OTE5MzA5NTZlYmQ1YjI5YTcwODY4MTUwNzAwZDY2N2Q2MDI4ZTA3ZWUyYWFiNWMyNWFjYTQ3OWNkMGM0M2MiLCJpYXQiOjE2NjMyMzQyNjgsImV4cCI6MzI0MTExNDI2OH0.quEz0v-y3M86bnYCBv6a1YZUzoiZMxPwiVbM7Lmh5R8',
  url: 'https://apis.deewan.sa/sms/v1/messages/',
  senderName: 'MAWQFI',

  from:
    process.env.SP_EMAIL_FROM ||
    process.env.EMAIL_FROM ||
    'notification@hyperthings.in',

  mailService:
    process.env.SP_SCHEDULER_MAIL_SERVICE ||
    process.env.MAIL_SERVICE ||
    'gmail',
  mailHost:
    process.env.SP_SCHEDULER_MAIL_HOST ||
    process.env.MAIL_HOST ||
    'mail.hyperthinksys.com',
  mailPort: process.env.SP_SCHEDULER_MAIL_PORT || process.env.MAIL_PORT || 465,
  mailSecure:
    process.env.SP_SCHEDULER_MAIL_SECURE || process.env.MAIL_SECURE || true,
  mailUser:
    process.env.SP_SCHEDULER_MAIL_USER ||
    process.env.MAIL_USER ||
    'notification@hyperthings.in',
  mailPassword:
    process.env.SP_SCHEDULER_MAIL_PASSWORD ||
    process.env.MAIL_PASSWORD ||
    'XL*B?SFKY%Ke2#!',
  mailUnauthorized:
    process.env.SP_SCHEDULER_MAIL_REJECT_UNAUTHORIZED ||
    process.env.MAIL_REJECT_UNAUTHORIZED ||
    false,
  mailSubject:
    process.env.SP_SCHEDULER_MAIL_SUBJECT ||
    process.env.MAIL_SUBJECT ||
    'Smart Parking',
  verifyUrl: process.env.VERIFY_URL || 'https://iot.hyperthink.io:7004/free-subscription'
};
