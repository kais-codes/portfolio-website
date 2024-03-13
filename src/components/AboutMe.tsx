import "../css/About.css";

function AboutMe() {
  const travel = () => {
    window.location.href = "#contact";
  };

  return (
    <>
      <div className="container section" id="aboutme">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-12 box">
            <div>
              <h1 className="name-effects">KYRNE LI</h1>
            </div>
            <div>
              <img src="/pfp.jpg" alt="profile" className="pfp" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 box">
            <p>
              Hello and welcome! My name is Kai and I am an aspiring software
              engineer based in Portland, OR. I am always learning and building
              out different projects to expand and refine my skillset.
            </p>
            <button className="btn-main" onClick={travel}>
              <span>Contact me! </span>
              <img src="/icons/send.png" alt="send-button" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
