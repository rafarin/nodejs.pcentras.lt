const expr = require('express');
const app = expr();
const port = 3000;

const nocache = require('nocache');
app.use(nocache());

app.get('/', (req, res) => {
    res.send('Hello. Welcome to NodeJS')
})

app.listen(port, () => {
    console.log(`NodeJS app listening at http://localhost:${port}`)
})