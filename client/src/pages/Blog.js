import {
    AppBar,
    Box,
    Button,
    Fab,
    Grid,
    ListItem,
    ListItemText,
    TextField,
    Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import ScrollToTop from "./ScrollToTop";

export default function Blog() {
    const [prevPost, setPrevPost] = useState("");
    const rememberMe = localStorage.getItem("Remember me");
    const someTxt =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in arcu non enim imperdiet pellentesque ac eget libero. Cras ipsum massa, placerat vitae hendrerit consequat, fringilla eget turpis. Fusce lorem odio, lobortis non scelerisque in, porttitor vestibulum orci. Quisque imperdiet nisl quis erat fringilla, blandit finibus est placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque facilisis consectetur lectus quis tincidunt. Pellentesque sit amet ipsum eu ligula posuere auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida congue velit ac mattis. Curabitur eleifend fringilla dui, a convallis est convallis ut. Proin sit amet posuere nisi. Ut quis turpis vel eros porttitor iaculis. Fusce semper molestie dui ut fringilla. Nunc finibus facilisis diam, eu rutrum quam placerat vel.";

    const renderPost = () => {
        let postList = [someTxt, someTxt];
        let i = 0;
        for (let posts of prevPost) {
            postList.push(
                <ListItem key={i} id="post" component="div">
                    <ListItemText>{posts.post}</ListItemText>
                </ListItem>
            );
            i++;
        }
        return postList;
    };

    function logout() {
        if (rememberMe === false) {
            return;
        } else {
            localStorage.clear();
        }
    }

    return (
        <Grid sx={{ maxWidth: "xs", minHeight: "95vh" }}>
            <Box sx={{ display: "flex" }}>
                <Grid sx={{ flexDirection: "row" }}>
                    <AppBar color="default">
                        <Toolbar>
                            <Grid container>
                                <Grid item xs>
                                    <Grid>
                                        <Button
                                            href="/"
                                            variant="contained"
                                            sx={{ mt: 0.5 }}
                                            onClick={logout}
                                            size="small"
                                        >
                                            Logout
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="search"
                                        label="Search field"
                                        type="search"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Toolbar id="back-to-top-anchor" />
                    <Grid container>
                        <Grid item>{renderPost()}</Grid>
                    </Grid>
                    <ScrollToTop>
                        <Fab size="small" aria-label="scroll back to top">
                            UP
                        </Fab>
                    </ScrollToTop>
                </Box>
            </Box>
        </Grid>
    );
}
