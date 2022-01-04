import "../Style/skills.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Route } from "react-router-dom";

function Skills() {
  document.title = Route.title = "Skills";
  return (
    <html>
      <body>
        <div>
          <h1>Skills 🎯</h1>
          <div className="info">
            <h2>Front-end</h2>
            <hr className="line" />
            <div className="grid">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/jSKjPCzL/5352-html5-102567.png"
                          alt="HTML"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>HTML</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/HkPfHhsd/a32f83aa2c675058e4a05a0fd4da05eb.png"
                          alt="CSS"
                        />
                      </Grid>
                      <Grid item xs>
                        <span className="spanitem">
                          {" "}
                          <p>CSS</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/dQyQfG6h/Javascript-Logo.png"
                          alt="Javascript"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>Javascript</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/W3cY1LRL/React.webp"
                          alt="React"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>React</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="info">
            <h2>Back-end</h2>
            <hr className="line" />
            <div className="grid2">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/jjB06kGZ/java-logo-vector.png"
                          alt="Java"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>Java</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/FFg81RsP/67e4dee31014593770dfcd064e9faf24a982881c.png"
                          alt="ASP.NET"
                        />
                      </Grid>
                      <Grid item xs>
                        <span className="spanitem">
                          {" "}
                          <p>ASP.NET</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="info">
            <h2>Database</h2>
            <hr className="line" />
            <div className="grid2">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/cLKF740G/My-SQL-Logo.png"
                          alt="MySQL"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>MySQL</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/28JSsLzL/Firebase.png"
                          alt="Firebase"
                        />
                      </Grid>
                      <Grid item xs>
                        <span className="spanitem">
                          {" "}
                          <p>Firebase</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="info">
            <h2>Version control</h2>
            <hr className="line" />
            <div className="grid2">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/zXWf1X3d/Github.jpg"
                          alt="GitHub"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>GitHub</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/44pCfKbh/Jira.png"
                          alt="Jira"
                        />
                      </Grid>
                      <Grid item xs>
                        <span className="spanitem">
                          {" "}
                          <p>Jira</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="info">
            <h2>Code editors</h2>
            <hr className="line" />
            <div className="grid">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/ZKWn41J5/file-type-vscode-icon-130084.png"
                          alt="VsCode"
                        />
                      </Grid>
                      <Grid item xs zeroMinWidth>
                        <span className="spanitem">
                          {" "}
                          <p>VsCode</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper sx={{ maxWidth: 500, my: 1, mx: "auto", p: 2 }}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                        <img
                          className="headimg"
                          src="https://i.postimg.cc/28Sc67t6/Intelli-J-IDEA-Icon-svg.png"
                          alt="IntelliJ"
                        />
                      </Grid>
                      <Grid item xs>
                        <span className="spanitem">
                          {" "}
                          <p>IntelliJ</p>
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Skills;
