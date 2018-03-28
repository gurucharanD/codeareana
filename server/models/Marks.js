const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const marksSchema = new Schema({
  username: String,
  year: Number,
  section: String,
  week: Number,
  marks: [{
    qid: String,
    questionName: String,
    marksScored: Number,
    isAttempted: Boolean
  }],
  quizmarks:Number,
});

module.exports = mongoose.model('marks', marksSchema, 'marks');
