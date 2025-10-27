"use client";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-2 mt-auto border-top border-secondary">
      <div className="container text-center">
        <h5 className="fw-bold mb-1">🧙 The Campaign Chronicle</h5>
        <p className="mb-2 small text-muted">
          A living record of your party’s deeds, discoveries, and downfall.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-2 flex-wrap">
          <a href="/journal" className="text-decoration-none text-light small">
            Journal
          </a>
          <a
            href="/characters"
            className="text-decoration-none text-light small"
          >
            Characters
          </a>
          <a href="/world" className="text-decoration-none text-light small">
            World Info
          </a>
          <a href="/map" className="text-decoration-none text-light small">
            Map
          </a>
        </div>

        <p className="text-muted small mb-0">
          &copy; {new Date().getFullYear()} The Campaign Chronicle. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
