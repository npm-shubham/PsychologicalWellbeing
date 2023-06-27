// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxDltzqh5eWWETRagQ_wHM4viKoK6mQFI",
  authDomain: "psychological-wellbeing-77ce9.firebaseapp.com",
  projectId: "psychological-wellbeing-77ce9",
  storageBucket: "psychological-wellbeing-77ce9.appspot.com",
  messagingSenderId: "30760490102",
  appId: "1:30760490102:web:0b2d178ea4bca01b47bb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function register()
{
  username = document.getElementById('username').value
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  //validate input fields
  if(valid_pswd(password) == false) {
    alert("Something is nor right!!!")
    return
  }
  if (valid_field(username) == false || valid_field(email) == false || valid_field(password) == false) {
    alert("Fill'em all!!")
    return
  }

  //Move on with auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser
    var database_ref = database.ref()

    //create user data
    var user_data = {
      username : username,
      email : email,
      password : password,
      last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)

    alert('User Created!!')
  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })

}

function valid_pswd() {
  if (password<6) {
    return false
  } else {
    return true
  }
}

function valid_field() {
  if (field == null) {
    return false
  }
  if (field.length <=0) {
    return false
  } else {
    return true
  }
}