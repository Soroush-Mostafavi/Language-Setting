import React from "react";
import { Button, Grid } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: "10px",
  fontWeight: "bold",
  fontSize: "15px",
  color: theme.palette.text.secondary,
}));

const Item1 = styled(Paper)(({ theme }) => ({
  fontSize: "25px",
  height: "65px",
  textAlign: "center",
  paddingTop: "5px",
}));
const ITEM_HEIGHT = 48;
const Header = () => {

  const { t } = useTranslation();

  function handleClicki(lang) {
    i18next.changeLanguage(lang);
  }
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            {" "}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                className="ml-5"
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                      width:"600px",
                    maxHeight: ITEM_HEIGHT * 4.5,
                  },
                }}
              >
                <div>
                  <MenuItem onClick={handleClose}>
                    <Button variant="primary" onClick={() => handleClicki("en")} >
                      Engish{" "}
                      <img
                        src="img/United_Kingdom.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("fr")} >
                      French{" "}
                      <img
                        src="img/france.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("ar")} >
                      Arabic{" "}
                      <img
                        src="img/United_Arab_Emirates_(3-2).svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("esp")} >
                      Spanish{" "}
                      <img
                        src="img/Spain.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("jap")} >
                      Japanese{" "}
                      <img
                        src="img/Japon.jpg"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                  </MenuItem>{" "}
                  <MenuItem onClick={handleClose}>
                    <Button variant="primary" onClick={() => handleClicki("ger")} >
                      Germany{" "}
                      <img
                        src="img/Germany.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("rus")} >
                      Russian{" "}
                      <img
                        src="img/Russia.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("ita")} >
                      Italian{" "}
                      <img
                        src="img/Italy.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("ko")} >
                      S.Korean{" "}
                      <img
                        src="img/South_Korea.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                    <Button variant="primary" onClick={() => handleClicki("hol")} >
                      Holand{" "}
                      <img
                        src="img/Netherlands.svg.png"
                        alt="image"
                        width="30px"
                        height="20px"
                        style={{ marginLeft: "10px" }}
                      />{" "}
                    </Button>
                  </MenuItem>
                </div>
              </Menu>
              <h4>Language Setting </h4>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item1>Sorousht mini project</Item1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
