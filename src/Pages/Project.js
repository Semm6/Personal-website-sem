import "../Style/project.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Project() {
  return (
    <html>
      <body>
        <div>
          <h1>Projects 👨🏻‍💻</h1>
        </div>
        <div className="projects">
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Item>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg"
                      alt="github"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Project 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        first project i ever made
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg"
                      alt="github"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Project 2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Second project i ever made
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg"
                      alt="github"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Project 3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Third project i ever made
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg"
                      alt="github"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Project 4
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        fourth project i ever made
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </body>
    </html>
  );
}

export default Project;
