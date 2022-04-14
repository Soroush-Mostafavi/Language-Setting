import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { faker } from "@faker-js/faker";
import { useTranslation } from 'react-i18next';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Mainchild = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { t} = useTranslation();
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card style={{ marginLeft: "20px" }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            aria-label="recipe"
            sx={{ width: 50, height: 50 }}
          /> 
        }
        action={
            
          <IconButton aria-label="settings">
          <h6>{faker.address.country()}</h6>  <MoreVertIcon /> 
          </IconButton>
        }
        title={faker.name.firstName()}
        subheader={faker.date.month()}
       
      />
      
      <CardMedia
        component="img"
        height="340"
        width="100%"
        image={faker.image.city()}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          style={{ fontWeight: "bold" }}
          variant="body2"
          color="text.secondary"
        >
          {t("Traveling is the best way to change the human spirit and body. Away from the busyness of life, every normal person should spend time in the year traveling and traveling.1")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Traveling or Travelling?
          </Typography>
          <Typography paragraph>
            It’s wonderful to travel—to meet new people, see new places,
            experience different cultures, live life the way life is lived
            somewhere else. Plenty of good things are associated with travel,
            but there’s one particular issue that can make traveling annoying:
            the spelling. Travel is easy enough to spell and not at all
            confusing, but “traveling,” “traveler,” “traveled”? 
          </Typography>
          <Typography paragraph>
          These words are
            a common cause of confusion because some people spell them with one
            L while others use two. Traveling or travelling depends on where is
            your audience. Traveling is the preferred spelling in the U.S.
            Travelling is the preferred spelling in the UK or in the
            Commonwealth. This American-British spelling difference carries for
            other forms: traveled or travelled and traveler or traveller.
          </Typography>
          <Typography>
           Soroush Mostafavi
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Mainchild;
