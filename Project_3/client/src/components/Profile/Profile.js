import React from 'react';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Profile.css';
import Avatar from '../Profile/images/testimg3.jpg';
// import { DiGithubFull } from "react-icons/di";
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';

function Profile() {

  // Profile TODO - EVERYTHING COMMENTED OUT NEEDS TO BE MAPPED, APP CRASHES UNTIL THIS IS FIXED

  // const { data } = useQuery(QUERY_USER);
  // let user;

  // if(data) {
  //   user = data.user;
  // }

  return (
    // <List>
    // {user.map((user) => (
    //   <ListItem alignItems="flex-start">
    <Card className="profileContainer" variant="outlined">
      <CardActions>
      <Button>
      <CardContent>
      <CardMedia
          component="img"
          alt="Profile Picture"
          height="140"
          image={Avatar}
          title="Profile Picture"
        />
        <Typography className="progTitle" variant="h5" component="h2" >
          Programmer Name:
          {/* {user.firstName} {user.lastName} */}
        </Typography>
        <Typography  className="progLoc" > 
          Programmer Location:
          {/* {user.location} */}
        </Typography>
      </CardContent>
      
        </Button>
      </CardActions>
    </Card>
  );
  }

  export default Profile
