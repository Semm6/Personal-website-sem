import "../Style/about.css";
import { Route } from "react-router-dom";

function About() {
  document.title = Route.title = "About";
  return (
    <html>
      <body>
        <div>
          <h1>Hi, my name is Sem de Wilde 👋🏼</h1>
          <div className="info">
            <h2>About</h2>
            <hr className="line" />
            <p>
              My name is Sem and i live in the Netherlands. Currently i'm a
              second year student in Software engineering at Fontys Hogeschool
              Eindhoven. This is a 4 year bachelor education. I like working in
              teams and i'm very motivated.
            </p>
          </div>
          <div className="info">
            <h2>Work</h2>
            <hr className="line" />
            <p>
              Currently i'm in the first semester from the second year and made
              1 big project for Mediaan (a restaurant system). In the second
              semester from year 2 i will be picking a specialization called
              open learning. This is a specialization where you will be choosing
              yourself what you want to learn.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

export default About;
