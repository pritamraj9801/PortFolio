import SectionHeader from './SectionHeader'
export default function Contact() {
  return (
    <>
      <SectionHeader sectionName="Contacts" />
      <div id="contact" className='container' data-aos="fade-up">
        <div>
          <p>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div id='message-me-box'>
          <p>Message Me here</p>
          <p>
            <i className="fa-solid fa-inbox"></i>
            &nbsp;
            <span>pritamraj9801@gmail.com</span>
          </p>
        </div>
      </div>
    </>
  );
}
