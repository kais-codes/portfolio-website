function AboutMe() {
  return (
    <>
      <div className="container bordered" id="aboutme">
        <div className="box">
          <h1>Kyrne Li</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 box">
            <div>
              <img src="/pfp.jpg" alt="profile" className="pfp" />
            </div>
          </div>
          <div className="col-6 box">
            <p>
              Hello and welcome! My name is Kai and I am an aspiring software
              engineer based in Portland, Oregon!
            </p>
            <button className="btn-main">
              <a href="#contact"></a>Contact me!{" "}
              <img src="/icons/send.png" alt="send-button" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
