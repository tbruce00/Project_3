import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import './login.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../../utils/auth';


function Login(props) {
    const [formState, setFormState] = useState({ userName: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { userName: formState.userName, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div className="container my-1">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label className="label" htmlFor="username">GitHub Username: </label>
                    <input
                        placeholder="GitHub Username..."
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label className="label" htmlFor="pwd">GitHub Password: </label>
                    <input
                        placeholder=""
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />    
                </div>
                <div className="flex-row space-between my-3">
                    <a href="https://github.com/password_reset" target="_blank">
                        Forgot Password?
                    </a>
                </div>
                {error ? (
                    <div>
                        <p className="error-text">Incorrect Credentials. Try Again.</p>
                    </div>
                ) : null}
                <div className="flex-row flex-end">
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
