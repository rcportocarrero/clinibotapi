const mysql = require('mysql2/promise');


const createConnection = async () =>{
    return await mysql.createConnection({
        host: '192.95.39.30',
        user: 'contine2_bookmedik',
        database: 'CyyR&cQL0c=U'
    });
}

const getPacient = async (dni)=>{
    console.log(dni);
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT status_id FROM reservation WHERE num_doc = ?',[dni]);
    if (rows.length > 0) return rows[0].status_id;
    return false;
}
const getRecipe = async (dni)=>{
    console.log(dni);
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT medicaments FROM reservation WHERE num_doc = ?',[dni]);
    if (rows.length > 0) return rows[0].medicaments;
    return false;
}

const getDiagnostic = async (dni)=>{
    console.log(dni);
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT symtoms FROM reservation WHERE num_doc = ?',[dni]);
    if (rows.length > 0) return rows[0].symtoms;
    return false;
}

const insertCita = async (num_doc,tipo,dia,hora,payment_code)=>{
    const connection = await createConnection();
    const [rows] = await connection.execute(`INSERT INTO reservation (num_doc, title,date_at,time_at,payment_code) VALUES (?,?,?,?,?)`,[num_doc,tipo,dia,hora,payment_code]);
    if (rows) return true;
    return false;
}
module.exports= {
    getPacient,
    getRecipe,
    getDiagnostic,
    insertCita

}