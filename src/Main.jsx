import { Box, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";
import Mainchild from "./Mainchild";
import QuiltedImageList from "./Imagelist";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Main = () => {
  return (
    <Fragment>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Mainchild />
          </Grid>
          <Grid item xs={6}>
            <Card style={{ marginRight: "15px" }}>
              <CardMedia
                component="img"
                height="340"
                width="100%"
                image={faker.image.animals()}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Animals images
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We must keep the earth healthy and protect the environment to
                  endanger animals. The earth will be destroyed quickly without
                  these creatures.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <h4 style={{ marginLeft: "100px" }}> People in chatroom</h4>
            <AvatarGroup
              style={{
                color: "black",
              }}
              total={284}
            >
              <Avatar
                alt="Remy Sharp"
                src={faker.image.people(1234, 2345, true)}
              />
              <Avatar
                alt="Travis Howard"
                src={faker.image.people(1234, 2345, true)}
              />
              <Avatar
                alt="Agnes Walker"
                src={faker.image.people(1234, 2345, true)}
              />
              <Avatar
                alt="Trevor Henderson"
                src={faker.image.people(1234, 2345, true)}
              />
            </AvatarGroup>
            <Card style={{marginLeft:"20px"}}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Email : smr.1994@yahoo.com
                </Typography>
                <Typography variant="h5" component="div">
                Forward{bull}to{bull}00{bull}victory
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  I LOve You
                </Typography>
                <Typography variant="body2">
                Strive to achieve your dreams
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <QuiltedImageList />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Main;
