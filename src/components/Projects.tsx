function Projects() {
  return (
    <>
      <div className="container" id="projects">
        <div className="row">
          <div className="container-fluid text-center box">
            <h1 className="glow-effect">Projects I've Worked on and Created</h1>
          </div>
          <div className="col-lg-5 carousel">
            <div id="projects-carousel" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#projects-carousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#projects-carousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#projects-carousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#projects-carousel"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/carousel-images/quiz.png"
                    className="d-block w-100"
                    alt="quiz-image"
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/carousel-images/tools.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/carousel-images/gym-tracker.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/carousel-images/text-editor.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#projects-carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#projects-carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <p className="carousel-text">
            All of my projects can be found on my GitHub
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
