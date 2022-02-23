import {
    Box,
    Fab,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import CampaignIcon from "@mui/icons-material/Campaign";
import NewPost from "./NewPost";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";

export default function Announcements() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const tmp = localStorage.getItem("Posts");
        if (tmp) {
            setPosts(JSON.parse(tmp));
        }
    }, []);

    const addPost = (post) => {
        const newPosts = [...posts, post];
        setPosts(newPosts);
        localStorage.setItem("Posts", JSON.stringify(newPosts));
    };

    const renderPost = () => {
        console.log();

        return (
            <List sx={{ bgcolor: "#a0a0a00f" }}>
                {posts.map((post, i) => (
                    <ListItem key={i}>
                        <ListItemText>
                            <Typography variant="h5">{post.title}</Typography>
                            <Typography variant="body1">{post.text}</Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        );
    };

    return (
        <Grid sx={{ maxWidth: "xs", minHeight: "95vh" }}>
            <Box sx={{ display: "flex" }}>
                <Grid
                    component="header-container"
                    sx={{ flexDirection: "row" }}
                >
                    <Header />
                </Grid>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Toolbar id="back-to-top-anchor" />
                    <Grid
                        component="nav"
                        sx={{ display: "flex", flexDirection: "row" }}
                    >
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/Home"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                ml: 3,
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            HOME
                        </Link>
                    </Grid>
                    <Grid container sx={{ flexDirection: "column" }}>
                        <Grid item>
                            <ListItem sx={{ paddingBottom: 3 }}>
                                <ListItemIcon>
                                    <CampaignIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant="h4">
                                        Announcements
                                    </Typography>
                                </ListItemText>
                                <NewPost addPost={addPost} />
                            </ListItem>
                        </Grid>
                        <Grid item>{renderPost()}</Grid>
                    </Grid>
                    <Grid
                        component="footer-container"
                        sx={{
                            flexDirection: "column",
                            maxWidth: "100vw",
                        }}
                    >
                        <Footer />
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
