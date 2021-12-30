import "../Style/skills.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.primary.main,
}));

function Skills() {
  return (
    <html>
      <body>
        <div>
          <h1>Skills 🎯</h1>
          <div className="info">
            <h2>Web dev</h2>
            <hr className="line" />
            <div className="grid">
              <Grid item xs={16}>
                <Item>HTML CSS</Item>
              </Grid>
            </div>
            <div className="grid">
              <Grid item xs={16}>
                <Item>JavaScript</Item>
              </Grid>
            </div>
            <div className="grid">
              <Grid item xs={16}>
                <Item>React</Item>
              </Grid>
            </div>
          </div>
          <div className="info">
            <h2>App dev</h2>
            <hr className="line" />
            <p></p>
          </div>
          <div className="info">
            <h2>Database</h2>
            <hr className="line" />
            <p></p>
          </div>
          <div className="info">
            <h2>Version control</h2>
            <hr className="line" />
            <p></p>
          </div>
          <div className="info">
            <h2>General skills</h2>
            <hr className="line" />
            <p></p>
          </div>
          <div className="info">
            <h2>Languages</h2>
            <hr className="line" />
            <p></p>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Skills;
