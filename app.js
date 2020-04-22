const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'BayRouteWaterTaxi';
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the server
client.connect(function(err) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('Users');


    const obj = [{
            "Full Name": "Taha Yaseen",
            "Email": "taha@gmail.com",
            "Password": "taha",

            "Phone Number": "81641660",
            "Credit Card ": [{
                "_id": "1",
                "Balance": "10,000",
                "Card Number": "0000 0000 0000 0001"
            }]
        },
        {
            "Full Name": "Nabil Hasanieh",
            "Email": "nabil@gmail.com",
            "Password": "nabil",

            "Phone Number": "79305971",
            "Credit Card ": [{
                "_id": "2",
                "Balance": "20,000",
                "Card Number": "0000 0000 0000 0002"
            }, ]
        },
        {
            "Full Name": "Abdelhadi Nahouli",
            "Email": "abed@gmail.com",
            "Password": "abed",

            "Phone Number": "76071380",
            "Credit Card ": [{
                "_id": "3",
                "Balance": "15,000",
                "Card Number": "0000 0000 0000 0003"
            }, ]
        },
        {
            "Full Name": "Rola Osta",
            "Email": "rola@gmail.com",
            "Password": "rola",

            "Phone Number": "81948007",
            "Credit Card ": [{
                "_id": "4",
                "Balance": "10,000",
                "Card Number": "0000 0000 0000 0004"
            }, ]
        },
    ];
    collection.insertMany(
        obj, (err, res) => {
            if (err)
                console.log(err)
        })


    client.close();

});