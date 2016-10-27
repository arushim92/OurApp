/*
*     Functions for all OAuth 2.0 providers
*
*/

//Sign in with Google functions
//Function to sign in
function onSignIn(googleUser) {
  window.location = "http://localhost:9000/welcome.html";
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

//Sign in with
