import SectionHeader from "./SectionHeader";
import RectangularDots from "./Shapes/RectangularDots";

export default function About() {
  return (
    <>
      <SectionHeader sectionName="About" />
      <div id="about" className="container" data-aos="fade-up">
        <div id="about-content">
          <p>Hello, i’m Pritam!</p>
          <br />
          <p>
            <span>A</span> passionate and results-driven Software Developer
            based in India. I specialize in building scalable and efficient
            applications using technologies like .NET and the MERN stack
            (MongoDB, Express.js, React, Node.js). With hands-on experience in
            both frontend and backend development, I enjoy solving complex
            problems and turning ideas into practical, high-quality software
            solutions. Whether it's developing RESTful APIs, crafting
            interactive UIs, or working on full-stack applications, I bring a
            strong attention to detail and a commitment to clean, maintainable
            code. I'm always eager to learn new tools, collaborate with
            like-minded professionals, and contribute to impactful projects.
          </p>
          <br />
          <p>
            Transforming my creativity and knowledge into websites has been my
            passion for over a year. I've helped various clients establish their
            online presence by building functional and visually appealing web
            solutions. In addition to web development, I have a strong interest
            in exploring networking concepts and the world of IoT (Internet of
            Things). I constantly strive to learn and stay updated with the
            latest technologies, tools, and frameworks to enhance both my
            development skills and understanding of connected systems.
          </p>
          <br />
          <button id="download-resume-btn">
            <a
              href="/Resource/Resume/PritamResume.pdf"
              download="Your_Resume.pdf"
            >
              Download Resume &nbsp;
              <i className="fa-solid fa-download"></i>
            </a>
          </button>
        </div>
        <div id="aboutImage">
          <RectangularDots rows="4" cols="4" classNameProp="aboutRectangleBox1" />
          <RectangularDots rows="4" cols="4" classNameProp="aboutRectangleBox2" />
          <RectangularDots rows="4" cols="4" classNameProp="aboutRectangleBox3" />
        </div>
      </div>
    </>
  );
}
