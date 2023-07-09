const mysql = require('mysql2/promise');


const createConnection = async () =>{
    return await mysql.createConnection({
        host: '192.95.39.30',
        user: 'contine2_bookmedik',
        database: 'CyyR&cQL0c=U'
    });
}

const getPlans = async ()=>{
       const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM health_plans');
    if (rows.length > 0) return rows;
    return false;
}

module.exports= {
    getPlans,

}