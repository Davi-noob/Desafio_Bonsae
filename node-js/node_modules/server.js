
import {fastify} from 'fastify'
import { Pool } from 'pg'
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'residencia',
    password: 'postgres',
    port: 5432,
})


const server = fastify()

server.get('/', () => {
    return 'Hello Word'
})

server.get('/hello', () => {
    return 'Hello Rocketseet'
})

server.get('/node', () => {
    return 'Hello Node.js'
})

server.get('/turmas', async () => {
    const result = await pool.query('SELECT * FROM turmas')
    return result.rows
})

server.listen({
    port: 3333
});



