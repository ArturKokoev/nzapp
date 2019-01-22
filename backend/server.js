import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Issues from './models/Issues';
import {isBuffer} from 'util';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = process.env.MONGODB_URI ;
//var url = "mongodb://localhost:27017/issues";
client.connect(url, function (err, client) {
    
    var db = client.db("issues");
    var collection = db.collection("issues");


var options = {
    allowDiskUse: false
};

var pipeline1 = [
    {
        "$match": {
            "post_meta.city": {
                "$exists": true,
                "$ne": ""
            },
            "post_meta.latlng.lat": {
                "$exists": true,
                "$ne": 0
            },
            "post_meta.latlng.lng": {
                "$exists": true,
                "$ne": 0
            }
        }
    }, 
    {
        "$group": {
            "_id": {
                "city": "$post_meta.city",
                "lat": "$post_meta.latlng.lat",
                "lng": "$post_meta.latlng.lng"
            },
            "count": {
                "$sum": 1.0
            }
        }
    }, 
    {
        "$sort": {
            "count": -1.0
        }
    }
];
var pipeline2 = [
    { 
        
        "$match": {
        "post_meta.city": {
            "$exists": true,
            "$ne": ""
        },
        "post_meta.latlng.lat": {
            "$exists": true,
            "$ne": 0
        },
        "post_meta.latlng.lng": {
            "$exists": true,
            "$ne": 0
        }
    }
}, 
   {
        "$group": {
            "_id": {
                "city": "$post_meta.city",
                "lat": "$post_meta.latlng.lat",
                "lng": "$post_meta.latlng.lng",
                "post_date": "$post_date"
            },
            "count": {
                "$sum": 1
            }
        }
    }, 
    {
        "$sort": {
            "count": -1
        }
    }
];



    router.route('/issues').get((req, res) => {
    
  collection.aggregate(pipeline1, options).toArray(function(err, issues){
        if (err) throw err;
        res.json(issues); });
    });
    
    router.route('/postcontent').get((req, res) => {
    
        collection.aggregate(pipeline2, options).toArray(function(err, issues){
              if (err) throw err;
              res.json(issues); });
          });
          
    
});


app.use('/', router);

var server = process.env.PORT || 8080, function(){
    var port = server.adress().port;
    console.log("app runnning on port", port);
} ;

//app.listen(port, () => console.log('Express server running on port 8080'));