const express = require('express')
const cors = require('cors')
require('./config/config')

const port = 5000
const app = express()
app.use(express.json())
app.use(cors())

const users = require('./routes/userRouter')


app.use('/register', users)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`)
})

