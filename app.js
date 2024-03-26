const express = require('express')
const app = express()
const port = 3030

app.get("/", (req, res) => {
    res.send('<h1>Auto Scaling Demo App</h1> </br> <h4>Message: Success</h4> </br> <p>Version: 1.0.0</p>')
})

app.listen(port, () => {
    console.log(`Demo app is up and listening to port ${port}`)
})