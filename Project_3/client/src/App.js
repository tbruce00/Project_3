import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Nav/navbar'
import Jumbotron from './components/Jumbotron/Jumbotron';
import Login from './components/Login/login';
import MyProfile from './components/MyProfile/myprofile';
import SignUp from './components/SignUp/signup';

 const httpLink = createHttpLink({
   uri: '/graphql',
 });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});




const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="App">
    <Navbar />
      <Jumbotron />
    <Switch>
      <Route exact path = "/" component={Profile}/>
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/signup" component={SignUp} />
      <Route exact path = "/myprofile" component={MyProfile} />
    </Switch>  
    </div>
    </Router> 
    </ApolloProvider>
  );
}

export default App;
