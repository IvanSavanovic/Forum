import {
    AppBar,
    Box,
    Fab,
    Grid,
    ListItem,
    ListItemText,
    Toolbar,
} from "@mui/material";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import MenuButton from "./MenuButton";
import Search from "./Search";

export default function Blog() {
    const someTxt = "Category";

    const renderPost = () => {
        const postList = [someTxt];
        return (
            <ListItem>
                {postList.map((post, index) => (
                    <ListItemText key={index}>{post}</ListItemText>
                ))}
            </ListItem>
        );
    };

    return (
        <Grid sx={{ maxWidth: "xs", minHeight: "95vh" }}>
            <Box sx={{ display: "flex" }}>
                <Grid sx={{ flexDirection: "row" }}>
                    <AppBar color="default">
                        <Toolbar>
                            <Grid container>
                                <Grid item xs className="menuButton">
                                    <MenuButton />
                                </Grid>
                                <Search />
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
