const express = require('express')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8087

var cors = require('cors')

const salesEmployeeList = [
    {hrMatricule: "46379313", firstName: "Manon", lastName: "Madeleine", email: "manon.madeleine@email.com", oaPassId: "OA46379313", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "VL026|1", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "86244356", firstName: "Maxime", lastName: "Marin", email: "maxime.marin@email.com", oaPassId: "OA86244356", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "VL026|1", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "18257025", firstName: "Alex", lastName: "Rolland", email: "alex.rolland@email.com", oaPassId: "OA18257025", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "VL026|1", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "66537895", firstName: "Chloé", lastName: "Odile", email: "chloe.odile@email.com", oaPassId: "OA66537895", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "VL026|1", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "40093261", firstName: "Frank", lastName: "Marcel", email: "frank.marcel@email.com", oaPassId: "OA40093261", jobRole: "Business Training​", directManagerHrMatriculeNumber: "OA0000000001", division: "VL026|1", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "88372990", firstName: "Pixel", lastName: "RONIN", email: "pixel.ronin@email.com", oaPassId: "OA99883319", jobRole: "Key Account Management", directManagerHrMatriculeNumber: "OA00000010", division: "VL026|1", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "90097733", firstName: "Alexandre", lastName: "DELOIT", email: "alexandre.deloit@email.com", oaPassId: "OA76281902", jobRole: "Key Account Management", directManagerHrMatriculeNumber: "OA00000011", division: "VL026|2", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "12009883", firstName: "Sarah", lastName: "NANCY", email: "sarah.nancy@email.com", oaPassId: "OA58201239", jobRole: "Sales Transversal Management", directManagerHrMatriculeNumber: "OA00000012", division: "VL026|3", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "56388995", firstName: "Sandrine", lastName: "CANDY", email: "sandrine.candy@email.com", oaPassId: "OA01907629", jobRole: "National Category Expert", directManagerHrMatriculeNumber: "OA00000013", division: "VL026|4", country: "FR", countryCode: "FR", hrStatus: "active"},
    {hrMatricule: "30982412", firstName: "Chopper", lastName: "PEACE", email: "chopper.peace@email.com", oaPassId: "OA51928374", jobRole: "Business Training", directManagerHrMatriculeNumber: "OA00000014", division: "VL026|3", country: "FR", countryCode: "FR", hrStatus: "active"},
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
        if ("\""+obj["oaPassId"]+"\"" === req.query.hrMatricule) {
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
