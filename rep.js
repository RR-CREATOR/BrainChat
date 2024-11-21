const firebaseConfig = {
    apiKey: "AIzaSyB92GLA5_gqLBNFicPMwIDzxz829vSMm0Y",
    authDomain: "trys-51749.firebaseapp.com",
    projectId: "trys-51749",
    storageBucket: "trys-51749.firebasestorage.app",
    messagingSenderId: "982268887501",
    appId: "1:982268887501:web:697a6121cd68b085838484",
	databaseURL: "https://trys-51749-default-rtdb.firebaseio.com"
  };
  firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("userName");
    localStorage.removeItem("OpenedRep");
    window.location = "index.html";
}


var room_name = localStorage.getItem("OpenedRep");
var user_name = localStorage.getItem("userName");

document.getElementById("output2").innerHTML = room_name;

proffession = localStorage.getItem("Prof");

function messages(){
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    })
    msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                //like:0,
                writtenBy: proffession,
                image: false
          });

          document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output10").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name = message_data['name'];
 message = message_data['message'];
 images = message_data['image'];
 wrote = message_data['writtenBy'];
 console.log("mesasge"+message);
 //like = message_data['like'];
 name_with_tag = "<h4>" + name + "</h4>";
 //like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
 //span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

 if(wrote == "teacher"){
    message_with_tag = "<h4 class='message_h4_bold'>" + message + "</h4>";
} else{
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
}

if(images == true){
    image_url = message_data['Link'];
    image_display = "<img onclick='preview(this.src)' class='imagenew' style='width: auto; height: 100px; border: 2px solid black;' src=" + image_url + ">";
    row = "<div class='newdiv'>"+name_with_tag + image_display +"<hr>"+"</div>";
} else{
    row = name_with_tag + message_with_tag +"<hr>";
}

 console.log(room_name);
 answer = room_name;
 document.getElementById("output2").innerHTML = answer;
 document.getElementById("output10").innerHTML += row;
 document.getElementById("myImg").src = "";
//End code
 } });  }); }


getData();

/*function updateLike(message_id){
 console.log("clicked on button - " + message_id);
 button_id = message_id;
 //likes = document.getElementById(button_id).value;
 //updated_likes = Number(likes) + 1;
 //console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
       like: updated_likes
 });
}*/

function home(){
    localStorage.removeItem("OpenedRep");
    window.location = "home_page.html";
}