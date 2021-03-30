//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBecwy88NL7QxVrUuZyWi6yMYKM7goXjUY",
      authDomain: "kwitter-9f1f4.firebaseapp.com",
      databaseURL: "https://kwitter-9f1f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-9f1f4",
      storageBucket: "kwitter-9f1f4.appspot.com",
      messagingSenderId: "615300080257",
      appId: "1:615300080257:web:7a26e5154e34206b0f2380"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}