import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import CampaignIcon from "@mui/icons-material/Campaign";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();

    const handleAnnouncements = () => {
        navigate("/Announcements");
    };

    const handleGeneralDiscussion = () => {
        navigate("/");
    };

    const handleCommentsFeedback = () => {
        navigate("/");
    };

    return (
        <List sx={{ ml: 3 }}>
            <ListItemButton
                sx={{ paddingTop: 3, paddingBottom: 3 }}
                onClick={handleAnnouncements}
            >
                <ListItemIcon>
                    <CampaignIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h3">Announcements</Typography>
                </ListItemText>
            </ListItemButton>
            <ListItemButton
                sx={{ paddingTop: 3, paddingBottom: 3 }}
                onClick={handleGeneralDiscussion}
            >
                <ListItemIcon>
                    <ForumIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h3">General Discussion</Typography>
                </ListItemText>
            </ListItemButton>
            <ListItemButton
                sx={{ paddingTop: 3, paddingBottom: 3 }}
                onClick={handleCommentsFeedback}
            >
                <ListItemIcon>
                    <QuizIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h3">Comments and Feedback</Typography>
                </ListItemText>
            </ListItemButton>
        </List>
    );
}
