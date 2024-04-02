const express = require('express')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8087

var cors = require('cors')

const territoryList = [
    {
        "territoryName": "Clip 'N Snip",
        "brand": "C3",
        "email": "clipnsnip@example.com",
        "customer": "Clip 'N Snip",
        "division": "20",
        "salesOrganization": "M007"
    },
    {
        "territoryName": "Shear Genius",
        "brand": "C2",
        "email": "sheargenius@example.com",
        "customer": "Shear Genius",
        "division": "40",
        "salesOrganization": "M005"
    },
    {
        "territoryName": "Great Clips",
        "brand": "C5",
        "email": "greatclips@example.com",
        "customer": "Great Clips",
        "division": "10",
        "salesOrganization": "M009"
    },
    {
        "territoryName": "Master Cuts",
        "brand": "C4",
        "email": "mastercuts@example.com",
        "customer": "Master Cuts",
        "division": "30",
        "salesOrganization": "M002"
    },
    {
        "territoryName": "Barber Bros",
        "brand": "C1",
        "email": "barberbros@example.com",
        "customer": "Barber Bros",
        "division": "20",
        "salesOrganization": "M003"
    },
    {
        "territoryName": "Trendy Trims",
        "brand": "C3",
        "email": "trendytrims@example.com",
        "customer": "Trendy Trims",
        "division": "10",
        "salesOrganization": "M004"
    },
    {
        "territoryName": "The Cut Above",
        "brand": "C2",
        "email": "thecutabove@example.com",
        "customer": "The Cut Above",
        "division": "40",
        "salesOrganization": "M010"
    },
    {
        "territoryName": "Elite Cuts",
        "brand": "C5",
        "email": "elitecuts@example.com",
        "customer": "Elite Cuts",
        "division": "30",
        "salesOrganization": "M008"
    },
    {
        "territoryName": "Salon Sensations",
        "brand": "C4",
        "email": "salonsensations@example.com",
        "customer": "Salon Sensations",
        "division": "10",
        "salesOrganization": "M006"
    },
    {
        "territoryName": "Hair Haven",
        "brand": "C1",
        "email": "hairhaven@example.com",
        "customer": "Hair Haven",
        "division": "20",
        "salesOrganization": "M001"
    },
    {
        "territoryName": "Supreme Scissors",
        "brand": "C3",
        "email": "supremescissors@example.com",
        "customer": "Supreme Scissors",
        "division": "30",
        "salesOrganization": "M009"
    },
    {
        "territoryName": "Stylish Cuts",
        "brand": "C2",
        "email": "stylishcuts@example.com",
        "customer": "Stylish Cuts",
        "division": "40",
        "salesOrganization": "M008"
    },
    {
        "territoryName": "Chop & Style",
        "brand": "C5",
        "email": "chopandstyle@example.com",
        "customer": "Chop & Style",
        "division": "10",
        "salesOrganization": "M007"
    },
    {
        "territoryName": "Barber's Paradise",
        "brand": "C4",
        "email": "barbersparadise@example.com",
        "customer": "Barber's Paradise",
        "division": "20",
        "salesOrganization": "M006"
    },
    {
        "territoryName": "Cutting Edge",
        "brand": "C1",
        "email": "cuttingedge@example.com",
        "customer": "Cutting Edge",
        "division": "30",
        "salesOrganization": "M002"
    }
]


app.use(express.json())
app.use(cors())

router.get('/getList', function(req, res) {
    res.json(territoryList)
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`server ready \n\n[Territory Mockup]\n`)
})
