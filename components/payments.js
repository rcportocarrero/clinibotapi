const mysql = require('mysql2/promise');


const createConnection = async () =>{
    return await mysql.createConnection({
        host: '192.95.39.30',
        user: 'contine2_bookmedik',
        database: 'CyyR&cQL0c=U'
    });
}

const getPayments = async ()=>{
       const connection = await createConnection();
    const [rows] = await connection.execute('SELECT name FROM payment_methods');
    if (rows.length > 0) return rows;
    return false;
}

module.exports= {
    getPayments,

}