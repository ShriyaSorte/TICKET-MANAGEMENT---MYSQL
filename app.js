const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
port = 4000;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ticketmanagement',
    insecureAuthent :true
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to database');
    }
});
app.get('/',(req,res)=>{
    res.send('Hello World');
});



app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
});