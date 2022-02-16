import { Box, Button, Grid, Link, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === "" || emailRegex.test(email)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }, [email]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emailError === false) {
            localStorage.setItem("First Name:", firstName);
            localStorage.setItem("Last Name", lastName);
            localStorage.setItem("Email", email);
            localStorage.setItem("Password", password);
            navigate("/");
        }
    };

    return (
        <Grid
            sx={{
                maxWidth: "100%",
                minHeight: "95vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs>
                            <TextField
                                name="first name"
                                label="First Name"
                                type="text"
                                id="first name"
                                autoComplete="given-name"
                                required
                                value={firstName}
                                onChange={(event) => {
                                    setFirstName(event.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs ml={3}>
                            <TextField
                                name="last name"
                                label="Last Name"
                                type="text"
                                id="last name"
                                autoComplete="family-name"
                                required
                                value={lastName}
                                onChange={(event) => {
                                    setLastName(event.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="email"
                            label="Email Address"
                            type="email"
                            id="email"
                            autoComplete="email"
                            margin="normal"
                            required
                            fullWidth
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            error={emailError}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            margin="normal"
                            required
                            fullWidth
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        SIGN UP
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/" variant="body2">
                                {"Already have an account? Sign in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
}
