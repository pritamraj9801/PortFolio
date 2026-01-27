import DivLock from "./Shapes/DivLock";
import RectangularDots from "./Shapes/RectangularDots";
export default function WelcomeInfo() {
  return (
    <div id="welcome-info" data-aos="fade-up">
      <div id="welcome-info-content">
        <p>
          Pritam is a <span className="hashMark">MernStack</span> and{" "}
          <span className="hashMark">.Net</span> Developer
        </p>
        <p>
          He Crafts Applications where Technologies meet creativity
        </p>
        <br />
        <button id="contact-me-btn">
          <a href="mailto:pritamraj9801@gmail.com">Contact Me !!</a>
        </button>
      </div>
      <div>
        <DivLock class="welcomeInfoDivLock" />
        <div id="pic">
            <img src="/images/welcomeInfo.png" alt="Welcome Info" />
             <RectangularDots rows="4" cols="4" class="welcomeInfoDotBox" />
          <div id="working-marker">
            <span></span>Currently Working On PortFolio
          </div>
        </div>
      </div>
    </div>
  );
}
