import { Box, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 1.5,
                display:"flex",
                minWidth: "99.9vw",
                left: 0,
                backgroundColor: "#f5f5f5",
                boxShadow: "0px 2px 4px 1px",   
            }}
        >
            <Grid container>
                <Grid item xs>
                    <Typography
                        sx={{ ml: 2 }}
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                    >
                        <Link href="https://github.com/IvanSavanovic">
                            Github page
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
