import { Box, Fab, Grid, Toolbar } from "@mui/material";
import React from "react";
import ScrollToTop from "./ScrollToTop";

import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
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
                    <Grid container sx={{ flexDirection: "column" }}>
                        <Grid item>
                            <Categories />
                        </Grid>
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
