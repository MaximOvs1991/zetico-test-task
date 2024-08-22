const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000'
}
const geoRoutes = require('./routes/geo')

app.use(cors(corsOptions))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/geo', geoRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})