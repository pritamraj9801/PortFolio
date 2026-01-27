import SectionHeader from "./SectionHeader";
import SkillsLeftDesign from "./Shapes/SkillsLeftDesign"
export default function Skills() {
  return (
    <>
      <SectionHeader sectionName="Skills" />
      <div id="skills" data-aos="fade-up">
        <div id="skills-design">
          <SkillsLeftDesign/>
        </div>
        <div id="skills-list">
          <div>
            <ul className="skill-list-box">
              <li className="skill-list-box-heading">Language</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>C#</li>
              <li>JQuery</li>
              <li>Jquery UI</li>
            </ul>
          </div>
          <div>
            <div>
              <ul className="skill-list-box">
                <li className="skill-list-box-heading">Databases</li>
                <li>SQL Server</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="skill-list-box">
              <li className="skill-list-box-heading">Tools</li>
              <li>GitHub</li>
            </ul>
            <ul className="skill-list-box">
              <li className="skill-list-box-heading">Frameworks</li>
              <li>ASP.NET MVC</li>
              <li>React.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Angular.js</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
