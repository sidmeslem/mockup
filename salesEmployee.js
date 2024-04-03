const express = require('express')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8087

var cors = require('cors')

const territoryObject = {
  "kind": "bigquery#queryResponse",
  "schema": {
    "fields": [
      {
        "name": "Territory_Name",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "Brand",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "user_email",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "Account_Manager",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "Account_Business_Partner",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "Sales_Organization",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "clean_customer",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "distribution_channel",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "division",
        "type": "STRING",
        "mode": "NULLABLE"
      },
      {
        "name": "Customer_pk",
        "type": "INTEGER",
        "mode": "NULLABLE"
      },
      {
        "name": "territory_pk",
        "type": "INTEGER",
        "mode": "NULLABLE"
      }
    ]
  },
  "jobReference": {
    "projectId": "emea-fieldforce-gbl-emea-pd",
    "jobId": "job_a3PUkzi2kqYssdQtfCbAiP7fWA9e",
    "location": "EU"
  },
  "totalRows": "10",
  "rows": [
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10046797"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "7319733654025139547"
        },
        {
          "v": "-7040600191377254629"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10044355"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "5909491961051319440"
        },
        {
          "v": "-2208018585804052766"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10048929"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "332604527649082352"
        },
        {
          "v": "5187119311983494135"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10076427"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "3590854574319959234"
        },
        {
          "v": "-5432333059111818271"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10055923"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "-6427028966223928210"
        },
        {
          "v": "-6196857809375014840"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10034026"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "7568373842575491774"
        },
        {
          "v": "200797795162464176"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10000551"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "6902472479562700602"
        },
        {
          "v": "-7644948500782474902"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10019784"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "828164671512731466"
        },
        {
          "v": "-6559015098892847682"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10033069"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "8172500252489157144"
        },
        {
          "v": "-443188090615127846"
        }
      ]
    },
    {
      "f": [
        {
          "v": "ES PPD 11113 DIEGO VOS"
        },
        {
          "v": "C2"
        },
        {
          "v": "diego.vos@loreal.com"
        },
        {
          "v": null
        },
        {
          "v": "Diego VOS"
        },
        {
          "v": "M850"
        },
        {
          "v": "10001176"
        },
        {
          "v": "20"
        },
        {
          "v": "20"
        },
        {
          "v": "-9114780413956646372"
        },
        {
          "v": "-4057966869336422957"
        }
      ]
    }
  ],
  "totalBytesProcessed": "7652138",
  "jobComplete": true,
  "cacheHit": false,
  "queryId": "job_a3PUkzi2kqYssdQtfCbAiP7fWA9e",
  "jobCreationReason": {
    "code": "REQUESTED"
  }
}


app.use(express.json())
app.use(cors())

router.get('/getList', function(req, res) {
    res.json(territoryObject)
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`server ready \n\n[Territory Mockup]\n`)
})
