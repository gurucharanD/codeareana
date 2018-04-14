const mongoose = require('mongoose');
var ttl = require('mongoose-ttl');


const Schema =  mongoose.Schema;
const RandomCodeSchema= new Schema({
    code:String,
    year:String,
    section:String,
    createdAt:Date
});
RandomCodeSchema.index({"createdAt": 1},{expireAfterSeconds: 1});
module.exports  =  mongoose.model('randomCode',RandomCodeSchema,'randomCode');