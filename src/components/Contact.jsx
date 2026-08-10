import "../styles/Contact.css";

function Contact() {

  return (

    <section id="contact">

      <div className="contact-container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="contact-text">
          Have a project, collaboration, or opportunity? I'd love to hear from you.
        </p>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Let's Connect</h3>

            <p>📍 Douala, Cameroon</p>

            <p>📧 ngwasolange12@gmail.com</p>

            <p>📧 ngwasolange3@gmail.com</p>

            <p>📱 +237 673 418 836</p>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message">
            </textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default Contact;