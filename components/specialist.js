const mysql = require('mysql2/promise');


const createConnection = async () =>{
    return await mysql.createConnection({
        host: '192.95.39.30',
        user: 'contine2_bookmedik',
        database: 'CyyR&cQL0c=U'
    });
}

const getSpecialist = async ()=>{
       const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM category');
    if (rows.length > 0){
        return rows;
    }else{
        return false;
    } 
   
}

const getDoctor = async (tipo)=>{
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT * FROM agent WHERE specialist =?',[tipo]);
    if (rows.length > 0){
        return rows;
    }else{
        return false;
    } 

}


module.exports= {
    getSpecialist,
    getDoctor,

}