//version child_process!!!
import express from 'express'
import { fork } from 'child_process'

let counter = 0
const app = express()
const server = app.listen(8080, () => console.log('Server Up'))
app.use(express.json())

app.get('/', (req, res) => {
    counter++
    res.send(`Visitado ${counter} veces`)
})

app.get('/matematica', (req, res) => {
    const result = fork('suma')
    result.on('message', data => {
        res.send(`Resultado = ${data}`)
    })
})