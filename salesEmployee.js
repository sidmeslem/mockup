const express = require('express')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8087

var cors = require('cors')

const salesEmployeeList = [
    {hrMatricule: "46379313", firstName: "Manon", lastName: "Madeleine", email: "manon.madeleine@email.com", oaPassId: "OA46379313", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "10", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "86244356", firstName: "Maxime", lastName: "Marin", email: "maxime.marin@email.com", oaPassId: "OA86244356", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "10", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "18257025", firstName: "Alex", lastName: "Rolland", email: "alex.rolland@email.com", oaPassId: "OA18257025", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "10", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "66537895", firstName: "Chloé", lastName: "Odile", email: "chloe.odile@email.com", oaPassId: "OA66537895", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "10", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "40093261", firstName: "Frank", lastName: "Marcel", email: "frank.marcel@email.com", oaPassId: "OA40093261", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "10", country: "FR", countryCode: "FR", hrStatus: "active"},
]

app.use(express.json())
app.use(cors())

const createPost = (req, res, next) => {
    console.log('MESSAGE RECEIVED FROM EBX')
    next()
}

router.get('/getList', function(req, res) {
    res.json(salesEmployeeList)
})


router.post('/salesEmployee', createPost, function(req, res){
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
            "lastName": "Not found"
        })
    } 
})


app.use('/', router)

app.listen(PORT, () => {
    console.log(`server ready \n\n[HR Mockup]\n`)
})
