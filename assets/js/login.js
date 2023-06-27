const firebaseConfig = {
  apiKey: "AIzaSyDxDltzqh5eWWETRagQ_wHM4viKoK6mQFI",
  authDomain: "psychological-wellbeing-77ce9.firebaseapp.com",
  projectId: "psychological-wellbeing-77ce9",
  storageBucket: "psychological-wellbeing-77ce9.appspot.com",
  messagingSenderId: "30760490102",
  appId: "1:30760490102:web:0b2d178ea4bca01b47bb57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate input fields
  if (valid_pswd(password) === false) {
    alert("Password should be at least 6 characters long!");
    return;
  }
  if (valid_field(username) === false || valid_field(email) === false || valid_field(password) === false) {
    alert("Please fill in all the fields!");
    return;
  }

  // Move on with auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      const user = userCredential.user;
      const database_ref = database.ref();

      // Create user data
      const user_data = {
        username: username,
        email: email,
        password: password,
        last_login: Date.now(),
      };
      database_ref.child('users/' + user.uid).set(user_data);

      alert('User Created!');
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}


function valid_pswd(password) {
  return password.length >= 6;
}

function valid_field(field) {
  return field && field.length > 0;
}
