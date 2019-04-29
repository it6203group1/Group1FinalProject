const mongoose = require('mongoose');
const Account = require('./models/account')
var adController = require('./controllers/adController');
const Tpst = require('./models/post')
const Picture = require('./models/Picture')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//mongoose.connect('mongodb://localhost:27017/socialDB', { useNewUrlParser: true })
//  .then(() => { console.log("connected"); })
//  .catch(() => { console.log("error connecting"); });

mongoose.connect('mongodb+srv://matt_ray:mattray@group1db-n8tmj.mongodb.net/Group1db?retryWrites=true')
   .then(() => {
     console.log('Successfully connected to MongoDB Atlas!');
   })
   .catch((error) => {
     console.log('Unable to connect to MongoDB Atlas!');
     console.error(error);
   });

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});
app.get('/accounts', (req, res, next) => {
  //call mongoose method find (MongoDB db.Accounts.find())
  Account.find()
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /accounts
app.post('/accounts', (req, res, next) => {
  // create a new account variable and save request’s fields 
  const account = new Account({
    socialPlatform: req.body.socialPlatform,
    userName: req.body.userName,
    password: req.body.password
  });
  //send the document to the database 
  account.save()
    //in case of success
    .then((data) => { console.log('Success'); res.json(data); })
    //if error
    .catch(err => { console.log('Error:' + err); });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/accounts/:id", (req, res, next) => {
  Account.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

// serve incoming put requests to /accounts
app.put('/accounts/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new socialplatform, username, passwords
    Account.findOneAndUpdate({ _id: req.params.id },
      {
        $set: {
          socialPlatform: req.body.socialPlatform,
          userName: req.body.userName, password: req.body.password
        }
      }, { new: true })
      .then((account) => {
        if (account) { //what was updated
          console.log(account);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }
});






app.get('/textpage', (req, res, next) => {
  Tpst.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

app.post('/textpage', (req, res, next) => {
  const pst = new Tpst({ txtPost: req.body.txtPost });
  //send the document to the database 
  pst.save()

    //in case of success
    .then(() => { console.log('New Post Added Successfully'); })
    //if error
    .catch(err => { console.log('Error:' + err); });
});

app.delete("/textpage/:id", (req, res, next) => {
  Tpst.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Your Post is Deleted!");
  });
});


app.put('/textpage/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Tpst.findOneAndUpdate({ _id: req.params.id },
      { $set: { txtPost: req.body.txtPost } }, { new: true })
      .then((pst) => {
        if (pst) { //what was updated
          console.log(pst);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }

});

// Jose's API Endpoints
app.get('/api/v1/pictures', function (req, res) {
  Picture.find({}, function (err, pictures) {
    if (err)
      sendError(err, res);
    response.data = pictures;
    res.json(response);
  });
});

app.post('/api/v1/picture', function (req, res) {
  let user = new Picture({
    'name': req.body.name,
    'photoURL': req.body.photoURL
  });

  user.save((err) => {
    if (err)
      sendError(err, res);
    response.data = 'Picture created';
    res.json(response);
  });
});

app.delete('/api/v1/picture/:userid', function (req, res) {
  let userId = req.params.userid;

  Picture.findByIdAndRemove(userId, function (err, user) {
    if (err)
      sendError(err, res);
    response.data = 'Picture deleted'
    res.json(response);
  });
});


app.use('/api/v1/ads', adController);

//to use this middleware in other parts of the application
module.exports = app;


