import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Profile.css';
import { useQuery } from '@apollo/client';

// function Profile() {
//   // const { data } = useQuery(Query_USER);
//   let user;

//   if(data) {
//     user = data.user;
//   }


export default function Profile() {
  

  return (
    <Card className="profileContainer" variant="outlined">
      <CardActions>
      <Button>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Programmer Name:
          {/* {user.firstName} {user.lastName} */}
        </Typography>
        <Typography  color="textSecondary">
          Programmer city here:
          {/* {user.location} */}
        </Typography>
      </CardContent>
      
        </Button>
      </CardActions>
    </Card>
  );
  }

