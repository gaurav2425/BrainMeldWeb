import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import styles from "../../styles/ComponentStyles/Nav.module.css";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = "100%";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    background: "#000000",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  height: 50,
  //   background: "#000000",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ background: "#000000" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open} className={styles.app_bar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={styles.brainmeld_txt}>BrainMeld</h1>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div style={{ background: "#000000", height: "100%" }}>
          <div
            style={{ height: 80, background: "#000000" }}
            className={styles.menu_header}
          >
            {/* <Image
              src={require("../../public/logo.png")}
              className={styles.logo}
            /> */}
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon className={styles.nav_icon} />
            </IconButton>
          </div>

          <div className={styles.menu_container}>
            <h1 className={styles.menu1}>Home</h1>
            <h1 className={styles.menu1}>About</h1>
            <h1 className={styles.menu1}>Articles</h1>
            <h1 className={styles.menu1}>Contact</h1>
          </div>

          <div className={styles.menu_container2}>
            <h1 className={styles.menu2}>GPT4</h1>
            <h1 className={styles.menu2}>DALLE</h1>
            <h1 className={styles.menu2}>OPENAI</h1>
            <h1 className={styles.menu2premium}>PREMIUM</h1>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
