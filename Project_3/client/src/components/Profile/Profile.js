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
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["test"],
      locations: ["test"],
      avatars: ["test"],
      loading: true
    };
  }
  // Profile TODO - EVERYTHING COMMENTED OUT NEEDS TO BE MAPPED, APP CRASHES UNTIL THIS IS FIXED
  // const { data } = useQuery(QUERY_USER);
  // let user;
  // if(data) {
  //   user = data.user;
  // }
  getUsers() {
    var db = firebase.firestore();
    trackPromise(
    db.collection('users').get()
      .then(querySnapshot => this.setState({
        names : querySnapshot.docs.forEach(doc => {this.state.names.push(doc.data().name)
        }),
        locations : querySnapshot.docs.forEach(doc => {this.state.locations.push(doc.data().location)
        }),
        avatars : querySnapshot.docs.forEach(doc => {this.state.avatars.push(doc.data().avatar)
        }),
        loading: false
      }))
    );
  }
render() {
  this.getUsers()
    return (
    <List>
    {users.map((user,i) => (
    <ListItem alignItems="flex-start" key={i}>
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
          {this.state.user.name}
        </Typography>
        <Typography  className="progLoc" > 
          Programmer Location:
          {this.state.user.location}
        </Typography>
      </CardContent>
        </Button>
      </CardActions>
    </Card>
    </ListItem>
    )
    )}
</List>)
}
export default Profile