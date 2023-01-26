//version bloqueante!!!
import express from 'express'
import { suma } from './suma.js'

let counter = 0
const app = express()
const server = app.listen(8080, () => console.log('Server Up'))
app.use(express.json())

app.get('/', (req, res) => {
    counter++
    res.send(`Visitado ${counter} veces`)
})

app.get('/matematica', (req, res) => {
    const result = suma()
    res.send(`Resultado = ${result}`)
})