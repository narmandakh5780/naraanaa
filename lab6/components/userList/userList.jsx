/* eslint-disable no-unused-vars */
import React from "react";
import {
    Grid,
    Avatar,
    Tooltip,
    Divider,
    List,
    ListItemIcon,
    ListItemText,
    Typography,
    Menu,
    MenuItem
} from "@material-ui/core";
import "./userList.css";
import axios from "axios";
// import { cs142models } from "../../modelData/photoApp";
import { Link } from "react-router-dom";
import { type } from "os";
import FetchModel from "../../lib/fetchModelData";
import { useState, useEffect } from "react";
const UserList = () => {
    const [user, setUser] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        // FetchModel('/user/list').then(data=>{
        //   setUser(data)
        //   console.log(data+"fetch")
        // })
        axios.get("/user/list").then(data => {
            console.log(JSON.stringify(data) + "axios");
            setUser(data.data);
        });
    }, []);
    return (
        <div id="list">
            {user.map(user => {
                return (
                    <Link to={"/users/" + user._id} id="user" key={user._id}>
                        <Tooltip title={user.first_name + " " + user.last_name}>
                            <Avatar id="avatar">{user.first_name}</Avatar>
                        </Tooltip>

                        <Typography
                            id="typo"
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            {user.first_name}
                        </Typography>
                    </Link>
                );
            })}
        </div>
    );
};

export default UserList;
