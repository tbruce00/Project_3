import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Profile.css';
import Avatar from '../Profile/images/testimg3.jpg';
import { DiGithubFull } from "react-icons/di";
import firebase from 'firebase';
import { trackPromise } from 'react-promise-tracker';
import { render } from 'react-dom';
import { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';

const Profile = () => { 

  const [info , setInfo] = useState([]);


  window.addEventListener('load', () => {
    Fetchdata();
  });

// Fetch the required data using the get() method
const Fetchdata = ()=>{
  var db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
         
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            setInfo(arr => [...arr , data]);
              
        });
    })
}




    return (
    <List>
      {info.map((data) => (
    <ListItem alignItems="flex-start">
    <Card className="profileContainer" variant="outlined">
      <CardActions>
      <Button>
      <CardContent>

      <CardMedia
          component="img"
          alt="Profile Picture"
          height="140"
          src={data.avatarUrl}
          title="Profile Picture"
        />
        <Typography className="progTitle" variant="h5" component="h2" >
          {data.name}
        </Typography>
        <Typography  className="progLoc" > 
          {data.location}
        </Typography>
      </CardContent>
      
        </Button>
      </CardActions>
    </Card>
    </ListItem>
      ))}
  </List>
  )

}
export default Profile
