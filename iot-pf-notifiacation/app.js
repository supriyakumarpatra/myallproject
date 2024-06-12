// const http = require('http');
const pg = require('pg');
const {spdb} = require('./config/adaptor');
const {sendEmail} = require('./utils/mail.utils');
const {kafka} = require('./utils/kafka-config');
const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf-8");

const consumer = kafka.consumer({ groupId: 'sms-group' });
const client = new pg.Client(spdb.pg.uri);
client.connect().then((connect)=>{
    console.log('DB is connected');
    
}).catch((err)=>console.log(err));

function sendingMail(tenantId){
    console.log("tenantId",tenantId)
    client.query('SELECT * FROM email_config where tenant_id = $1',[tenantId],(err,values)=>{
        if(err){
            console.log('SQL ERROR:',err)
        }
        console.log(values.rows)
        sendEmail(values.rows[0]?.from_email,'thejacm2021@gmail.com',values.rows[0]?.smtp_host,values.rows[0]?.smtp_port,values.rows[0]?.smtp_username,values.rows[0]?.smtp_password,values.rows[0]?.smtp_auth); 
   })
}

(async ()=>{
    await consumer.connect()
    await consumer.subscribe({ topic: 'dataHandlerData', fromBeginning: true })
    await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                // console.log(topic,partition)
                const data =message.value.toString();
                const tenantId = JSON.parse(data).tenantId;
                console.log(JSON.parse(data))
                sendingMail(tenantId)
            },
    })
})()


