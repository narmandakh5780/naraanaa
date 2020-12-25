/* eslint-disable no-unused-vars */
import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  CardActionArea,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import "./userDetail.css";
// import { cs142models } from "../../modelData/photoApp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchModel from '../../lib/fetchModelData'

const UserDetail = ({ match }) => {
  const [user, setUser]=useState({})
  useEffect(() => {
    FetchModel(`/user/${match.params.userId}`).then(data=>{
      setUser(data)
      console.log(data)
    })
  },[match.params.userId])
  return (
    <div>
      <Card id="card">
        <Avatar id="profile">{user.first_name}</Avatar>
        <CardActionArea id="">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.first_name} {user.last_name}
            </Typography>
          </CardContent>
          <Divider></Divider>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Location" secondary={user.location} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DescriptionOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Descriprion"
                  secondary={user.description}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkOutlineOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Occupation"
                  secondary={user.occupation}
                />
              </ListItem>
              <Link to={"/photos/" + user._id} id='user'>
              <ListItem id="user">
                <ListItemAvatar>
                  <Avatar>
                    <PhotoLibraryOutlinedIcon/>
                  </Avatar>
                </ListItemAvatar>
                
                  <ListItemText
                    primary="Posts"
                    secondary={"Photos of" + " "+user.last_name}
                  />
              </ListItem>
              </Link>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default UserDetail;
