function Skills() {
  return (
    <>
      <div className="container section" id="skills">
        <div className="container-fluid text-center box">
          <h1 className="glow-effect">Skills</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-5 col-sm-12 m-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Programming Languages</b>
                </h5>
                <p className="card-text">
                  Langauges I have used in developing different apps
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img src="/icons/javascript.svg" alt="javascript-icon" />
                  <span>JavaScript</span>
                  <span className="right-align">Intermediate</span>
                </li>
                <li className="list-group-item">
                  <img src="/icons/typescript.svg" alt="typescript-icon" />
                  <span>TypeScript</span>
                  <span className="right-align">Basic</span>
                </li>
                <li className="list-group-item">
                  <img src="/icons/python.svg" alt="python-icon" />
                  <span>Python</span>
                  <span className="right-align">Intermediate</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12 m-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Frontend Technologies</b>
                </h5>
                <p className="card-text">
                  Tools I have used to design and create different UI
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img src="/icons/react.svg" alt="reactjs-icon" />
                  <span>ReactJS</span>
                  <span className="right-align">Basic</span>
                </li>
                <li className="list-group-item">
                  <img src="/icons/html5.svg" alt="html5-icon" />
                  <span>HTML</span>
                  <span className="right-align">Intermediate</span>
                </li>
                <li className="list-group-item">
                  <img src="/icons/css3.svg" alt="css3-icon" />
                  <span>CSS</span>
                  <span className="right-align">Basic</span>
                </li>
                <li className="list-group-item">
                  <img src="/icons/bootstrap.svg" alt="bootstrap-icon" />
                  <span>Bootstrap</span>
                  <span className="right-align">Basic</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12 m-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <b>Backend Technologies</b>
                </h5>
                <p className="card-text">
                  Tools I've used to develop in the backend.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img src="/icons/nodejs.svg" alt="nodejs-icon" />
                  <span> NodeJS</span>
                  <span className="right-align">Basic</span>
                </li>
                <li className="list-group-item">
                  <img src="/icons/sql.png" alt="png-icon" />
                  <span> SQL </span>
                  <span className="right-align">Intermediate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
