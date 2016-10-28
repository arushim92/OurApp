/*
*     Functions for all OAuth 2.0 providers
*
*/

//Sign in with Google functions
//Function to sign in
function onSignIn(googleUser) {
  window.location = "http://localhost:9000/views/welcome.html";
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

//Function handling sign out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

//Sign in with Zendesk functions

//Function to get Url parameters
function getParameterByName(parameterName) {
  var result = null,
      tmp = [];
  location.search
  .substr(1)
      .split("&")
      .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  });
  return result;
}

//Function to check if access has been granted
function check(){
  if(getParameterByName('code') != null){
    window.location = "http://localhost:9000/views/welcome-zendesk.html";
  }else{
    window.location = "http://localhost:9000/views/error.html";
  }
}
