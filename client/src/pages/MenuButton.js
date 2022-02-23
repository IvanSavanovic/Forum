import { Avatar, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuButton() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const rememberMe = localStorage.getItem("Remember me");
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function logout() {
        if (rememberMe === "true") {
            navigate("/");
        } else {
            localStorage.clear();
            navigate("/");
        }
    }

    return (
        <Grid>
            <IconButton
                variant="contained"
                id="menu-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <Avatar sx={{ width: 28, height: 28, bgcolor: blue[500] }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </Grid>
    );
}
