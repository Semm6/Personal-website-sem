import "../Style/resume.css";

function Resume() {
  return (
    <div className="App">
      <h1>Resume 📃</h1>
      <div className="info">
        <h2>Year 1</h2>
        <hr className="line" />
        <h3>Personal project</h3>
        <p>...</p>
        <h3>Group project</h3>
        <p>...</p>
      </div>
      <div className="info">
        <h2>Year 2</h2>
        <hr className="line" />
        <h3>Personal project</h3>
        <p>...</p>
        <h3>Group project</h3>
        <p>...</p>
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
