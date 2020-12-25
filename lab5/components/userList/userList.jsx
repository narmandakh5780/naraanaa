/* eslint-disable no-unused-vars */
import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import "./userList.css";
import { cs142models } from "../../modelData/photoApp";
import { Link } from "react-router-dom";
import { type } from "os";
import FetchModel from '../../lib/fetchModelData'
import {useState, useEffect} from  'react'
const UserList = () => {
  const [user, setUser]=useState([])
  useEffect(() => {
    // FetchModel('/user/list').then(data=>{
    //   setUser(data)
    //   console.log(data);
    // })
    setUser(cs142models.userListModel())
  }, [])
  return (
    <div>
      <Typography variant="h5" component="h2">
          Users
      </Typography>
      <List component='menu'>
        {user.map(user => {
          return (
            <ListItem key={user._id} divider>
              <Link to={"/users/" + user._id} id="user">
                <ListItemText 
                  primary={user.first_name + " " + user.last_name}
                ></ListItemText>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default UserList;
