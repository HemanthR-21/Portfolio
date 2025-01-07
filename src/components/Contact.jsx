import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("Form Data Submitted:", formData);
          setSubmitted(true);

          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <section id="contact" className="bg-light py-5 my-5">
        <div className="container">
          <h2 className="text-center my-4">Contact Me</h2>
          <p className="text-center mb-5">
            Feel free to reach out for collaborations, opportunities, or just to
            say hi!
          </p>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                {submitted && (
                  <p className="mt-3 text-success">
                    Message sent successfully!
                  </p>
                )}
              </form>
            </div>
            <div className="col-md-6 text-center">
              <h4>Get in Touch</h4>
              <p className="mb-1">
                <i className="bi bi-envelope me-2"></i>
                hemanth.rapelli2225@gmail.com
              </p>
              <p className="mb-1">
                <i className="bi bi-phone me-2"></i>
                +91 9705763238
              </p>
              <p>
                <i className="bi bi-geo-alt me-2"></i>
                Warangal, Telangana, India
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/HemanthR-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark me-2"
                >
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hemanth-rapelli-006bbb329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://wa.me/9705763238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  <i className="bi bi-whatsapp"></i> Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
