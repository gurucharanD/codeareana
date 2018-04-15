const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const RandomCode = require('../models/RandomCode');
const Faculty = require('../models/Faculty');
const Admin = require('../models/Admin');
const Marks = require('../models/Marks');
const Question = require('../models/Question');
const Quiz = require('../models/Quiz');
var compile_run = require('compile-run');
const fs = require('fs');
const path = require('path');
var rimraf = require('rimraf');
var generator = require('generate-password');

const pythonDirectory = 'code/python';
const javaDirectory = 'code/java';



const router = express.Router();

const db = "mongodb://codearena:codearena@ds023613.mlab.com:23613/codearena";

mongoose.Promise = global.Promise;

mongoose.connect(db, (err) => {
  if (err) {
    console.log("error " + err);
  } else {
    console.log("connected to mongoose successfully at 3000");
  }

});


const app = express();


router.post('/getAnsweredQuestions', function (req, res) {
  console.log(req.body.username);
  Marks.find({
      username: req.body.username
    })
    .exec(function (err, questions) {
      if (err)
        console.log("error retrieving questions" + err);
      else {
        console.log(questions);
        return res.json(questions);
      }
    });


});



router.post('/getQuestions', function (req, res) {

  Question.find({
      week: req.body.week,
      year: req.body.year,
      section: req.body.section
    })
    .exec(function (err, questions) {
      if (err)
        console.log("error retrieving questions " + err);
      else {
        // console.log(questions);
        return res.json(questions);
      }
    });
});


router.post('/postQuestion', function (req, res) {
  console.log('posting a question');

  Question.findOne({
    name: req.body.name
  }, function (err, question) {
    if (err) {
      console.log(err);
      return {
        msg: "error"
      };
    }
    if (!question) {
      console.log(question);
      var newQuestion = new Question();
      newQuestion.name = req.body.name;
      newQuestion.question = req.body.question;
      newQuestion.week = req.body.week;
      newQuestion.year = req.body.year;
      newQuestion.input = req.body.input;
      newQuestion.section = req.body.section;
      newQuestion.output = req.body.output;
      newQuestion.postedBy = req.body.postedBy;
      newQuestion.save(function (err, insertedQuestion) {
        if (err) {
          console.log('error saving Question');
          res.json({
            'msg': 'Failed to post question'
          });
        } else {
          console.log("posted successfully");
          res.json({
            'msg': 'Question Posted Successfully'
          });

        }
      })
    } else {
      res.json({
        msg: 'Question already exists',
        result: 0
      });
    }

  });


})



router.post('/registerUser', function (req, res) {
  console.log("Register a user");

  var newUser = new User();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.secretKey = req.body.secretKey;
  newUser.year = req.body.year;
  newUser.section = req.body.section;
  newUser.marks = 0;

  User.find({
    username: newUser.username
  }, function (err, users) {
    if (users.length) {
      console.log("User already exists");
      res.json({
        'msg': 'User already exists'
      });
    } else {
      newUser.save(function (err, insertedUser) {
        if (err) {
          console.log("error Saving user " + err);
          res.json({
            'msg': 'Registration unsuccessful'
          });
        } else {
          console.log("Registration successful");
          res.json({
            'msg': 'Registration Successful'
          });
        }

      })
    }

  });
})

router.post('/studentLogin', function (req, res) {
  console.log("student login......");
  var response = {}
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
      console.log(err);
      return {
        msg: "error"
      };
    }
    if (!user) {
      console.log("invalid user");
      res.json({
        msg: "Invalid User",
        result: 0
      });
    } else {
      console.log("Valid User");
      res.json({
        msg: 'Login successful',
        result: 1,
        userDetails: user
      });
    }

  });
});


router.post('/facultyLogin', function (req, res) {
  console.log("Faculty login......");

  Faculty.findOne({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
      console.log(err);
      return {
        msg: "error"
      };
    }
    //  console.log(req.body.username);

    if (!user) {
      console.log("invalid user");
      res.json({
        'msg': 'Invalid User',
        'result': 0
      });
    } else {
      console.log("Valid User");
      res.json({
        'msg': 'Login successful',
        'value': user,
        'result': 1
      });
    }

  });
});

router.post('/facRegister', function (req, res) {

  Faculty.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) {
      console.log(err);
      return {
        msg: "error"
      };
    }
    if (user) {
      console.log("User Already Exists");
      res.json({
        'msg': 'User Already Exists',
        'result': 0
      });

    } else {
      console.log("Reistering user...");

      var newFaculty = new Faculty();
      newFaculty.username = req.body.username;
      newFaculty.password = req.body.password;
      newFaculty.sections = [];
      newFaculty.save(function (err, insertedFaculty) {
        if (err)
          throw err;
        else
          res.json({
            'msg': 'Registration successful ',
            'value': insertedFaculty,
            'result': 1
          });
      })
    }
  });
});


router.post('/compile', function (req, res) {
  var code = req.body.code;
  var lang = req.body.lang;
  var inp = req.body.input;
  console.log(inp);
  switch (lang) {
    case 1:
      compile_run.runPython(code, inp, function (stdout, stderr, err) {
        if (!err) {
          removeCompiledFiles(pythonDirectory);
          if (stderr)
            res.json(stderr);
          else
            res.json(stdout);
        } else {
          // console.log(err);
          res.json(err);
        }
      });
      break;
    case 2:
      compile_run.runJava(code, inp, function (stdout, stderr, err) {
        if (!err) {
          removeCompiledFiles(javaDirectory);
          if (stderr)
            res.json(stderr);
          else
            res.json(stdout);
        } else {
          // console.log(err);
          res.json(err);
        }
      });
      break;
  }
});



function removeCompiledFiles(dir) {
  rimraf(dir, function () {
    console.log('removing files done');
  });
}

router.post('/run', function (req, res) {

  console.log("calling run");

  var code = req.body.code;
  var lang = req.body.lang;
  var input = req.body.input;
  var result = [];
  console.log(lang);
  switch (lang) {
    case 1:
      //python code 
      calculatePython(code, input)
        .then(result => {
          removeCompiledFiles(pythonDirectory);
          console.log(result);
          res.json(result);
        })
        .catch(err => console.log("Error : " + err));
      break;
    case 2:
      calculateJava(code, input)
        .then(result => {
          removeCompiledFiles(javaDirectory);
          console.log(result);
          res.json(result);
        })
        .catch(err => console.log("Error : " + err));
      break;

  }
});

function calculatePython(code, input) {
  var promiseArray = input.map(inp => {
    return new Promise((resolve, reject) => {
      compile_run.runPython(code, inp, function (stdout, stderr, err) {
        if (!err) {
          if (stderr)
            resolve(stderr);
          else
            resolve(stdout);
        } else {

          reject(err)
        }
      })
    })
  })
  return Promise.all(promiseArray)
}



function calculateJava(code, input) {
  // console.log("111111111111111", input);
  var promiseArray = input.map(inp => {
    return new Promise((resolve, reject) => {
      compile_run.runJava(code, inp, function (stdout, stderr, err) {
        if (!err) {
          if (stderr)
            resolve(stderr);
          else
            resolve(stdout);
        } else {

          reject(err)
        }
      })
    })
  })
  return Promise.all(promiseArray)
}



router.post('/saveMarks', function (req, res) {
  // console.log("saving marks");
  let studentMarks = new Marks();
  studentMarks.username = req.body.username;
  studentMarks.year = req.body.year;
  studentMarks.section = req.body.section;
  studentMarks.week = req.body.week;
  studentMarks.marks = req.body.marks;
  // console.log(studentMarks);

  //user already..marks array push..
  // console.log(req.body.marks);
  studentMarks.save((err, updatedMarks) => {
    if (err)
      res.send("ERROR UPDATING Marks");
    else {
      const marksScored = req.body.marks[0].marksScored;
      console.log("marks scored  -------------", marksScored);
      updateMarksInUserTable(req.body.username, marksScored);
      res.json(updatedMarks);
    }
  });

});

let updateMarksInUserTable = (username, marksScored) => {

  User.findOne({
    username: username
  }, function (err, user) {
    if (err) {
      console.log(err);
      return {
        msg: "error"
      };
    }
    if (!user) {
      console.log("invalid user");
      res.json({
        msg: "Invalid User",
        result: 0
      });
    } else {
      console.log("Valid User");
      console.log("usermakes : ", user.marks);
      console.log("reqbodymarks: ", marksScored);
      let updatedMarks = user.marks + parseInt(marksScored);
      console.log("user : ", user);

      User.findOneAndUpdate({
        username: username
      }, {
        $set: {
          marks: updatedMarks
        }
      }, {
        new: true
      }, (err, updatedMarks) => {
        if (err)
          console.log("error while updating marks" + err);
        else
          console.log("marks updated succesfully");
      })
    };
  });
}

router.post('/updateMarks', function (req, res) {
  console.log("update marks");
  var username = req.body.username;
  var marks = req.body.marks;
  Marks.findOneAndUpdate({
      username
    }, {
      $set: {
        marks: marks
      }
    }, {
      new: true
    },
    function (err, updatedMarks) {
      if (err)
        res.send("ERROR UPDATING Marks");
      else
        return res.json({
          'msg': 'submitted successfully',
          'marks': updatedMarks
        });
    }
  );
});


router.post('/getMarks', function (req, res) {
  var year = req.body.year;
  // var week=req.body.week;
  var section = req.body.section;
  User.find({
      year,
      section
    })
    .exec(function (err, records) {
      if (err)
        console.log("error retrieving records" + err);
      else
        res.json(records);
    });
});


router.post('/filterMarks', function (req, res) {
  var year = req.body.year;
  var section = req.body.section;
  var marks = req.body.marks;
  var quizmarks = req.body.quizmarks;
  User.find({
      year,
      section,
      marks: {
        $gte: marks
      },
      quizmarks: {
        $gte: quizmarks
      }
    })
    .exec(function (err, records) {
      if (err)
        console.log("error retrieving records" + err);
      else
        res.json(records);
    });
});


router.post('/getStudentMarks', function (req, res) {
  var username = req.body.username;
  Marks.findOne({
      username
    })
    .exec(function (err, records) {
      if (err)
        console.log("error retrieving records" + err);
      else {
        res.json(records);
      }


    });
});



router.post('/adminRegister', function (req, res) {
  var newAdmin = new Admin();
  newAdmin.username = "admin";
  newAdmin.password = "admin";
  newAdmin.save(function (err, details) {
    if (err)
      res.json({
        'msg': 'Registration Failed'
      });
    else {
      res.json({
        'msg': 'Registration Successful'
      });
    }
  })
});

router.get('/getfaculty', (req, res) => {
  Faculty.find((err, faculty) => {
    res.send(faculty);
  })
})

router.post('/assignSection', function (req, res) {
  var facUserName = req.body.name;

  Faculty.findOneAndUpdate({
    username: facUserName
  }, {
    $addToSet: {
      map: req.body.map
    }
  }, {
    new: true
  }, function (err, doc) {
    if (err) {
      console.log("Something wrong when mapping data!");
    }
    console.log(doc);
    res.json(doc);
  });
});

router.post('/savequizmarks', (req, res) => {
  username = req.body.username;
  year = req.body.year;
  section = req.body.section;
  week = req.body.week;
  quizmarks = req.body.quizmarks;
  attemptedQuizWeek = req.body.attemptedQuizWeek;

  Marks.findOneAndUpdate({
      username: username,
      year: year,
      section: section,
      week: week
    }, {
      $set: {
        quizmarks: quizmarks
      }
    },
    (err, data) => {
      if (err) {
        res.json({
          'marks table error': err
        })
      } else {
        User.findOneAndUpdate({
          username: username,
          year: year,
          section: section
        }, {
          $inc: {
            quizmarks: quizmarks,
          },
          $push: {
            attemptedQuizWeeks: attemptedQuizWeek
          }
        }, (err, userdata) => {
          if (err) {
            res.json({
              'usertable error': err
            })
          } else {
            res.json({
              "userdata": userdata,
              "data": data
            })
          }

        })
      }
    })



})

router.post('/getAnsweredQuizWeeks', (req, res) => {
  User.findOne({
    username: req.body.username,
    year: req.body.year,
    section: req.body.section
  }, (err, data) => {
    console.log(data);
    if (err) console.log(err);
    res.json(data.attemptedQuizWeeks);
  });
})






router.post('/adminLogin', function (req, res) {

  Admin.findOne({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
      console.log(err);
      return {
        msg: "error"
      };
    }
    if (!user) {
      console.log("invalid user");
      res.json({
        msg: "Invalid User",
        result: 0
      });
    } else {
      console.log("Valid User");
      res.json({
        msg: 'Login successful',
        result: 1,
        userDetails: user
      });
    }

  });
});

router.post('/deleteSection', function (req, res) {
  console.log(req.body)
  var facUserName = req.body.name;


  Faculty.findOneAndUpdate({
    username: facUserName
  }, {
    $pull: {
      map: {
        year: req.body.year,
        section: req.body.section
      }
    }
  }, {
    new: true
  }, function (err, doc) {
    if (err) {
      console.log("Something wrong when mapping data!");
    }
    console.log(doc);
    res.json(doc);
  });
});

router.post('/postquiz', (req, res) => {
  var newQuizQuestion = new Quiz();

  newQuizQuestion.question = req.body.question;
  newQuizQuestion.week = req.body.week;
  newQuizQuestion.year = req.body.year;
  newQuizQuestion.section = req.body.section;
  newQuizQuestion.option_one = req.body.option_one;
  newQuizQuestion.option_two = req.body.option_two;
  newQuizQuestion.option_three = req.body.option_three;
  newQuizQuestion.option_four = req.body.option_four;
  newQuizQuestion.answer = req.body.answer;
  newQuizQuestion.postedBy = req.body.postedBy;

  newQuizQuestion.save(function (err, insertedQuestion) {
    if (err) {
      console.log('error saving Question');
      res.json({
        'error': 'Failed to post question'
      });
    } else {
      console.log("posted successfully");
      res.json({
        'msg': 'Question Posted Successfully'
      });

    }
  })
})


router.post('/showquiz', (req, res) => {
  year = req.body.year;
  section = req.body.section;
  week = req.body.week;

  Quiz.find({
    year: {
      $eq: year
    },
    section: {
      $eq: section
    },
    week: {
      $eq: week
    }
  }, (err, data) => {

    if (err) {
      res.json({
        "error": err
      })
    } else {
      res.json(data)
    }
  })
})




router.post('/answerquiz', (req, res) => {
  Quiz.find({

  }, (err, data) => {

  })
})

router.post('/generateCode', (req, res) => {
  let newCode = new RandomCode();
  newCode.section = req.body.section;
  newCode.year = req.body.year;
  let random_code = generator.generate({
    length: 5,
    numbers: true
  });
  newCode.code = random_code;
  newCode.createdAt = new Date();
  newCode.save((err, code) => {
    if (err) {
      throw err;
    } else {
      res.json(code);
    }
  });
})

router.post('/checkCodeValidity', (req, res) => {
  RandomCode.find({
    year: req.body.year,
    section: req.body.section,
    code:req.body.code
  }, (err,record) => {
    if(err){
      throw err;
    }
    else{
      res.json(record);
    }
  });
})








module.exports = router;
