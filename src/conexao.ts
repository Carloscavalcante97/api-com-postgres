import { Pool, ClientConfig } from "pg";
import "dotenv/config";

const config: ClientConfig ={ 
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),}

const pool = new Pool(config);

export default pool;