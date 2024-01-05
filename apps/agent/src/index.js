import express from 'express'
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3334, () => {
    console.log('[Agent] listening on http://localhost:3334');
});