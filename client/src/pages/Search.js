import { Button, Grid, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Search() {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        const tmp = localStorage.getItem("Posts");
        if (tmp) {
            setPosts(JSON.parse(tmp));
        }
    }, []);

    const updateSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = (e) => {
        e.preventDefault();

        for (let post of posts) {
            if (post.title === search) {
                navigate(post.location);
                setSearch("");
            } else {
                setOpenSnackbar(true);
            }
        }
    };

    const handleCloseSnackbar = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackbar(false);
    };

    const action = (
        <Grid>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
            >
                <CloseIcon color="secondary" fontSize="small" />
            </IconButton>
        </Grid>
    );

    return (
        <Grid item component="form" onSubmit={getSearch}>
            <TextField
                id="search"
                label="Search posts"
                type="text"
                size="small"
                required
                value={search}
                onChange={updateSearch}
            />
            <Button type="submit" variant="contained" sx={{ ml: 0.5, mt: 0.2 }}>
                Search
            </Button>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1200}
                onClose={handleCloseSnackbar}
                message="Post not found"
                action={action}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            />
        </Grid>
    );
}
