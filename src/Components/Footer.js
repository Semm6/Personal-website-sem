import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FixedBottomNavigation() {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            href="https://www.instagram.com/semdw/"
            label="Instagram"
            icon={<InstagramIcon />}
          />
          <BottomNavigationAction
            href="https://www.linkedin.com/in/sem-de-wilde-888aa4156/"
            label="LinkedIn"
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            href="https://twitter.com/sem_de_wilde"
            label="Twitter"
            icon={<TwitterIcon />}
          />
          <BottomNavigationAction
            href="https://github.com/Semm6"
            label="GitHub"
            icon={<GitHubIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
