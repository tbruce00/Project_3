import React from 'react';
import firebase from 'firebase';
import auth from 'firebase/auth';


function SignUp(props) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = result.credential.accessToken;
            const user = firebase.auth(token).currentUser;
            const updateDB = (token, user.uid);
            // console.log(getUserInfo(token));
          });
        };

    return (
        <form onSubmit={handleSubmit}>
        <button type="submit" class="button"><span>Create Profile </span></button>
        </form>
    )
}
export default SignUp;
