const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7255005301#Ta',
    database: 'new_projectsss'
});

mysqlconnection.connect((error) => {
    if (error) {
        console.error('This error is coming when database connection is working: ' + JSON.stringify(error, undefined, 2));
    } else {
        console.log('DB connection successfully');
    }
});

module.exports = mysqlconnection;
