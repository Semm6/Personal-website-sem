import "../Style/resume.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Resume() {
  return (
    <div className="App">
      <h1>Resume 📃</h1>
      <div className="info">
        <h2>Year 1</h2>
        <hr className="line" />
        <h3>Personal and group project</h3>
        <p>
          In the first half of the year i made an IOS app called{" "}
          <a href="https://github.com/Semm6/CoronaChecker">CoronaChecker</a>.
          This app is made with Swift. The purpose of the app is to check
          whether someone should be tested if they have alot of complaints that
          are connected to the corona virus. Before you are able to use the app
          you have to log in. All the data is stored in Firebase.
        </p>
        <div>
          <Stack direction="row" spacing={1}>
            <Chip label="Swift" size="medium" color="error" />
            <Chip label="Firebase" size="medium" />
          </Stack>
        </div>
        <hr />
        <h3>Personal project</h3>
        <p>
          In the second half of the year i made an web application called
          TheFoodHouse. This is an Webshop made with ASP.NET MVC and MySQL i
          also learned how to deploy websites with FTP and filezilla.
        </p>
        <div>
          <Stack direction="row" spacing={1}>
            <Chip label="ASP.NET MVC" size="small" color="secondary" />
            <Chip label="C#" size="small" color="success" />
            <Chip label="MySQL" size="small" color="warning" />
          </Stack>
        </div>
        <h3>Group project</h3>
        <p>
          In the second half of the year i made a project that made top 40's
          based on popular songs of all time. This was done with an API. This
          top 40 list also showed if numbers changed position just like spotify.
        </p>
        <div>
          <Stack direction="row" spacing={1}>
            <Chip label="ASP.NET MVC" size="small" color="secondary" />
            <Chip label="C#" size="small" color="success" />
            <Chip label="MySQL" size="small" color="warning" />
          </Stack>
        </div>
      </div>
      <div className="info">
        <h2>Year 2</h2>
        <hr className="line" />
        <h3>Personal project</h3>
        <p>
          At the start of the second year i build a{" "}
          <a href="https://github.com/Semm6/Whitelabel-webshop">
            white label webshop
          </a>{" "}
          with React and Springboot. This is a good combination for fullstack
          development. I also used MySQL, docker and for testing i used unit and
          integration testing. In this semester i also learned alot about open
          source and research and the Github flow.
        </p>
        <div>
          <Stack direction="row" spacing={1}>
            <Chip label="React" size="small" color="info" />
            <Chip label="Springboot" size="small" color="success" />
            <Chip label="MySQL" size="small" color="warning" />
          </Stack>
        </div>
        <h3>Group project</h3>
        <p>
          For the group project me and my teammates made a restaurant system
          with React, Springboot, websockets and PostgreSQL. This project was
          commissioned by Mediaan.
        </p>
        <div>
          <Stack direction="row" spacing={1}>
            <Chip label="React" size="small" color="info" />
            <Chip label="Springboot" size="small" color="success" />
            <Chip label="PostgreSQL" size="small" color="warning" />
          </Stack>
        </div>
      </div>
      <div className="info">
        <h2>Year 3</h2>
        <hr className="line" />
        <p>-</p>
      </div>
      <div className="info">
        <h2>Year 4</h2>
        <hr className="line" />
        <p>-</p>
      </div>
    </div>
  );
}

export default Resume;
