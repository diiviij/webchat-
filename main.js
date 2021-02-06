var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
         document.getElementById('imgProfile').src= firebase.auth().currentUser.photoURL;
         document.getElementById('imgProfile').title= firebase.auth().currentUser.displayName;
         nameuser = document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;
      
         document.getElementById('p1').innerHTML = nameuser;
            
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("mainpage.html");
        }
      });
}
    
init();

mainApp.logout = logtout;
})();

function onFirebaseStateChanged(){
    firebase.auth().onAuthStateChanged(onStateChanged);
}
function onStateChanged(user){
 if(user) {
        document.getElementById('imgProfile').src= firebase.auth().currentUser.photoURL;
}
}
