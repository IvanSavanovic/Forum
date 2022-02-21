import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const updateSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearch = (e) => {
        e.preventDefault();
        setSearch("");
    };

    return (
        <Grid item component="form" onSubmit={getSearch}>
            <TextField
                id="search"
                label="Search field"
                type="search"
                size="small"
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ ml: 0.5 }}
                value={search}
                onClick={updateSearch}
            >
                Search
            </Button>
        </Grid>
    );
}
