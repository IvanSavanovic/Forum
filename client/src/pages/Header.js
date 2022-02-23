import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import MenuButton from "./MenuButton";
import Search from "./Search";

export default function Header() {
    return (
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
    );
}
