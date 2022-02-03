import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

export default function Register() {
    const handelSubmit = (event) => {
        //event.preventDefault();
        console.log("");
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "center",
                    alignItems: "center",
                }}
            >
                <Box component="form" onSubmit={handelSubmit()} noValidate>
                    <TextField label="First Name" />
                    <TextField label="Last Name" />
                    <TextField label="Email Address" />
                    <TextField label="Password" />
                    <Button>SIGN UP</Button>
                </Box>
            </Box>
        </Container>
    );
}
