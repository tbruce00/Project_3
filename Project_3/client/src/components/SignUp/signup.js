import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import '../Jumbotron/Jumbotron.css';
//import { ADD_USER } from '../../utils/mutations';
//import { useMutation } from '@apollo/client';
// import auth from '../../utils/auth';



function SignUp(props) {
    function getUserInfo(token, uid) {
      var db = firebase.firestore();
      var userRef = db.collection("users");
        // get the user info the the github graphql api
        var url = "https://api.github.com/graphql";
        var headers = {
          "Authorization": "Bearer " + token
        };
        var options = {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            query: "query { viewer { name email location websiteUrl bio avatarUrl} }"
          })
        };
        return fetch(url, options).then(function(response) {
            return response.json().then(function(json) {

              userRef.doc(uid).set({
                name: json.data.viewer.name,
                email: json.data.viewer.email,
                bio: json.data.viewer.bio,
                location: json.data.viewer.location,
                avatarUrl: json.data.viewer.avatarUrl,
                websiteUrl: json.data.viewer.websiteUrl
              });
                  // name: json.data.viewer.name,
                  // email: json.data.viewer.email,
                  // bio: json.data.viewer.bio,
                  // location: json.data.viewer.location,
                  // avatarUrl: json.data.viewer.avatarUrl,
                  // websiteUrl: json.data.viewer.websiteUrl
        });
      });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          const token = result.credential.accessToken;
          const user = firebase.auth().currentUser;
          getUserInfo(token, user.uid).then(function(user) {
            
          })
        })
      };
    return (
        <form onSubmit={handleSubmit}>
        <button class="button">Create Your Profile Card</button>
        </form>
    )
}
export default SignUp;