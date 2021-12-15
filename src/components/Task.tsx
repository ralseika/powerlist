import {
  Checkbox,
  IconButton,
  ListItem,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Task() {
  return (
    <ListItem>
      <Checkbox />
      <Typography variant="body1" style={{flexGrow:1}}>
        Task Name
      </Typography>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
