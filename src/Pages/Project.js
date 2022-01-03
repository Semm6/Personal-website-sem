import "../Style/project.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Project() {
  return (
    <html>
      <body>
        <div>
          <h1>Projects 👨🏻‍💻</h1>
          <div className="info">
            <div className="grid">
              <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image="https://cdn.dribbble.com/users/1671186/screenshots/7103694/media/7e6a6c5a4e6d9afd51364b17ca627e08.gif"
                        alt="Whitelabel webshop"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Whitelabel webshop
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image="https://i.postimg.cc/1RV8VDrv/product.gif"
                        alt="Product api"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Product API
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image="https://i.postimg.cc/HkqvwqJr/Restaurant.gif"
                        alt="Restaurant"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Restaurant system
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image="https://i.postimg.cc/YqQFsTjc/Auth0.gif"
                        alt="Auth0"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Auth0 Swift POC
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} mb={10}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image="https://i.postimg.cc/9ftMCjZT/cagliostro.gif"
                        alt="Restaurant"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Bas Beetle Parts
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} mb={10}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250"
                        image="https://i.postimg.cc/25w0vVn5/fruit-tree.gif"
                        alt="Car"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Tree nursery Cox
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Project;
