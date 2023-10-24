const express = require('express')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8087

const salesEmployeeList = [
    {hrMatricule: "46379313", firstName: "Manon", lastName: "Madeleine"},
    {hrMatricule: "86244356", firstName: "Maxime", lastName: "Marin"},
    {hrMatricule: "18257025", firstName: "Alex", lastName: "Rolland"},
    {hrMatricule: "66537895", firstName: "Chloé", lastName: "Odile"},
    {hrMatricule: "40093261", firstName: "Frank", lastName: "Marcel"},
]

app.use(express.json())

const createPost = (req, res, next) => {
    console.log('MESSAGE RECEIVED FROM EBX')
    next()
}

router.get('/getList', function(req, res) {
    res.json(salesEmployeeList)
})


router.get('/salesEmployee', createPost, function(req, res){
    console.log("HR Matricule received : " + req.query.hrMatricule);
    var found = false;
    for(let i = 0; i < salesEmployeeList.length; i++) {
        let obj = salesEmployeeList[i];
        if ("\""+obj["hrMatricule"]+"\"" === req.query.hrMatricule) {
            found = true;
            res.json(obj)
        }
    }

    if (!found) {
        res.json({
            "hrMatricule": req.query.hrMatricule,
            "firstName": "Not found",
            "lastName": "Not found",
        })
    } 
})


app.use('/', router)

app.listen(PORT, () => {
    console.log(`server ready \n\n[HR Mockup]\n`)
})
