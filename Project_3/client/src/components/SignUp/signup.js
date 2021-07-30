import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import '../Jumbotron/Jumbotron.css';
import { UPDATE_PROFILE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


function SignUp(props) {
    function getUserInfo(token) {
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
            // creates a current user object to retrieve user ID from firebase.
            const user = firebase.auth().currentUser;
            return response.json().then(function(json) {
                return {
                    _id: user.uid,
                    name: json.data.viewer.name,
                    email: json.data.viewer.email,
                    bio: json.data.viewer.bio,
                    location: json.data.viewer.location,
                    avatarUrl: json.data.viewer.avatarUrl,
                    websiteUrl: json.data.viewer.websiteUrl
                };
      });
        });
    }
    const [addProfile, { error }] = useMutation(UPDATE_PROFILE)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = result.credential.accessToken;
            // requests the user info from github using the access token
            getUserInfo(token).then(function(userInfo) {

              try{
                const { data } = addProfile({
                  variables: { userInfo }
                })
              } catch (error){
                console.log(error);
              }
              // TO DO: Replace console.log of userInfo with database write
                // access userInfo fields with .name, .email etc.
                // console.log(userInfo);
            });
          });
        };
    return (
        <form onSubmit={handleSubmit}>
        <button class="button">Create Your Profile Card</button>
        </form>
    )
}
export default SignUp;