import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { useState } from "react";

export default function NewPost(props) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addPost({title: title, text: text, location: props.location})
        handleClose()
    };

    return (
        <Grid>
            <Button variant="contained" onClick={handleOpen}>
                New Post
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box
                    component="form"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "70vw",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        display: "flex",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Grid sx={{ width: "70vw" }}>
                        <Grid container direction="column">
                            <Grid item>
                                <TextField
                                    id="title"
                                    label="Post title"
                                    name="title"
                                    type="text"
                                    required
                                    fullWidth
                                    autoFocus
                                    value={title}
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="Post text"
                                    label="Post text"
                                    type="text"
                                    id="PostText"
                                    margin="normal"
                                    required
                                    fullWidth
                                    multiline
                                    rows={8}
                                    value={text}
                                    onChange={(event) => {
                                        setText(event.target.value);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                alignItems: "end",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Button type="submit" variant="contained">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Grid>
    );
}
