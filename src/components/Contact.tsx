function Contact() {
  return (
    <>
      <div className="container contact-section" id="contact">
        <div className="row justify-content-center">
          <div className="box">
            <h1 className="glow-effect">Contact me!</h1>
          </div>
        </div>
        <div className="row section">
          <div className="col-lg-2 vstack gap-2">
            <div className="contact-box">
              <h1>Social Links</h1>
              <a
                className="links"
                href="https://www.github.com/kais-codes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/github.png"
                  alt="github-icon"
                  className="contact-icon"
                />
              </a>
              <a
                className="links"
                href="https://www.linkedin.com/in/kyrneli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="linkedin-icon"
                  className="contact-icon"
                />
              </a>
              <a
                className="links"
                href="https://www.dropbox.com/scl/fi/0z676q9u5ipeq6rehtcvw/Kyrne-Li-Resume.pdf?rlkey=bc2q5vgin2glie7mhxeub704j&dl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/resume.png"
                  alt="resume-icon"
                  className="contact-icon"
                />
              </a>
              <a
                className="links"
                href="https://kyrnesblog.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/blog.png"
                  alt="blog-icon"
                  className="contact-icon"
                />
              </a>
            </div>
            <div className="contact-box parent">
              <h1>Send Me Mail</h1>
              <img
                src="/icons/mail.png"
                alt="mail-icon"
                className="mail-icon"
              />
              <br />
              <form action="mailto:&#107;&#121;&#114;&#110;&#101;&#046;&#108;&#105;&#064;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#046;&#099;&#111;&#109;">
                <button className="btn-main">Write me!</button>
              </form>
            </div>
          </div>

          <div className="col-lg-7 box">
            <p>Thank you for making it this far down here!</p>
            <p>
              Just a little more about myself outside of developing: I enjoy
              learning about new things, finding good eats, playing videogames,
              and spending time with my partner and our kitten Mango!
            </p>
            <p>
              My current goals are to expand on my skills by developing new
              projects, like this website! I want to consistently come back and
              improve on this website with new skills I acquire on this journey.
              Along the way, I would to meet new people and collaborate on
              projects and using my skills to build fun and intersting apps.
            </p>
            <p>
              I will keep on going until I reach my goal of becoming a
              successful software engineer. And after that, I will keep on
              learning and refining.
            </p>
            <p>
              Please don't hesitate on recaching out to me! I can be reached in
              those links on the left, I'm looking foward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
