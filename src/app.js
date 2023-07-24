const express = require('express')
require('./config/config')

const port = 5000
const app = express()
app.use(express.json())

const users = require('./routes/userRouter')


app.use('/register', users)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})

