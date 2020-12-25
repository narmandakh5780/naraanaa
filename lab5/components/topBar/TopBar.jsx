import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./TopBar.css";
// import { cs142models } from "../../modelData/photoApp";
import { useLocation } from "react-router-dom";
import FetchModel from "../../lib/fetchModelData";

const TopBar = () => {
    const location = useLocation();
    const [name, setName] = useState(" ");
    const myName = "Narmandakh";
    useEffect(() => {
        if (location.pathname != "/") {
            let arr = location.pathname.split("/");
            FetchModel(`/user/${arr[2]}`).then(data => {
                const user = data;
                const page = arr[1] === "users" ? "Details" : "Photos";
                setName(`${page} of ${user.first_name} ${user.last_name}`);
            });
        }
    });

    return (
        <AppBar className="cs142-topbar-appBar" position="absolute">
            <Toolbar id="nav">
                <Typography variant="h5" color="inherit">
                    {myName}
                </Typography>
                <Typography variant="h5" color="inherit">
                    {name}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
