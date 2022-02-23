const someTxt = "Category";

const renderPost = () => {
    const postList = [someTxt];
    return (
        <ListItem>
            {postList.map((post, index) => (
                <ListItemText key={index}>{post}</ListItemText>
            ))}
        </ListItem>
    );
};

const renderPost = () => {
    let postList = [];
    let i = 0;
    for (let posts of post) {
        postList.push(
            <ListItem key={i}>
                <ListItemText>{posts}</ListItemText>
            </ListItem>
        );
        i++;
    }
    return postList
};

<List sx={{ bgcolor: "#a0a0a00f" }}>
<ListItem>
    <ListItemText>
        <Typography variant="h5">{post.title}</Typography>
    </ListItemText>
</ListItem>
<ListItem>
    <ListItemText>
        <Typography variant="body1">{post.text}</Typography>
    </ListItemText>
</ListItem>
</List>