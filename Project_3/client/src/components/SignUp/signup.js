import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

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
            query: "query { viewer { name email location login url websiteUrl bio avatarUrl} }"
          })
        };
        return fetch(url, options).then(function(response) {
          return response.json();
      });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = result.credential.accessToken;
            console.log(getUserInfo(token));
          });
        };
    return (
        <form onSubmit={handleSubmit}>
        <button class="button"> makeProfile<span className="parenthesisColor" >()</span> </button>
        </form>
    )
}
export default SignUp;