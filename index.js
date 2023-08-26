const express = require("express")
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
//app.use(bodyParser.urlencoded({ extended: true }));

let curruser = "admingod"

//index.html
app.use(express.static(__dirname + '/src/assets'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get("/profile", (req, res) => {
    res.sendFile(__dirname + '/src/profile.html')
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/src/login.html')
})

app.get("/portfolio-details", (req, res) => {
    res.sendFile(__dirname + '/src/portfolio-details.html')
})

app.get("/questionaire",(req, res) => {
  res.sendFile(__dirname + '/src/questionaire.html')
})

// Route for fetching assessment data
app.get('/get-assessment/:username', (req, res) => {
  const username = curruser;
  const mongoUrl = 'mongodb+srv://shubham487:shubham487@cluster0.tjdpjef.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'psywellbeing' ;

  // Connect to MongoDB
  MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      console.log("Connected to MongoDb Atlas");
      const db = client.db(dbName);
      const collection = db.collection("users");

      // Fetch the user's assessment data from the database based on the username
      collection.findOne({ username: username })
        .then((result) => {
          if (result) {
            console.log("Assessment data fetched successfully.");
            res.json(result.assessments);
          } else {
            console.log("User not found!");
            res.status(404).json({ error: 'User not found' });
          }
        })
        .catch((error) => {
          console.error("Error fetching assessment data:", error);
          res.status(500).json({ error: 'Error fetching assessment data' });
        })
        .finally(() => {
          client.close();
        });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      res.status(500).json({ error: 'Error connecting to MongoDB' });
    });
});


//login.html
//sign-up Authentication
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const mongoUrl = 'mongodb+srv://shubham487:shubham487@cluster0.tjdpjef.mongodb.net/?retryWrites=true&w=majority';
    const dbName = 'psywellbeing';

    MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then((client) => {
      console.log("Connected to MongoDb Atlas");
      const db = client.db(dbName);
      const collection = db.collection("users");
      curruser = username;
  
      // Check if the username or email already exists
      collection.findOne({ $or: [{ username: username }, { email: email }] }).then((result) => {
        if (result) {
          console.log("Username or email already exists!");
          res.send('<script>alert("Username or email already exists!"); window.location="/login";</script>');
        } else {
          const data = { username: username, email: email, password: password };
          collection.insertOne(data).then((result) => {
            console.log("Inserted data successfully.")
            res.sendFile(__dirname + '/src/login.html');
          }).catch((error) => {
            console.log(error);
          }).finally(() => {
            client.close();
          });
        }
      }).catch((error) => {
        console.log(error);
        res.status(500).send('Internal Server Error');
      });
    }).catch((error) => {
      console.log(error);
      res.status(500).send('Internal Server Error');
    });
});

//sign-in
app.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const mongoUrl = 'mongodb+srv://shubham487:shubham487@cluster0.tjdpjef.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'psywellbeing';

  MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology:true}).then((client) => {
    console.log("Connected to MongoDb Atlas");
    const db = client.db(dbName);
    const collection = db.collection("users");
    const data = {username: username, password: password};
    
    collection.findOne(data).then((result) => {
      if (result) {
        console.log("User Found!");
        curruser = username;
        res.sendFile(__dirname + '/src/index.html');
      } else {
        console.log("User Not Found!");
        res.send('<script>alert("User not found!"); window.location="/login";</script>');
      }
    }) .catch((error) => {
      console.log(error);
    }) .finally(() => {
      client.close();
    })
  }) .catch((error) => {
    console.log(error)
  })
});

// Route for saving assessments
app.post('/save-assessments', (req, res) => {
  //console.log("in save-assesment")
  const assessmentsData = req.body;
  const username = curruser;
  const mongoUrl = 'mongodb+srv://shubham487:shubham487@cluster0.tjdpjef.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'psywellbeing';
  //console.log(assessmentsData.assessments);

  // Connect to MongoDB
  MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      console.log("Connected to MongoDb Atlas");
      const db = client.db(dbName);
      const collection = db.collection("users"); 

      // Save the assessment data to the database
      collection.updateOne(
        { username: username },
        { $set: { assessments: assessmentsData.assessments } },
      )
        .then(() => {
          console.log("Assessment data saved successfully.");
          res.json({ message: 'Assessments saved successfully!' });
        })
        .catch((error) => {
          console.error("Error saving assessment data:", error);
          res.status(500).json({ error: 'Error saving assessment data' });
        })
        .finally(() => {
          client.close();
        });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      res.status(500).json({ error: 'Error connecting to MongoDB' });
    });
});

app.get('/get-assessment', (req, res) => {
  const username = curruser;
  const mongoUrl = 'mongodb+srv://shubham487:shubham487@cluster0.tjdpjef.mongodb.net/?retryWrites=true&w=majority';
  const dbName = 'psywellbeing';

  MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      console.log("Connected to MongoDB");
      const db = client.db(dbName);
      const collection = db.collection("users");

      collection.findOne({ username: username })
        .then((result) => {
          if (result) {
            console.log("Assessment data fetched successfully.");
            res.json({username: username, assessments: result.assessments });
          } else {
            console.log("User not found!");
            res.status(404).json({ error: 'User not found' });
          }
        })
        .catch((error) => {
          console.error("Error fetching assessment data:", error);
          res.status(500).json({ error: 'Error fetching assessment data' });
        })
        .finally(() => {
          client.close();
        });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      res.status(500).json({ error: 'Error connecting to MongoDB' });
    });
});


//start the server
app.listen(6969, () => {
    console.log("Log onto `http://localhost:6969/` to see full website")
})
