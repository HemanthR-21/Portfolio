import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-1">
          &copy; 2025 Hemanth Rapelli. All Rights Reserved.
        </p>
        <p className="mb-3">
          Designed and developed by <strong>Hemanth Rapelli</strong>.
        </p>
        <div>
          <a
            href="https://github.com/HemanthR-21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm me-2"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hemanth-rapelli-006bbb329/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm me-2"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://wa.me/9705763238"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm me-2"
          >
            <i className="bi bi-whatsapp"></i> Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
