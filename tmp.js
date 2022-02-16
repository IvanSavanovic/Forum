const drawerWidth = 140;

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
        <Button href="/" variant="contained" sx={{ mt: 1 }} onClick={logout}>
            Logout
        </Button>
    </Toolbar>
    <List>
        {[
            "Category with very long name",
            "Category1",
            "Category2",
            "Category3 ",
            "Category4",
        ].map((text) => (
            <ListItemButton href={"/" + { text }} key={text}>
                <ListItemText primary={text} />
            </ListItemButton>
        ))}
    </List>
</Drawer>;
