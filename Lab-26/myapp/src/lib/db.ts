import mysql from "mysql2/promise";

const pool=mysql.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

export default pool;