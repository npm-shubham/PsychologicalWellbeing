const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 6969;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'your_database_name';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Perform validation and authentication logic
  // e.g., query the database for the user with the given username and password

  // Example code to connect to MongoDB and query the user collection
  MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Failed to connect to MongoDB:', err);
      res.sendStatus(500);
      return;
    }

    const db = client.db(dbName);

    // Example query to find a user by username and password
    db.collection('users').findOne({ username: username, password: password }, (err, result) => {
      if (err) {
        console.error('Error occurred while querying the database:', err);
        res.sendStatus(500);
        return;
      }

      if (result) {
        // User found, authentication successful
        res.sendStatus(200);
      } else {
        // User not found or invalid credentials
        res.sendStatus(401);
      }
    });

    client.close();
  });
});

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Perform validation and registration logic
  // e.g., insert a new user document into the database

  // Example code to connect to MongoDB and insert a new user
  MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Failed to connect to MongoDB:', err);
      res.sendStatus(500);
      return;
    }

    const db = client.db(dbName);

    // Example insert operation to add a new user
    db.collection('users').insertOne({ username: username, email: email, password: password }, (err, result) => {
      if (err) {
        console.error('Error occurred while inserting into the database:', err);
        res.sendStatus(500);
        return;
      }

      console.log('New user registered:', result.ops[0]);
      res.sendStatus(200);
    });

    client.close();
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
