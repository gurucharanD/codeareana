const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const quizSchema= new Schema({
    
    week:Number,
    year:Number,
    section:String,
    question:String,
    option_one:String,
    option_two:String,
    option_three:String,
    option_four:String,
    answer:String,
    postedBy:String

});

module.exports  =  mongoose.model('quiz',quizSchema,'quiz');