import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberSelected, setRememberSelected] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("Remember me", false);
        if(localStorage.getItem("Email") && localStorage.getItem("Password")){
            setEmail(localStorage.getItem("Email"))
            setPassword(localStorage.getItem("Password"))
        }
    }, []);

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
            localStorage.setItem("Email", email);
            localStorage.setItem("Password", password);
            navigate("/Home");
        }
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const rememberChange = () => {
        if (rememberSelected === false) {
            setRememberSelected(true);
            localStorage.setItem("Remember me", true);
        } else {
            setRememberSelected(false);
            localStorage.setItem("Remember me", false);
        }
    };

    return (
        <Grid
            sx={{
                maxWidth: "xs",
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
                    <Grid item>
                        <TextField
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type="email"
                            required
                            fullWidth
                            autoFocus
                            value={email}
                            onChange={handleEmail}
                            error={emailError}
                        />
                    </Grid>
                    <Grid item>
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
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value={true}
                                    color="primary"
                                    onChange={rememberChange}
                                />
                            }
                            label="Remember me"
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                     
                        <Grid item xs>
                            <Link marginX={10} href="/Register" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    );
}
