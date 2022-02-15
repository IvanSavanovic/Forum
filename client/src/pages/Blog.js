import {
    AppBar,
    Box,
    Button,
    Drawer,
    Fab,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import ScrollToTop from "./ScrollToTop";

export default function Blog() {
    const drawerWidth = 140;

    return (
        <Grid sx={{ maxWidth: "xs", minHeight: "95vh" }}>
            <Box sx={{ display: "flex" }}>
                <Grid sx={{ flexDirection: "row" }}>
                    <AppBar color="default">
                        <Toolbar>
                            <Grid container>
                                <Grid item xs></Grid>
                                <Grid item>
                                    <TextField
                                        id="search"
                                        label="Search field"
                                        type="search"
                                    />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar>
                        <Button href="/" variant="contained" sx={{ mt: 1 }}>
                            BACK
                        </Button>
                    </Toolbar>
                    <List>
                        {[
                            "Groups very long name",
                            "Group1",
                            "Group2",
                            "Group3 ",
                            "Group4",
                        ].map((text) => (
                            <ListItemButton href={"/" + { text }} key={text}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <Toolbar id="back-to-top-anchor" />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum
                        quisque non tellus. Consequat mauris nunc congue nisi
                        vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum
                        integer enim neque volutpat ac tincidunt. Ornare
                        suspendisse sed nisi lacus sed viverra tellus. Purus sit
                        amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget
                        egestas purus viverra accumsan in. In hendrerit gravida
                        rutrum quisque non tellus orci ac. Pellentesque nec nam
                        aliquam sem et tortor. Habitant morbi tristique senectus
                        et. Adipiscing elit duis tristique sollicitudin nibh
                        sit. Ornare aenean euismod elementum nisi quis eleifend.
                        Commodo viverra maecenas accumsan lacus vel facilisis.
                        Nulla posuere sollicitudin aliquam ultrices sagittis
                        orci a. Convallis convallis tellus id interdum velit
                        laoreet id donec ultrices. Odio morbi quis commodo odio
                        aenean sed adipiscing. Amet nisl suscipit adipiscing
                        bibendum est ultricies integer quis. Cursus euismod quis
                        viverra nibh cras. Consequat mauris nunc congue nisi
                        vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum
                        integer enim neque volutpat ac tincidunt. Odio morbi
                        quis commodo odio aenean sed adipiscing. Amet nisl
                        suscipit adipiscing bibendum est ultricies integer quis.
                        Cursus euismod quis viverra nibh cras. Metus vulputate
                        eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Elementum
                        eu facilisis sed odio morbi. Euismod lacinia at quis
                        risus sed vulputate odio. Morbi tincidunt ornare massa
                        eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque
                        nec nam aliquam sem et tortor. Habitant morbi tristique
                        senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Cras tincidunt lobortis feugiat vivamus at
                        augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi
                        tincidunt. Lorem donec massa sapien faucibus et molestie
                        ac. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris.
                        Elementum eu facilisis sed odio morbi. Euismod lacinia
                        at quis risus sed vulputate odio. Morbi tincidunt ornare
                        massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac.
                        Pellentesque nec nam aliquam sem et tortor. Habitant
                        morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod
                        elementum nisi quis eleifend. Consequat mauris nunc
                        congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar
                        elementum integer enim neque volutpat ac tincidunt. Odio
                        morbi quis commodo odio aenean sed adipiscing. Amet nisl
                        suscipit adipiscing bibendum est ultricies integer quis.
                        Cursus euismod quis viverra nibh cras. Metus vulputate
                        eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Elementum
                        eu facilisis sed odio morbi. Euismod lacinia at quis
                        risus sed vulputate odio. Morbi tincidunt ornare massa
                        eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque
                        nec nam aliquam sem et tortor. Habitant morbi tristique
                        senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Cras tincidunt lobortis feugiat vivamus at
                        augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi
                        tincidunt. Lorem donec massa sapien faucibus et molestie
                        ac. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris.
                        Elementum eu facilisis sed odio morbi. Euismod lacinia
                        at quis risus sed vulputate odio. Morbi tincidunt ornare
                        massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac.
                        Pellentesque nec nam aliquam sem et tortor. Habitant
                        morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod
                        elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin
                        aliquam ultrices sagittis orci a. Commodo viverra
                        maecenas accumsan lacus vel facilisis. Nulla posuere
                        sollicitudin aliquam ultrices sagittis orci a. Metus
                        vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras
                        tincidunt lobortis feugiat vivamus at augue. At augue
                        eget arcu dictum varius duis at consectetur lorem. Velit
                        sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit.
                        Fringilla est ullamcorper eget nulla facilisi etiam
                        dignissim diam. Pulvinar elementum integer enim neque
                        volutpat ac tincidunt. Odio morbi quis commodo odio
                        aenean sed adipiscing. Amet nisl suscipit adipiscing
                        bibendum est ultricies integer quis. Cursus euismod quis
                        viverra nibh cras. Metus vulputate eu scelerisque felis
                        imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Elementum eu facilisis sed
                        odio morbi. Euismod lacinia at quis risus sed vulputate
                        odio. Morbi tincidunt ornare massa eget egestas purus
                        viverra accumsan in. In hendrerit gravida rutrum quisque
                        non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing
                        elit duis tristique sollicitudin nibh sit. Cras
                        tincidunt lobortis feugiat vivamus at augue. At augue
                        eget arcu dictum varius duis at consectetur lorem. Velit
                        sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac. Ornare suspendisse sed
                        nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi.
                        Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra
                        accumsan in. In hendrerit gravida rutrum quisque non
                        tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing
                        elit duis tristique sollicitudin nibh sit. Ornare aenean
                        euismod elementum nisi quis eleifend. Commodo viverra
                        maecenas accumsan lacus vel facilisis. Nulla posuere
                        sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                    <ScrollToTop>
                        <Fab size="small" aria-label="scroll back to top">
                            <Button>UP</Button>
                        </Fab>
                    </ScrollToTop>
                </Box>
            </Box>
        </Grid>
    );
}
