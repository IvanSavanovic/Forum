import { AppBar, Box, Fab, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import MenuButton from "./MenuButton";
import Search from "./Search";
import Categories from "./Categories";
import Footer from "./Footer";

export default function Home() {
    return (
        <Grid sx={{ maxWidth: "xs", minHeight: "95vh" }}>
            <Box sx={{ display: "flex" }}>
                <Grid sx={{ flexDirection: "row" }}>
                    <AppBar color="default">
                        <Toolbar>
                            <Grid container>
                                <Grid item xs>
                                    <Typography variant="h4">
                                        Simple forum application
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ mt: 0.5 }}>
                                    <Search />
                                </Grid>
                                <Grid item sx={{ ml: 1 }}>
                                    <MenuButton />
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
                    <Grid container sx={{ flexDirection: "column" }}>
                        <Grid item>
                            <Categories />
                        </Grid>
                    </Grid>
                    <Grid
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
