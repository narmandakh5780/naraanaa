/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Typography,
  CardMedia,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  ListItemText,
  ListItemAvatar,
  ListItem,
  Avatar,
  Paper
} from "@material-ui/core";
// import { cs142models } from "../../modelData/photoApp";
import "./userPhotos.css";
import FetchModel from '../../lib/fetchModelData'
import { Link, useParams } from "react-router-dom";

const UserPhotos = ({ match }) => {
  const [users, setUser]=useState([])
  useEffect(() => {
    FetchModel(`/photosOfUser/${match.params.userId}`).then(data=>{
      setUser(data)
      console.log(data)
    })
  },[match.params.userId])

  return (
    <div>
 
      {users.map(user => {
        if (user.comments) {
          // let com = user.comments.filter(el => user._id === el.photo_id);
          return (
            <Card key={user._id} id="card">
              <CardActionArea >
                <CardMedia
                  component="img"
                  image={"../../images/" + user.file_name}
                  id="photo"
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    Posted on: {user.date_time}
                  </Typography>
                </CardContent>
                <CardContent  >
                  <List>
                    {user.comments.map(comm => {
                      return (
                        <ListItem key={comm._id} divider id="cards">
                          <ListItemAvatar>
                            <Link to={"/users/" + comm.user._id}>
                              <Avatar>{comm.user.first_name[0]}</Avatar>
                            </Link>
                          </ListItemAvatar>
                          <ListItemText
                            primary={comm.comment}
                            secondary={comm.date_time}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </CardActionArea>
              <CardActions>{}</CardActions>
            </Card>
          );
        } else {
          return (
            <Card key={user._id} id="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={"../../images/" + user.file_name}
                />
                <CardContent >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Posted on: {user.date_time}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default UserPhotos;
