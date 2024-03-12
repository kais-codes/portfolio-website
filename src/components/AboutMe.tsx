function AboutMe() {
  return (
    <>
      <div className="container bordered" id="aboutme">
        <div className="text-center">
          <h1>A Little About Me</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 box">
            <h1>Kyrne Li</h1>
            <div>
              <img src="/pfp.jpg" alt="profile" className="pfp" />
            </div>
          </div>
          <div className="col-6 box">[info about me]</div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
