const firebaseConfig = {
    apiKey: "AIzaSyB92GLA5_gqLBNFicPMwIDzxz829vSMm0Y",
    authDomain: "trys-51749.firebaseapp.com",
    projectId: "trys-51749",
    storageBucket: "trys-51749.firebasestorage.app",
    messagingSenderId: "982268887501",
    appId: "1:982268887501:web:697a6121cd68b085838484"
  };

  firebase.initializeApp(firebaseConfig);

function redirectToRoomName(name){
	console.log("Name is"+name);
    var newstr = name.replace(/-/g, " ");
	localStorage.setItem("OpenedRep", newstr);
	console.log("Success");
	window.location = "question.html";
}

function addRoomss(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_room.html";
}
