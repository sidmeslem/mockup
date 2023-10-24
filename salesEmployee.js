const express = require('express')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8087

app.use(express.json())

const createPost = (req, res, next) => {
    console.log('MESSAGE RECEIVED FROM EBX\n', req.body)
    next()
}

router.post('/salesEmployee', createPost, (req, res) => {
    console.log("HR Matricule received : " + req.query.hrMatricule);
    res.json({
        "hrMatricule": req.query.hrMatricule,
        "firstName": "Hello",
        "lastName": "World",
    }
    )
})


app.use('/', router)

app.listen(PORT, () => {
    console.log(
        `server ready at http://localhost:${PORT}\n\n[SAP HR]\n`
    )
})

